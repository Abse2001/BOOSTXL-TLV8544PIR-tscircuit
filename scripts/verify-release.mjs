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

const components = ofType("source_component");
assert.equal(components.length, 70, "Unexpected source component count");
assert.equal(ofType("source_net").length, 40, "Unexpected source net count");
assert(ofType("pcb_trace").length > 0, "PCB was not routed");

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
const requiredConnections = [
	".C22 > .pin1 to net.V3P3_TLV",
	".C22 > .pin2 to net.V_POS_TLV",
	".NT2 > .pin1 to net.V3P3_TLV",
	".NT2 > .pin2 to net.V3P3_REF",
	".NT3 > .pin1 to net.V3P3_TLV",
	".NT3 > .pin2 to net.V3P3_INA",
	".U3 > .OUT to net.BUFFER_OUT",
	".U3 > .IN_NEG to net.BUFFER_OUT",
	".U3 > .IN_POS to net.V_POS_TLV",
	".U3 > .V_POS to net.V5_FILTERED",
	".U3 > .V_NEG to net.GND",
	".A1 > .d to net.PIR_VIN1",
	".A1 > .s to net.PIR_VOUT_RAW",
	".A1 > .g to net.GND",
];

for (const connection of requiredConnections) {
	assert(
		traceNames.has(connection),
		`Required connection is missing: ${connection}`,
	);
}

console.log(
	`Release checks passed: ${components.length} components, ${ofType("source_net").length} nets, ` +
		`${ofType("pcb_trace").length} PCB traces, ${ofType("pcb_via").length} vias, 0 errors.`,
);
