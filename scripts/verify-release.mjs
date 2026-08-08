import assert from "node:assert/strict";

const circuitPath = "dist/index/circuit.json";
assert(
	await Bun.file(circuitPath).exists(),
	`${circuitPath} is missing; run bun run build first`,
);

const circuit = await Bun.file(circuitPath).json();
const ofType = (type) => circuit.filter((element) => element.type === type);

const errors = circuit.filter((element) =>
	String(element.type).includes("error"),
);
assert.deepEqual(
	errors.map((element) => ({ type: element.type, message: element.message })),
	[],
	"Circuit JSON contains release-blocking errors",
);

const sourceComponents = ofType("source_component");
const physicalSourceComponentIds = new Set(
	ofType("pcb_component").map((component) => component.source_component_id),
);
const components = sourceComponents.filter((component) =>
	physicalSourceComponentIds.has(component.source_component_id),
);
const schematicOnlyComponents = sourceComponents
	.filter(
		(component) =>
			!physicalSourceComponentIds.has(component.source_component_id),
	)
	.map((component) => component.name)
	.sort();
assert.equal(components.length, 70, "Unexpected physical component count");
assert.deepEqual(
	schematicOnlyComponents,
	["U1A", "U1B", "U1C", "U1D", "U3A"],
	"Unexpected schematic-only component projections",
);
assert.equal(ofType("source_net").length, 40, "Unexpected source net count");
assert(ofType("pcb_trace").length > 0, "PCB was not routed");
const vias = ofType("pcb_via");
assert(vias.length > 0, "Expected routed vias");
assert(
	vias.every((via) => via.hole_diameter >= 0.3),
	"A via drill is smaller than the board's 0.3-mm minimum",
);
assert(
	vias.every((via) => via.outer_diameter >= 0.45),
	"A via pad is smaller than the board's 0.45-mm minimum",
);

const oversizedSchematicLabels = ofType("schematic_net_label")
	.map((label) => label.text)
	.filter((text) => text.length > 8);
assert.deepEqual(
	oversizedSchematicLabels,
	[],
	"Schematic net labels must stay compact enough to fit their sections",
);
assert.equal(
	ofType("schematic_element_outside_sheet_warning").length,
	0,
	"A schematic element extends outside its sheet",
);

const sheetIdByName = new Map(
	ofType("schematic_sheet").map((sheet) => [sheet.name, sheet.schematic_sheet_id]),
);
const page1DividerLabels = ofType("schematic_net_label").filter(
	(label) =>
		label.schematic_sheet_id === sheetIdByName.get("PAGE1") &&
		label.anchor_position.y > 0 &&
		label.anchor_position.y < 1.5,
);
assert.deepEqual(
	page1DividerLabels.map((label) => label.text),
	[],
	"A Page 1 net label intrudes into the horizontal section divider",
);
const page2DividerLabels = ofType("schematic_net_label").filter(
	(label) =>
		label.schematic_sheet_id === sheetIdByName.get("PAGE2") &&
		label.anchor_position.x > 1.5 &&
		label.anchor_position.x < 2.5,
);
assert.deepEqual(
	page2DividerLabels.map((label) => label.text),
	[],
	"A Page 2 net label intrudes into the vertical section divider",
);

const board = ofType("pcb_board")[0];
assert(board, "PCB board is missing");
assert.equal(board.width, 60.96, "Unexpected board width");
assert.equal(board.height, 50.8, "Unexpected board height");
assert.equal(board.num_layers, 2, "Unexpected copper-layer count");

const componentByName = new Map(
	components.map((component) => [component.name, component]),
);
const requiredMpns = {
	A1: "IRA-S210ST01",
	U1: "TLV8544PWR",
	U2: "INA226AIDGSR",
	U3: "TLV333IDBVR",
	J1: "SSQ-110-03-G-D",
	J2: "SSQ-110-03-G-D",
	J3: "DZ254S-11-02-48",
	J4: "DZ254S-11-02-48",
	D1: "19-217/R6C-AL1M2VY/3T",
	D2: "19-213/Y2C-CQ2R2L/3T(CY)",
	D3: "19-217/G7C-AN1P2/6T",
	D4: "1N4148X-TP",
	D5: "1N4148X-TP",
	L1: "BLM18HE152SN1D",
	L2: "BLM18HE152SN1D",
	TP1: "5001",
	TP2: "5001",
	R21: "RT0603BRD0715KL",
	C22: "GRM188R71E104KA01D",
};

for (const [name, manufacturerPartNumber] of Object.entries(requiredMpns)) {
	assert.equal(
		componentByName.get(name)?.manufacturer_part_number,
		manufacturerPartNumber,
		`${name} MPN changed or is missing`,
	);
}

