import diodeObjPath from "./imports/A_1N4148X_TP/A_1N4148X_TP.obj";
import diodeStepPath from "./imports/A_1N4148X_TP/A_1N4148X_TP.step";
import beadObjPath from "./imports/BLM18HE152SN1D/BLM18HE152SN1D.obj";
import beadStepPath from "./imports/BLM18HE152SN1D/BLM18HE152SN1D.step";
import inaObjPath from "./imports/INA226AIDGSR/INA226AIDGSR.obj";
import inaStepPath from "./imports/INA226AIDGSR/INA226AIDGSR.step";
import tlvObjPath from "./imports/TLV8544PWR/TLV8544PWR.obj";
import tlvStepPath from "./imports/TLV8544PWR/TLV8544PWR.step";
import { SSQ_110_03_G_D } from "./imports/SSQ_110_03_G_D/SSQ_110_03_G_D";

/**
 * Nets are named after the labels in TI schematic SNOU148A, Figures 27 and 28.
 * Extra internal names describe unlabeled junctions without changing the circuit.
 */
const N = {
	GND: "net.GND",
	V5_LPD: "net.V5_LPD",
	V3P3_LPD: "net.V3P3_LPD",
	V5: "net.V5_FILTERED",
	V3P3: "net.V3P3_FILTERED",
	V3P3_TLV: "net.V3P3_TLV",
	V3P3_REF: "net.V3P3_REF",
	V3P3_INA: "net.V3P3_INA",
	V_TLV: "net.V_POS_TLV",
	V_PIR: "net.V_POS_PIR",
	PIR_VIN1: "net.PIR_VIN1",
	PIR_VOUT_RAW: "net.PIR_VOUT_RAW",
	PIR_VO: "net.PIR_VO",
	U1A_INV: "net.U1A_INV",
	U1A_AC_RETURN: "net.U1A_AC_RETURN",
	U1A_OUT: "net.U1A_OUT",
	INTERSTAGE: "net.INTERSTAGE",
	U1B_INV: "net.U1B_INV",
	U1B_REF: "net.U1B_REF",
	U1B_OUT: "net.U1B_OUT",
	PIR_SIGNAL_BUS: "net.PIR_SIGNAL_BUS",
	REF_HIGH: "net.REF_HIGH",
	REF_MID: "net.REF_MID",
	REF_LOW: "net.REF_LOW",
	U1C_OUT: "net.U1C_OUT",
	U1D_OUT: "net.U1D_OUT",
	BUFFER_OUT: "net.BUFFER_OUT",
	// tscircuit net identifiers cannot begin with a digit; this is TI's 1STAG_AOUT.
	FIRST_STAGE_AOUT: "net.FIRST_STAGE_AOUT",
	PIR_SGL_AOUT: "net.PIR_SGL_AOUT",
	PIR_OUT_HI: "net.PIR_OUT_HI",
	PIR_OUT_LO: "net.PIR_OUT_LO",
	I2C_CS: "net.I2C_CS",
	I2C_SCL: "net.I2C_SCL",
	I2C_SDA: "net.I2C_SDA",
	OLED: "net.OLED",
	RLED: "net.RLED",
	YLED: "net.YLED",
} as const;