for (const name of ["L1", "L2"]) {
	const ferriteBead = componentByName.get(name);
	assert.equal(
		ferriteBead?.ftype,
		"simple_inductor",
		`${name} must use the native inductor component`,
	);
	assert.equal(
		ferriteBead?.inductance,
		"2.387uH",
		`${name} equivalent inductance changed`,
	);
	assert.deepEqual(
		ferriteBead?.supplier_part_numbers?.jlcpcb,
		["C82155"],
		`${name} must retain the imported JLCPCB part`,
	);

	const sourcePorts = ofType("source_port").filter(
		(port) => port.source_component_id === ferriteBead.source_component_id,
	);
	assert.equal(
		sourcePorts.length,
		2,
		`${name} must have exactly two source ports`,
	);

	const schematicComponent = ofType("schematic_component").find(
		(component) =>
			component.source_component_id === ferriteBead.source_component_id,
	);
	assert.equal(
		schematicComponent?.symbol_name,
		"inductor_right",
		`${name} must use the native inductor schematic symbol`,
	);

	const sourcePortIds = new Set(sourcePorts.map((port) => port.source_port_id));
	const schematicPorts = ofType("schematic_port").filter((port) =>
		sourcePortIds.has(port.source_port_id),
	);
	assert.equal(
		schematicPorts.length,
		2,
		`${name} must have exactly two schematic ports`,
	);
	assert(
		schematicPorts.every((port) => port.is_connected),
		`${name} schematic ports must both be connected`,
	);
}

const missingMpn = components
	.filter((component) => !component.manufacturer_part_number)
	.map((component) => component.name);
assert.deepEqual(missingMpn, [], "Every populated component must have an MPN");

const missingSupplier = components
	.filter((component) => !component.supplier_part_numbers)
	.map((component) => component.name);
assert.deepEqual(
	missingSupplier,
	[],
	"Every automatically assembled component must have a supplier part number",
);

const circuitSource = await Bun.file("index.circuit.tsx").text();
assert.equal(
	(circuitSource.match(/<schematicsection/g) ?? []).length,
	5,
	"Expected five native schematic sections",
);
for (const sectionName of [
	"PIR_SIGNAL_CONDITIONING",
	"LAUNCHPAD_CONNECTORS",
	"USER_LEDS",
	"POWER_FILTERING",
	"CURRENT_MONITOR",
]) {
	assert(
		circuitSource.includes(`name="${sectionName}"`),
		`Missing native schematic section: ${sectionName}`,
	);
}
for (const forbiddenNativeTag of [
	"chip",
	"diode",
	"led",
	"pinheader",
	"testpoint",
	"inductor",
]) {
	assert(
		!circuitSource.includes(`<${forbiddenNativeTag}`),
		`Non-passive <${forbiddenNativeTag}> must be instantiated from a JLCPCB import`,
	);
}

const traceNames = new Set(
	ofType("source_trace").map((trace) => trace.display_name),
);
const explicitTraceNames = new Set(
	ofType("source_trace").map((trace) => trace.name).filter(Boolean),
);
for (const traceName of ["V5_IN", "V5_FILT", "U3_FB", "U3_BUF", "U3_V5"]) {
	assert(
		explicitTraceNames.has(traceName),
		`Required compact named trace is missing: ${traceName}`,
	);
}
const requiredConnections = [
	".C22 > .pin1 to net.V33_TLV",
	".C22 > .pin2 to net.V_TLV",
	".NT2 > .pin1 to net.V33_TLV",
	".NT2 > .pin2 to net.V33_REF",
	".NT3 > .pin1 to net.V33_TLV",
	".NT3 > .pin2 to net.V33_INA",
	".U3 > .OUT to net.BUF_OUT",
	".U3 > .IN_NEG to net.BUF_OUT",
	".U3 > .IN_POS to net.V_TLV",
	".U3 > .V_POS to net.V5_FILT",
	".U3 > .V_NEG to net.GND",
	".A1 > .d to net.PIR_IN",
	".A1 > .s to net.PIR_RAW",
	".A1 > .g to net.GND",
];

for (const connection of requiredConnections) {
	assert(
		traceNames.has(connection),
		`Required connection is missing: ${connection}`,
	);
}

console.log(
	`Release checks passed: ${components.length} physical components, ${schematicOnlyComponents.length} schematic-only projections, ` +
		`${ofType("source_net").length} nets, ` +
		`${ofType("pcb_trace").length} PCB traces, ${ofType("pcb_via").length} vias, 0 errors.`,
);