export default function Circuit() {
	return (
		<board
			name="BOOSTXL_TLV8544PIR"
			width="50.8mm"
			height="43.18mm"
			outline={[
				{ x: -25.4, y: -19.05 },
				{ x: -22.86, y: -21.59 },
				{ x: 22.86, y: -21.59 },
				{ x: 25.4, y: -19.05 },
				{ x: 25.4, y: 19.05 },
				{ x: 22.86, y: 21.59 },
				{ x: -22.86, y: 21.59 },
				{ x: -25.4, y: 19.05 },
			]}
			solderMaskColor="red"
			silkscreenColor="white"
			defaultTraceWidth="0.2mm"
			autorouter={{
				preset: "auto_local",
				local: true,
				traceClearance: "0.15mm",
			}}
			autorouterEffortLevel="2x"
			autorouterVersion="v6"
		>
			{/* LaunchPad BoosterPack headers. Exact Samtec part imported from JLCPCB. */}
			<SSQ_110_03_G_D
				name="J1"
				pcbX={-22.86}
				pcbY={1.27}
				pcbRotation={90}
				connections={{
					pin1: N.V3P3_LPD,
					pin2: N.V5_LPD,
					pin3: N.FIRST_STAGE_AOUT,
					pin4: N.GND,
					pin10: N.PIR_OUT_HI,
					pin11: N.PIR_SGL_AOUT,
					pin12: N.PIR_OUT_LO,
					pin14: N.I2C_CS,
					pin16: N.OLED,
					pin17: N.I2C_SCL,
					pin18: N.RLED,
					pin19: N.I2C_SDA,
					pin20: N.YLED,
				}}
			/>
			<SSQ_110_03_G_D
				name="J2"
				pcbX={22.86}
				pcbY={1.27}
				pcbRotation={90}
				connections={{ pin20: N.GND }}
			/>

			{/* LaunchPad signal filtering. */}
			<capacitor
				name="C1"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-18}
				pcbY={9}
				pcbRotation={90}
				connections={{ pin1: N.PIR_OUT_HI, pin2: N.GND }}
			/>
			<capacitor
				name="C2"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-18}
				pcbY={6}
				pcbRotation={90}
				connections={{ pin1: N.FIRST_STAGE_AOUT, pin2: N.GND }}
			/>
			<capacitor
				name="C3"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-18}
				pcbY={3}
				pcbRotation={90}
				connections={{ pin1: N.PIR_OUT_LO, pin2: N.GND }}
			/>
			<capacitor
				name="C4"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-18}
				pcbY={0}
				pcbRotation={90}
				connections={{ pin1: N.PIR_SGL_AOUT, pin2: N.GND }}
			/>

			{/* PIR sensor bias and seven-decade supply bypass bank. The custom land
        pattern remains inline because its best footprinter match is 73.21%. */}
			<chip
				name="A1"
				manufacturerPartNumber="IRS-B210ST01-R1"
				pcbX={15}
				pcbY={-14}
				pinLabels={{
					pin1: ["VIN"],
					pin2: ["GND_1"],
					pin3: ["VOUT"],
					pin4: ["GND_2"],
					pin5: ["GND_3"],
				}}
				connections={{
					VIN: N.PIR_VIN1,
					VOUT: N.PIR_VOUT_RAW,
					GND_1: N.GND,
					GND_2: N.GND,
					GND_3: N.GND,
				}}
				footprint={
					<footprint>
						<smtpad
							name="pin1"
							portHints={["1"]}
							shape="rect"
							width="1.2mm"
							height="0.8mm"
							pcbX="2.35mm"
							pcbY="0.95mm"
						/>
						<smtpad
							name="pin2"
							portHints={["2"]}
							shape="rect"
							width="1.2mm"
							height="0.8mm"
							pcbX="2.35mm"
							pcbY="0mm"
						/>
						<smtpad
							name="pin3"
							portHints={["3"]}
							shape="rect"
							width="1.2mm"
							height="0.8mm"
							pcbX="2.35mm"
							pcbY="-0.95mm"
						/>
						<smtpad
							name="pin4"
							portHints={["4"]}
							shape="rect"
							width="1.2mm"
							height="0.8mm"
							pcbX="-2.35mm"
							pcbY="-1.25mm"
						/>
						<smtpad
							name="pin5"
							portHints={["5"]}
							shape="rect"
							width="1.2mm"
							height="0.8mm"
							pcbX="-2.35mm"
							pcbY="1.25mm"
						/>
						<silkscreenrect width="4.7mm" height="4.7mm" strokeWidth="0.15mm" />
						<silkscreencircle
							radius="0.3mm"
							pcbX="1.55mm"
							pcbY="1.55mm"
							isFilled
						/>
					</footprint>
				}
			/>
			<resistor
				name="R12"
				resistance="619kohm"
				footprint="0603"
				pcbX={7}
				pcbY={-9}
				pcbRotation={0}
				connections={{ pin1: N.V_PIR, pin2: N.PIR_VIN1 }}
			/>
			<capacitor
				name="C10"
				capacitance="100uF"
				footprint="1210"
				pcbX={1}
				pcbY={-17}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C11"
				capacitance="10uF"
				footprint="0805"
				pcbX={4.5}
				pcbY={-17}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C12"
				capacitance="1uF"
				footprint="0603"
				pcbX={7.5}
				pcbY={-17}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C13"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={0}
				pcbY={-12}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C14"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={2.5}
				pcbY={-12}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C15"
				capacitance="1000pF"
				footprint="0603"
				pcbX={5}
				pcbY={-12}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C16"
				capacitance="100pF"
				footprint="0603"
				pcbX={7.5}
				pcbY={-12}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>

			{/* Quad nanopower op-amp: two gain/filter stages plus window comparators. */}
			<chip
				name="U1"
				manufacturerPartNumber="TLV8544PWR"
				supplierPartNumbers={{ jlcpcb: ["C2867322"] }}
				footprint="dfn14_p0.65mm_w7.3002mm_pw0.4mm_pl1.7mm"
				cadModel={{
					objUrl: tlvObjPath,
					stepUrl: tlvStepPath,
					pcbRotationOffset: 0,
					modelOriginPosition: {
						x: -0.000012700000013410317,
						y: 0,
						z: -0.069083,
					},
				}}
				pcbX={7}
				pcbY={0}
				pcbRotation={90}
				pinLabels={{
					pin1: ["OUT_A"],
					pin2: ["IN_A_NEG"],
					pin3: ["IN_A_POS"],
					pin4: ["V_POS"],
					pin5: ["IN_B_POS"],
					pin6: ["IN_B_NEG"],
					pin7: ["OUT_B"],
					pin8: ["OUT_C"],
					pin9: ["IN_C_NEG"],
					pin10: ["IN_C_POS"],
					pin11: ["V_NEG"],
					pin12: ["IN_D_POS"],
					pin13: ["IN_D_NEG"],
					pin14: ["OUT_D"],
				}}
				connections={{
					OUT_A: N.U1A_OUT,
					IN_A_NEG: N.U1A_INV,
					IN_A_POS: N.PIR_VO,
					V_POS: N.V_TLV,
					IN_B_POS: N.U1B_REF,
					IN_B_NEG: N.U1B_INV,
					OUT_B: N.U1B_OUT,
					OUT_C: N.U1C_OUT,
					IN_C_NEG: N.REF_HIGH,
					IN_C_POS: N.PIR_SIGNAL_BUS,
					V_NEG: N.GND,
					IN_D_POS: N.REF_LOW,
					IN_D_NEG: N.PIR_SIGNAL_BUS,
					OUT_D: N.U1D_OUT,
				}}
			/>

			<resistor
				name="R14"
				resistance="0ohm"
				footprint="0603"
				pcbX={11}
				pcbY={-9}
				pcbRotation={0}
				connections={{ pin1: N.PIR_VOUT_RAW, pin2: N.PIR_VO }}
			/>
			<resistor
				name="R16"
				resistance="1.30Mohm"
				footprint="0603"
				pcbX={11}
				pcbY={-12}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VO, pin2: N.GND }}
			/>
			<resistor
				name="R6"
				resistance="6.81kohm"
				footprint="0603"
				pcbX={-0.5}
				pcbY={-5}
				pcbRotation={0}
				connections={{ pin1: N.U1A_INV, pin2: N.U1A_AC_RETURN }}
			/>
			<capacitor
				name="C5"
				capacitance="33uF"
				footprint="1206"
				pcbX={-4}
				pcbY={-5}
				pcbRotation={90}
				connections={{ pin1: N.U1A_AC_RETURN, pin2: N.GND }}
			/>
			<resistor
				name="R9"
				resistance="1.50Mohm"
				footprint="0603"
				pcbX={1}
				pcbY={-3}
				pcbRotation={0}
				connections={{ pin1: N.U1A_OUT, pin2: N.U1A_INV }}
			/>
			<capacitor
				name="C6"
				capacitance="0.01uF"
				footprint="0603"
				pcbX={1}
				pcbY={-0.5}
				pcbRotation={90}
				connections={{ pin1: N.U1A_OUT, pin2: N.U1A_INV }}
			/>
			<diode
				name="D4"
				manufacturerPartNumber="1N4148X-TP"
				supplierPartNumbers={{ jlcpcb: ["C507292"] }}
				footprint="res_p1.4224mm_pw0.6096mm_ph0.4826mm"
				cadModel={{
					objUrl: diodeObjPath,
					stepUrl: diodeStepPath,
					pcbRotationOffset: 0,
					modelOriginPosition: { x: 0, y: -0.0040386000000012245, z: 0 },
				}}
				pinLabels={{ pin1: ["cathode", "neg"], pin2: ["anode", "pos"] }}
				pcbX={-2.5}
				pcbY={-1.5}
				connections={{ anode: N.U1A_INV, cathode: N.U1A_OUT }}
			/>
			<diode
				name="D5"
				manufacturerPartNumber="1N4148X-TP"
				supplierPartNumbers={{ jlcpcb: ["C507292"] }}
				footprint="res_p1.4224mm_pw0.6096mm_ph0.4826mm"
				cadModel={{
					objUrl: diodeObjPath,
					stepUrl: diodeStepPath,
					pcbRotationOffset: 0,
					modelOriginPosition: { x: 0, y: -0.0040386000000012245, z: 0 },
				}}
				pinLabels={{ pin1: ["cathode", "neg"], pin2: ["anode", "pos"] }}
				pcbX={-2.5}
				pcbY={1}
				pcbRotation={180}
				connections={{ anode: N.U1A_OUT, cathode: N.U1A_INV }}
			/>
			<resistor
				name="R4"
				resistance="10kohm"
				footprint="0603"
				pcbX={1}
				pcbY={3}
				pcbRotation={0}
				connections={{ pin1: N.U1A_OUT, pin2: N.FIRST_STAGE_AOUT }}
			/>

			<capacitor
				name="C9"
				capacitance="3.3uF"
				footprint="0805"
				pcbX={10}
				pcbY={-6}
				pcbRotation={90}
				connections={{ pin1: N.U1A_OUT, pin2: N.INTERSTAGE }}
			/>
			<resistor
				name="R13"
				resistance="68.1kohm"
				footprint="0603"
				pcbX={13}
				pcbY={-6}
				pcbRotation={0}
				connections={{ pin1: N.INTERSTAGE, pin2: N.U1B_INV }}
			/>
			<resistor
				name="R7"
				resistance="15Mohm"
				footprint="0603"
				pcbX={12}
				pcbY={-3.5}
				pcbRotation={0}
				connections={{ pin1: N.U1B_OUT, pin2: N.U1B_INV }}
			/>
			<capacitor
				name="C7"
				capacitance="1000pF"
				footprint="0603"
				pcbX={15}
				pcbY={-3.5}
				pcbRotation={90}
				connections={{ pin1: N.U1B_OUT, pin2: N.U1B_INV }}
			/>
			<resistor
				name="R17"
				resistance="0ohm"
				footprint="0603"
				pcbX={12}
				pcbY={5.5}
				pcbRotation={0}
				connections={{ pin1: N.U1B_REF, pin2: N.REF_MID }}
			/>
			<capacitor
				name="C17"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={9.5}
				pcbY={5.5}
				pcbRotation={90}
				connections={{ pin1: N.U1B_REF, pin2: N.GND }}
			/>
			<resistor
				name="R15"
				resistance="0ohm"
				footprint="0603"
				pcbX={11.5}
				pcbY={-2}
				pcbRotation={0}
				connections={{ pin1: N.U1B_OUT, pin2: N.PIR_SIGNAL_BUS }}
			/>
			<resistor
				name="R5"
				resistance="10kohm"
				footprint="0603"
				pcbX={14.5}
				pcbY={0.5}
				pcbRotation={0}
				connections={{ pin1: N.PIR_SIGNAL_BUS, pin2: N.PIR_SGL_AOUT }}
			/>

			{/* 3/4-VCC and 1/4-VCC window-comparator references. */}
			<resistor
				name="R8"
				resistance="15Mohm"
				footprint="0603"
				pcbX={17}
				pcbY={9}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_REF, pin2: N.REF_HIGH }}
			/>
			<resistor
				name="R11"
				resistance="15Mohm"
				footprint="0603"
				pcbX={17}
				pcbY={5.7}
				pcbRotation={90}
				connections={{ pin1: N.REF_HIGH, pin2: N.REF_MID }}
			/>
			<resistor
				name="R18"
				resistance="15Mohm"
				footprint="0603"
				pcbX={17}
				pcbY={2.4}
				pcbRotation={90}
				connections={{ pin1: N.REF_MID, pin2: N.REF_LOW }}
			/>
			<resistor
				name="R20"
				resistance="15Mohm"
				footprint="0603"
				pcbX={17}
				pcbY={-0.9}
				pcbRotation={90}
				connections={{ pin1: N.REF_LOW, pin2: N.GND }}
			/>
			<capacitor
				name="C8"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={19}
				pcbY={6}
				pcbRotation={90}
				connections={{ pin1: N.REF_HIGH, pin2: N.GND }}
			/>
			<capacitor
				name="C18"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={19}
				pcbY={2}
				pcbRotation={90}
				connections={{ pin1: N.REF_LOW, pin2: N.GND }}
			/>
			<resistor
				name="R10"
				resistance="10kohm"
				footprint="0603"
				pcbX={18}
				pcbY={-4}
				pcbRotation={0}
				connections={{ pin1: N.U1C_OUT, pin2: N.PIR_OUT_HI }}
			/>
			<resistor
				name="R19"
				resistance="10kohm"
				footprint="0603"
				pcbX={18}
				pcbY={-7}
				pcbRotation={0}
				connections={{ pin1: N.U1D_OUT, pin2: N.PIR_OUT_LO }}
			/>
			<capacitor
				name="C19"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={3.5}
				pcbY={5.5}
				pcbRotation={90}
				connections={{ pin1: N.V_TLV, pin2: N.GND }}
			/>
			<capacitor
				name="C20"
				capacitance="10uF"
				footprint="0805"
				pcbX={6}
				pcbY={6}
				pcbRotation={90}
				connections={{ pin1: N.V_TLV, pin2: N.GND }}
			/>

			{/* Indicator LEDs driven by the LaunchPad. */}
			<resistor
				name="R1"
				resistance="442ohm"
				footprint="0603"
				pcbX={-14}
				pcbY={-4}
				pcbRotation={0}
				connections={{ pin1: N.RLED, pin2: "net.D1_ANODE" }}
			/>
			<led
				name="D1"
				color="red"
				footprint="0603"
				pcbX={-11}
				pcbY={-4}
				connections={{ anode: "net.D1_ANODE", cathode: N.GND }}
			/>
			<resistor
				name="R2"
				resistance="487ohm"
				footprint="0603"
				pcbX={-14}
				pcbY={-7}
				pcbRotation={0}
				connections={{ pin1: N.YLED, pin2: "net.D2_ANODE" }}
			/>
			<led
				name="D2"
				color="yellow"
				footprint="0603"
				pcbX={-11}
				pcbY={-7}
				connections={{ anode: "net.D2_ANODE", cathode: N.GND }}
			/>
			<resistor
				name="R3"
				resistance="487ohm"
				footprint="0603"
				pcbX={-14}
				pcbY={-10}
				pcbRotation={0}
				connections={{ pin1: N.OLED, pin2: "net.D3_ANODE" }}
			/>
			<led
				name="D3"
				color="green"
				footprint="0603"
				pcbX={-11}
				pcbY={-10}
				connections={{ anode: "net.D3_ANODE", cathode: N.GND }}
			/>

			{/* 3.3-V and 5-V filtering at the LaunchPad connector. */}
			<chip
				name="L1"
				manufacturerPartNumber="BLM18HE152SN1D"
				supplierPartNumbers={{ jlcpcb: ["C82155"] }}
				footprint="res_p1.3998mm_pw0.8mm_ph0.864mm"
				cadModel={{
					objUrl: beadObjPath,
					stepUrl: beadStepPath,
					pcbRotationOffset: 180,
					modelOriginPosition: {
						x: 0.0023875999999063424,
						y: 0.015976600000044527,
						z: -0.25,
					},
				}}
				pinLabels={{ pin1: ["pin1"], pin2: ["pin2"] }}
				pcbX={-16}
				pcbY={16}
				connections={{ pin1: N.V3P3_LPD, pin2: N.V3P3 }}
			/>
			<capacitor
				name="C24"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-13}
				pcbY={16}
				pcbRotation={90}
				connections={{ pin1: N.V3P3, pin2: N.GND }}
			/>
			<capacitor
				name="C25"
				capacitance="10uF"
				footprint="0805"
				pcbX={-10.5}
				pcbY={16}
				pcbRotation={90}
				connections={{ pin1: N.V3P3, pin2: N.GND }}
			/>
			<chip
				name="L2"
				manufacturerPartNumber="BLM18HE152SN1D"
				supplierPartNumbers={{ jlcpcb: ["C82155"] }}
				footprint="res_p1.3998mm_pw0.8mm_ph0.864mm"
				cadModel={{
					objUrl: beadObjPath,
					stepUrl: beadStepPath,
					pcbRotationOffset: 180,
					modelOriginPosition: {
						x: 0.0023875999999063424,
						y: 0.015976600000044527,
						z: -0.25,
					},
				}}
				pinLabels={{ pin1: ["pin1"], pin2: ["pin2"] }}
				pcbX={-16}
				pcbY={12.5}
				connections={{ pin1: N.V5_LPD, pin2: N.V5 }}
			/>
			<capacitor
				name="C26"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-13}
				pcbY={12.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C27"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-10.5}
				pcbY={12.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C28"
				capacitance="10uF"
				footprint="0805"
				pcbX={-8}
				pcbY={12.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C29"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-5.5}
				pcbY={13}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>

			{/* TI net ties split the filtered 3.3-V rail into functional domains. */}
			<resistor
				name="NT1"
				resistance="0ohm"
				footprint="0603"
				pcbX={-7}
				pcbY={19}
				pcbRotation={0}
				connections={{ pin1: N.V3P3, pin2: N.V3P3_TLV }}
			/>
			<resistor
				name="NT2"
				resistance="0ohm"
				footprint="0603"
				pcbX={-4}
				pcbY={19}
				pcbRotation={0}
				connections={{ pin1: N.V3P3, pin2: N.V3P3_REF }}
			/>
			<resistor
				name="NT3"
				resistance="0ohm"
				footprint="0603"
				pcbX={-1}
				pcbY={19}
				pcbRotation={0}
				connections={{ pin1: N.V3P3, pin2: N.V3P3_INA }}
			/>

			{/* Current-measurement jumpers. Exact Molex 87898-0204 is not in JLCPCB. */}
			<pinheader
				name="J3"
				pinCount={2}
				manufacturerPartNumber="87898-0204"
				footprint="res_p2.54mm_pw1.27mm_ph2.96mm"
				pcbX={-18}
				pcbY={-15}
				connections={{ pin1: N.V_PIR, pin2: N.V3P3 }}
			/>
			<pinheader
				name="J4"
				pinCount={2}
				manufacturerPartNumber="87898-0204"
				footprint="res_p2.54mm_pw1.27mm_ph2.96mm"
				pcbX={7}
				pcbY={15}
				connections={{ pin1: N.V_TLV, pin2: N.V3P3 }}
			/>

			{/* INA226 supply-current measurement and its unity-gain input buffer. */}
			<resistor
				name="R21"
				resistance="15kohm"
				footprint="0603"
				pcbX={0}
				pcbY={8}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_TLV, pin2: N.V_TLV }}
			/>
			<capacitor
				name="C22"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-2}
				pcbY={8}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_TLV, pin2: N.GND }}
			/>
			<chip
				name="U3"
				manufacturerPartNumber="BUFFER_MPN_NOT_PUBLISHED"
				footprint="sot23_5"
				pcbX={2}
				pcbY={11}
				pinLabels={{
					pin1: ["OUT"],
					pin2: ["V_NEG"],
					pin3: ["IN_POS"],
					pin4: ["IN_NEG"],
					pin5: ["V_POS"],
				}}
				connections={{
					OUT: N.BUFFER_OUT,
					IN_NEG: N.BUFFER_OUT,
					IN_POS: N.V_TLV,
					V_POS: N.V5,
					V_NEG: N.GND,
				}}
			/>
			<capacitor
				name="C23"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={11}
				pcbY={13.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<chip
				name="U2"
				manufacturerPartNumber="INA226AIDGSR"
				supplierPartNumbers={{ jlcpcb: ["C49851"] }}
				footprint="vssop10_p0.4999mm_pw0.28mm_pl1.62mm"
				cadModel={{
					objUrl: inaObjPath,
					stepUrl: inaStepPath,
					pcbRotationOffset: 0,
					modelOriginPosition: { x: 0, y: 0, z: 0 },
				}}
				pcbX={-5}
				pcbY={8}
				pcbRotation={90}
				pinLabels={{
					pin1: ["A1"],
					pin2: ["A0"],
					pin3: ["Alert"],
					pin4: ["SDA"],
					pin5: ["SCL"],
					pin6: ["VS_POS"],
					pin7: ["GND"],
					pin8: ["VBUS"],
					pin9: ["VIN_NEG"],
					pin10: ["VIN_POS"],
				}}
				connections={{
					A1: N.GND,
					A0: N.GND,
					SDA: N.I2C_SDA,
					SCL: N.I2C_SCL,
					VS_POS: N.V3P3_INA,
					GND: N.GND,
					VBUS: N.V3P3_TLV,
					VIN_NEG: N.BUFFER_OUT,
					VIN_POS: N.V3P3_TLV,
				}}
			/>
			<capacitor
				name="C21"
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-8}
				pcbY={8}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_INA, pin2: N.GND }}
			/>

			<testpoint
				name="TP1"
				footprintVariant="through_hole"
				padDiameter="2.4mm"
				holeDiameter="1mm"
				pcbX={7.7}
				pcbY={-20}
				connections={{ pin1: N.GND }}
			/>
			<testpoint
				name="TP2"
				footprintVariant="through_hole"
				padDiameter="2.4mm"
				holeDiameter="1mm"
				pcbX={-3}
				pcbY={14}
				connections={{ pin1: N.GND }}
			/>

			{/* A bottom-side ground pour provides a continuous analog return reference. */}
			<copperpour
				name="GND_BOTTOM"
				layer="bottom"
				connectsTo={N.GND}
				padMargin="0.25mm"
				traceMargin="0.2mm"
				boardEdgeMargin="0.3mm"
			/>

			{/* Mechanical references from the annotated TI top view. */}
			<hole name="MH1" diameter="3mm" pcbX={-22.86} pcbY={19.05} />
			<hole name="MH2" diameter="3mm" pcbX={22.86} pcbY={19.05} />
			<hole name="MH3" diameter="3mm" pcbX={-22.86} pcbY={-19.05} />
			<hole name="MH4" diameter="3mm" pcbX={22.86} pcbY={-19.05} />
			<silkscreencircle radius="6mm" pcbX={15} pcbY={-14} strokeWidth="0.2mm" />
			<pcbnotetext
				text="H1 IML-0669 LENS Ø12"
				pcbX={15}
				pcbY={-20.4}
				fontSize="0.6mm"
			/>
			<pcbnotetext
				text="BOOSTXL-TLV8544PIR — RECONSTRUCTION"
				pcbX={0}
				pcbY={20.3}
				fontSize="0.7mm"
			/>
		</board>
	);
}
