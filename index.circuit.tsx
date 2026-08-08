import { A_1N4148X_TP } from "./imports/A_1N4148X_TP/A_1N4148X_TP";
import { A_19_213_Y2C_CQ2R2L_3T_CY_ } from "./imports/A_19_213_Y2C_CQ2R2L_3T_CY_/A_19_213_Y2C_CQ2R2L_3T_CY_";
import { A_19_217_G7C_AN1P2_6T } from "./imports/A_19_217_G7C_AN1P2_6T/A_19_217_G7C_AN1P2_6T";
import { A_19_217_R6C_AL1M2VY_3T } from "./imports/A_19_217_R6C_AL1M2VY_3T/A_19_217_R6C_AL1M2VY_3T";
import { A_5001 } from "./imports/A_5001/A_5001";
import { BLM18HE152SN1D } from "./imports/BLM18HE152SN1D/BLM18HE152SN1D";
import { DZ254S_11_02_48 } from "./imports/DZ254S_11_02_48/DZ254S_11_02_48";
import { INA226AIDGSR } from "./imports/INA226AIDGSR/INA226AIDGSR";
import { IRA_S210ST01 } from "./imports/IRA_S210ST01/IRA_S210ST01";
import { SSQ_110_03_G_D } from "./imports/SSQ_110_03_G_D/SSQ_110_03_G_D";
import { TLV333IDBVR } from "./imports/TLV333IDBVR/TLV333IDBVR";
import { TLV8544PWR } from "./imports/TLV8544PWR/TLV8544PWR";

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
			width="60.96mm"
			height="50.8mm"
			outline={[
				{ x: -30.48, y: -22.86 },
				{ x: -27.94, y: -25.4 },
				{ x: 27.94, y: -25.4 },
				{ x: 30.48, y: -22.86 },
				{ x: 30.48, y: 22.86 },
				{ x: 27.94, y: 25.4 },
				{ x: -27.94, y: 25.4 },
				{ x: -30.48, y: 22.86 },
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
			<schematicsheet
				name="PAGE1"
				displayName="BOOSTXL-TLV8544PIR Schematic Page 1"
				sheetIndex={1}
			/>
			<schematicsheet
				name="PAGE2"
				displayName="BOOSTXL-TLV8544PIR Schematic Page 2"
				sheetIndex={2}
			/>

			<group
				name="PAGE1_CIRCUIT"
				schSheetName="PAGE1"
				pcbX={0}
				pcbY={0}
			>
			<schematictext
				text="PIR SENSOR SIGNAL CONDITIONING"
				schX={0}
				schY={10}
				fontSize={0.42}
				color="#006464"
			/>
			<schematictext
				text="LAUNCHPAD CONNECTORS AND USER LEDS"
				schX={0}
				schY={1.2}
				fontSize={0.34}
				color="#006464"
			/>
			{/* LaunchPad BoosterPack headers. Exact Samtec part imported from JLCPCB. */}
			<SSQ_110_03_G_D
				name="J1"
				schX={-9.5}
				schY={-1.5}
				pcbX={-17.78}
				pcbY={5.08}
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
				schX={-3.5}
				schY={-1.5}
				pcbX={25.4}
				pcbY={5.08}
				pcbRotation={90}
				connections={{ pin20: N.GND }}
			/>

			{/* LaunchPad signal filtering. */}
			<capacitor
				name="C1"
				schX={-13}
				schY={-0.7}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-12.5}
				pcbY={8}
				pcbRotation={0}
				connections={{ pin1: N.PIR_OUT_HI, pin2: N.GND }}
			/>
			<capacitor
				name="C2"
				schX={-6}
				schY={-0.7}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-25.8}
				pcbY={14.5}
				pcbRotation={90}
				connections={{ pin1: N.FIRST_STAGE_AOUT, pin2: N.GND }}
			/>
			<capacitor
				name="C3"
				schX={-13}
				schY={-2.8}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-12.8}
				pcbY={4.2}
				pcbRotation={90}
				connections={{ pin1: N.PIR_OUT_LO, pin2: N.GND }}
			/>
			<capacitor
				name="C4"
				schX={-6}
				schY={-2.8}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={-25.8}
				pcbY={5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_SGL_AOUT, pin2: N.GND }}
			/>

			{/* Murata's supported analog PIR sensor. Its exact JLCPCB footprint is
			    retained because the best footprinter match was only 13.87%. */}
			<IRA_S210ST01
				name="A1"
				schX={-5.4}
				schY={6}
				pcbX={20.5}
				pcbY={-17}
				connections={{
					d: N.PIR_VIN1,
					s: N.PIR_VOUT_RAW,
					g: N.GND,
				}}
			/>
			<resistor
				name="R12"
				schX={-13}
				schY={7.4}
				schRotation="270deg"
				manufacturerPartNumber="RC0603FR-07619KL"
				supplierPartNumbers={{ jlcpcb: ["C245988"] }}
				resistance="619kohm"
				footprint="0603"
				pcbX={-2.5}
				pcbY={-17.5}
				pcbRotation={0}
				connections={{ pin1: N.V_PIR, pin2: N.PIR_VIN1 }}
			/>
			<capacitor
				name="C10"
				schX={-12.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="CGA1206X5R107M100NT"
				supplierPartNumbers={{ jlcpcb: ["C6119961"] }}
				capacitance="100uF"
				footprint="1206"
				pcbX={-10}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C11"
				schX={-11.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R60J106ME47D"
				supplierPartNumbers={{ jlcpcb: ["C77041"] }}
				capacitance="10uF"
				footprint="0603"
				pcbX={-6.5}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C12"
				schX={-10.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="C1608X7R1C105KT000N"
				supplierPartNumbers={{ jlcpcb: ["C76617"] }}
				capacitance="1uF"
				footprint="0603"
				pcbX={-4}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C13"
				schX={-9.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-1.5}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C14"
				schX={-8.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={1}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C15"
				schX={-7.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM1885C1H102JA01D"
				supplierPartNumbers={{ jlcpcb: ["C77026"] }}
				capacitance="1000pF"
				footprint="0603"
				pcbX={3.5}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>
			<capacitor
				name="C16"
				schX={-6.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM1885C1H101JA01D"
				supplierPartNumbers={{ jlcpcb: ["C71664"] }}
				capacitance="100pF"
				footprint="0603"
				pcbX={6}
				pcbY={-20.5}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VIN1, pin2: N.GND }}
			/>

			{/* Quad nanopower op-amp: two gain/filter stages plus window comparators. */}
			<TLV8544PWR
				name="U1"
				schX={6}
				schY={2.5}
				symbol={<symbol />}
				pcbX={14.5}
				pcbY={-0.5}
				pcbRotation={90}
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
			{/* Native multi-unit schematic projections keep the exact imported U1
			    package on the PCB while drawing the four op-amps like TI does. */}
			<schematicsymbol
				name="U1A"
				displayName="U1A"
				chipRef=".U1"
				symbolName="opamp_with_power"
				schX={-2.4}
				schY={6}
				connections={{
					inp1: ".U1 > .IN_A_POS",
					inp2: ".U1 > .IN_A_NEG",
					out: ".U1 > .OUT_A",
					"V+": ".U1 > .V_POS",
					"V-": ".U1 > .V_NEG",
				}}
			/>
			<schematicsymbol
				name="U1B"
				displayName="U1B"
				chipRef=".U1"
				symbolName="opamp_with_power"
				schX={2.4}
				schY={6}
				connections={{
					inp1: ".U1 > .IN_B_POS",
					inp2: ".U1 > .IN_B_NEG",
					out: ".U1 > .OUT_B",
					"V+": ".U1 > .V_POS",
					"V-": ".U1 > .V_NEG",
				}}
			/>
			<schematicsymbol
				name="U1C"
				displayName="U1C"
				chipRef=".U1"
				symbolName="opamp_with_power"
				schX={10.1}
				schY={8.2}
				connections={{
					inp1: ".U1 > .IN_C_POS",
					inp2: ".U1 > .IN_C_NEG",
					out: ".U1 > .OUT_C",
					"V+": ".U1 > .V_POS",
					"V-": ".U1 > .V_NEG",
				}}
			/>
			<schematicsymbol
				name="U1D"
				displayName="U1D"
				chipRef=".U1"
				symbolName="opamp_with_power"
				schX={10.1}
				schY={4.8}
				connections={{
					inp1: ".U1 > .IN_D_POS",
					inp2: ".U1 > .IN_D_NEG",
					out: ".U1 > .OUT_D",
					"V+": ".U1 > .V_POS",
					"V-": ".U1 > .V_NEG",
				}}
			/>

			<resistor
				name="R14"
				schX={-3.9}
				schY={6}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={25}
				pcbY={-10}
				pcbRotation={0}
				connections={{ pin1: N.PIR_VOUT_RAW, pin2: N.PIR_VO }}
			/>
			<resistor
				name="R16"
				schX={-3.9}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="1RC0603F1304"
				supplierPartNumbers={{ jlcpcb: ["C54531191"] }}
				resistance="1.30Mohm"
				footprint="0603"
				pcbX={11}
				pcbY={-16}
				pcbRotation={90}
				connections={{ pin1: N.PIR_VO, pin2: N.GND }}
			/>
			<resistor
				name="R6"
				schX={-4.1}
				schY={8.3}
				schRotation="270deg"
				manufacturerPartNumber="1RC0603F6811"
				supplierPartNumbers={{ jlcpcb: ["C54531559"] }}
				resistance="6.81kohm"
				footprint="0603"
				pcbX={15}
				pcbY={-9.5}
				pcbRotation={0}
				connections={{ pin1: N.U1A_INV, pin2: N.U1A_AC_RETURN }}
			/>
			<capacitor
				name="C5"
				schX={-4.1}
				schY={9.6}
				schRotation="270deg"
				manufacturerPartNumber="C2012X5R1A336MTJ00E"
				supplierPartNumbers={{ jlcpcb: ["C342635"] }}
				capacitance="33uF"
				footprint="0805"
				pcbX={18}
				pcbY={-9.5}
				pcbRotation={90}
				connections={{ pin1: N.U1A_AC_RETURN, pin2: N.GND }}
			/>
			<resistor
				name="R9"
				schX={-2.4}
				schY={8.2}
				manufacturerPartNumber="1RC0603F1504"
				supplierPartNumbers={{ jlcpcb: ["C54531218"] }}
				resistance="1.50Mohm"
				footprint="0603"
				pcbX={10}
				pcbY={-9}
				pcbRotation={0}
				connections={{ pin1: N.U1A_OUT, pin2: N.U1A_INV }}
			/>
			<capacitor
				name="C6"
				schX={-2.4}
				schY={9}
				manufacturerPartNumber="GRM188R71H103KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77053"] }}
				capacitance="0.01uF"
				footprint="0603"
				pcbX={13}
				pcbY={-6.5}
				pcbRotation={0}
				connections={{ pin1: N.U1A_OUT, pin2: N.U1A_INV }}
			/>
			<A_1N4148X_TP
				name="D4"
				schX={-2.4}
				schY={9.8}
				pcbX={11}
				pcbY={-13.5}
				connections={{ anode: N.U1A_INV, cathode: N.U1A_OUT }}
			/>
			<A_1N4148X_TP
				name="D5"
				schX={-2.4}
				schY={7.4}
				pcbX={11}
				pcbY={-11.5}
				pcbRotation={180}
				connections={{ anode: N.U1A_OUT, cathode: N.U1A_INV }}
			/>
			<resistor
				name="R4"
				schX={-0.6}
				schY={7.5}
				manufacturerPartNumber="CQ03WAF1002T5E"
				supplierPartNumbers={{ jlcpcb: ["C516551"] }}
				resistance="10kohm"
				footprint="0603"
				pcbX={8}
				pcbY={-7.5}
				pcbRotation={0}
				connections={{ pin1: N.U1A_OUT, pin2: N.FIRST_STAGE_AOUT }}
			/>

			<capacitor
				name="C9"
				schX={-0.6}
				schY={6}
				manufacturerPartNumber="C2012X5R1A335M125AA"
				supplierPartNumbers={{ jlcpcb: ["C3851074"] }}
				capacitance="3.3uF"
				footprint="0805"
				pcbX={8}
				pcbY={-13.5}
				pcbRotation={90}
				connections={{ pin1: N.U1A_OUT, pin2: N.INTERSTAGE }}
			/>
			<resistor
				name="R13"
				schX={0.9}
				schY={6}
				manufacturerPartNumber="RK73H1JTTD6812F"
				supplierPartNumbers={{ jlcpcb: ["C830353"] }}
				resistance="68.1kohm"
				footprint="0603"
				pcbX={13}
				pcbY={-18.5}
				pcbRotation={0}
				connections={{ pin1: N.INTERSTAGE, pin2: N.U1B_INV }}
			/>
			<resistor
				name="R7"
				schX={2.4}
				schY={8.2}
				manufacturerPartNumber="SCR0805F15M"
				supplierPartNumbers={{ jlcpcb: ["C3016870"] }}
				resistance="15Mohm"
				footprint="0805"
				pcbX={20.5}
				pcbY={2.5}
				pcbRotation={0}
				connections={{ pin1: N.U1B_OUT, pin2: N.U1B_INV }}
			/>
			<capacitor
				name="C7"
				schX={2.4}
				schY={9}
				manufacturerPartNumber="GRM1885C1H102JA01D"
				supplierPartNumbers={{ jlcpcb: ["C77026"] }}
				capacitance="1000pF"
				footprint="0603"
				pcbX={20}
				pcbY={-2.5}
				pcbRotation={90}
				connections={{ pin1: N.U1B_OUT, pin2: N.U1B_INV }}
			/>
			<resistor
				name="R17"
				schX={3.3}
				schY={4.5}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={15.5}
				pcbY={6}
				pcbRotation={0}
				connections={{ pin1: N.U1B_REF, pin2: N.REF_MID }}
			/>
			<capacitor
				name="C17"
				schX={1.5}
				schY={4.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={9.5}
				pcbY={-3.5}
				pcbRotation={90}
				connections={{ pin1: N.U1B_REF, pin2: N.GND }}
			/>
			<resistor
				name="R15"
				schX={4}
				schY={6}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={5}
				pcbY={3.5}
				pcbRotation={90}
				connections={{ pin1: N.U1B_OUT, pin2: N.PIR_SIGNAL_BUS }}
			/>
			<resistor
				name="R5"
				schX={5.5}
				schY={7.5}
				manufacturerPartNumber="CQ03WAF1002T5E"
				supplierPartNumbers={{ jlcpcb: ["C516551"] }}
				resistance="10kohm"
				footprint="0603"
				pcbX={7.5}
				pcbY={0}
				pcbRotation={90}
				connections={{ pin1: N.PIR_SIGNAL_BUS, pin2: N.PIR_SGL_AOUT }}
			/>

			{/* 3/4-VCC and 1/4-VCC window-comparator references. */}
			<resistor
				name="R8"
				schX={7.2}
				schY={9.5}
				schRotation="270deg"
				manufacturerPartNumber="SCR0805F15M"
				supplierPartNumbers={{ jlcpcb: ["C3016870"] }}
				resistance="15Mohm"
				footprint="0805"
				pcbX={20}
				pcbY={15}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_REF, pin2: N.REF_HIGH }}
			/>
			<resistor
				name="R11"
				schX={7.2}
				schY={8}
				schRotation="270deg"
				manufacturerPartNumber="SCR0805F15M"
				supplierPartNumbers={{ jlcpcb: ["C3016870"] }}
				resistance="15Mohm"
				footprint="0805"
				pcbX={15}
				pcbY={11}
				pcbRotation={90}
				connections={{ pin1: N.REF_HIGH, pin2: N.REF_MID }}
			/>
			<resistor
				name="R18"
				schX={7.2}
				schY={5}
				schRotation="270deg"
				manufacturerPartNumber="SCR0805F15M"
				supplierPartNumbers={{ jlcpcb: ["C3016870"] }}
				resistance="15Mohm"
				footprint="0805"
				pcbX={12}
				pcbY={8.5}
				pcbRotation={90}
				connections={{ pin1: N.REF_MID, pin2: N.REF_LOW }}
			/>
			<resistor
				name="R20"
				schX={7.2}
				schY={3.5}
				schRotation="270deg"
				manufacturerPartNumber="SCR0805F15M"
				supplierPartNumbers={{ jlcpcb: ["C3016870"] }}
				resistance="15Mohm"
				footprint="0805"
				pcbX={7.5}
				pcbY={7.5}
				pcbRotation={0}
				connections={{ pin1: N.REF_LOW, pin2: N.GND }}
			/>
			<capacitor
				name="C8"
				schX={8.2}
				schY={8.5}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={18.5}
				pcbY={6.5}
				pcbRotation={0}
				connections={{ pin1: N.REF_HIGH, pin2: N.GND }}
			/>
			<capacitor
				name="C18"
				schX={8.2}
				schY={4}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={12}
				pcbY={5.5}
				pcbRotation={0}
				connections={{ pin1: N.REF_LOW, pin2: N.GND }}
			/>
			<resistor
				name="R10"
				schX={12}
				schY={8.2}
				manufacturerPartNumber="CQ03WAF1002T5E"
				supplierPartNumbers={{ jlcpcb: ["C516551"] }}
				resistance="10kohm"
				footprint="0603"
				pcbX={21}
				pcbY={5}
				pcbRotation={90}
				connections={{ pin1: N.U1C_OUT, pin2: N.PIR_OUT_HI }}
			/>
			<resistor
				name="R19"
				schX={12}
				schY={4.8}
				manufacturerPartNumber="CQ03WAF1002T5E"
				supplierPartNumbers={{ jlcpcb: ["C516551"] }}
				resistance="10kohm"
				footprint="0603"
				pcbX={8}
				pcbY={4}
				pcbRotation={0}
				connections={{ pin1: N.U1D_OUT, pin2: N.PIR_OUT_LO }}
			/>
			<capacitor
				name="C19"
				schX={6}
				schY={3.1}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={16}
				pcbY={-6}
				pcbRotation={90}
				connections={{ pin1: N.V_TLV, pin2: N.GND }}
			/>
			<capacitor
				name="C20"
				schX={7.2}
				schY={3.1}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R60J106ME47D"
				supplierPartNumbers={{ jlcpcb: ["C77041"] }}
				capacitance="10uF"
				footprint="0603"
				pcbX={20}
				pcbY={-6}
				pcbRotation={90}
				connections={{ pin1: N.V_TLV, pin2: N.GND }}
			/>

			{/* Indicator LEDs driven by the LaunchPad. */}
			<resistor
				name="R1"
				schX={4}
				schY={-1}
				schRotation="270deg"
				manufacturerPartNumber="AC0805FR-07442RL"
				supplierPartNumbers={{ jlcpcb: ["C228838"] }}
				resistance="442ohm"
				footprint="0805"
				pcbX={-11.5}
				pcbY={-4}
				pcbRotation={0}
				connections={{ pin1: N.RLED, pin2: "net.D1_ANODE" }}
			/>
			<A_19_217_R6C_AL1M2VY_3T
				name="D1"
				schX={4}
				schY={-2.8}
				schRotation="90deg"
				pcbX={-5}
				pcbY={-4}
				connections={{ anode: "net.D1_ANODE", cathode: N.GND }}
			/>
			<resistor
				name="R2"
				schX={8}
				schY={-1}
				schRotation="270deg"
				manufacturerPartNumber="RMCS0805FT487R"
				supplierPartNumbers={{ jlcpcb: ["C7289906"] }}
				resistance="487ohm"
				footprint="0805"
				pcbX={-11.5}
				pcbY={-7.5}
				pcbRotation={0}
				connections={{ pin1: N.YLED, pin2: "net.D2_ANODE" }}
			/>
			<A_19_213_Y2C_CQ2R2L_3T_CY_
				name="D2"
				schX={8}
				schY={-2.8}
				schRotation="90deg"
				pcbX={-5}
				pcbY={-7.5}
				connections={{ anode: "net.D2_ANODE", cathode: N.GND }}
			/>
			<resistor
				name="R3"
				schX={12}
				schY={-1}
				schRotation="270deg"
				manufacturerPartNumber="RMCS0805FT487R"
				supplierPartNumbers={{ jlcpcb: ["C7289906"] }}
				resistance="487ohm"
				footprint="0805"
				pcbX={-11.5}
				pcbY={0}
				pcbRotation={0}
				connections={{ pin1: N.OLED, pin2: "net.D3_ANODE" }}
			/>
			<A_19_217_G7C_AN1P2_6T
				name="D3"
				schX={12}
				schY={-2.8}
				schRotation="90deg"
				pcbX={-5}
				pcbY={0}
				connections={{ anode: "net.D3_ANODE", cathode: N.GND }}
			/>
			<A_5001
				name="TP1"
				schX={-12.5}
				schY={2.5}
				pcbX={9}
				pcbY={-23}
				connections={{ pin1: N.GND }}
			/>
			</group>

			<group
				name="PAGE2_CIRCUIT"
				schSheetName="PAGE2"
				pcbX={0}
				pcbY={0}
			>
			<schematictext
				text="POWER FILTERING AND CURRENT MONITOR"
				schX={0}
				schY={6}
				fontSize={0.38}
				color="#006464"
			/>
			<netlabel
				net="V5_LPD"
				connectsTo=".L2 > .pin1"
				schX={-13.5}
				schY={-1}
				anchorSide="right"
			/>
			<netlabel
				net="V5_FILTERED"
				connectsTo=".L2 > .pin2"
				schX={-11.5}
				schY={-1}
				anchorSide="left"
			/>
			<netlabel
				net="V5_FILTERED"
				connectsTo=".U3 > .V_POS"
				schX={7.5}
				schY={3.6}
				anchorSide="bottom"
			/>

			{/* 3.3-V and 5-V filtering at the LaunchPad connector. */}
			<BLM18HE152SN1D
				name="L1"
				schX={-12.5}
				schY={3}
				pcbX={-20}
				pcbY={20}
				connections={{ pin1: N.V3P3_LPD, pin2: N.V3P3 }}
			/>
			<capacitor
				name="C24"
				schX={-9.5}
				schY={2.7}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-24.8}
				pcbY={20}
				pcbRotation={90}
				connections={{ pin1: N.V3P3, pin2: N.GND }}
			/>
			<capacitor
				name="C25"
				schX={-8}
				schY={2.7}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R60J106ME47D"
				supplierPartNumbers={{ jlcpcb: ["C77041"] }}
				capacitance="10uF"
				footprint="0603"
				pcbX={-22.5}
				pcbY={20}
				pcbRotation={90}
				connections={{ pin1: N.V3P3, pin2: N.GND }}
			/>
			<BLM18HE152SN1D
				name="L2"
				schX={-12.5}
				schY={-1}
				pcbX={-11}
				pcbY={18.5}
				connections={{ pin1: N.V5_LPD, pin2: N.V5 }}
			/>
			<capacitor
				name="C26"
				schX={-9.5}
				schY={-1.3}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-7.5}
				pcbY={18.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C27"
				schX={-8}
				schY={-1.3}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-5.2}
				pcbY={18.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C28"
				schX={-6.5}
				schY={-1.3}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R60J106ME47D"
				supplierPartNumbers={{ jlcpcb: ["C77041"] }}
				capacitance="10uF"
				footprint="0603"
				pcbX={-3}
				pcbY={18.5}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<capacitor
				name="C29"
				schX={-5}
				schY={-1.3}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-0.5}
				pcbY={23}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>

			{/* TI net ties split the filtered 3.3-V rail into functional domains. */}
			<resistor
				name="NT1"
				schX={-3.5}
				schY={3}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={-16.5}
				pcbY={20}
				pcbRotation={0}
				connections={{ pin1: N.V3P3, pin2: N.V3P3_TLV }}
			/>
			<resistor
				name="NT2"
				schX={-1.5}
				schY={3}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={20.5}
				pcbY={19}
				pcbRotation={0}
				connections={{ pin1: N.V3P3_TLV, pin2: N.V3P3_REF }}
			/>
			<resistor
				name="NT3"
				schX={0.5}
				schY={3}
				manufacturerPartNumber="0603WAF0000T5E"
				supplierPartNumbers={{ jlcpcb: ["C21189"] }}
				resistance="0ohm"
				footprint="0603"
				pcbX={-23}
				pcbY={17}
				pcbRotation={0}
				connections={{ pin1: N.V3P3_TLV, pin2: N.V3P3_INA }}
			/>

			{/* Vertical current-measurement headers with removable 2.54-mm shunts. */}
			<DZ254S_11_02_48
				name="J3"
				schX={-6}
				schY={3}
				pcbX={-26.5}
				pcbY={-14.5}
				pcbRotation={0}
				connections={{ pin1: N.V_PIR, pin2: N.V3P3 }}
			/>
			<DZ254S_11_02_48
				name="J4"
				schX={3}
				schY={3}
				pcbX={6}
				pcbY={18}
				pcbRotation={90}
				connections={{ pin1: N.V_TLV, pin2: N.V3P3 }}
			/>

			{/* INA226 supply-current measurement and its unity-gain input buffer. */}
			<resistor
				name="R21"
				schX={5}
				schY={3}
				manufacturerPartNumber="RT0603BRD0715KL"
				supplierPartNumbers={{ jlcpcb: ["C326733"] }}
				resistance="15kohm"
				footprint="0603"
				pcbX={2.5}
				pcbY={12.5}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_TLV, pin2: N.V_TLV }}
			/>
			<capacitor
				name="C22"
				schX={5}
				schY={1.3}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={2.5}
				pcbY={9.5}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_TLV, pin2: N.V_TLV }}
			/>
			<TLV333IDBVR
				name="U3"
				schX={7.5}
				schY={3}
				symbol={<symbol />}
				pcbX={1.5}
				pcbY={16.5}
				connections={{
					OUT: N.BUFFER_OUT,
					IN_NEG: N.BUFFER_OUT,
					IN_POS: N.V_TLV,
					V_POS: N.V5,
					V_NEG: N.GND,
				}}
			/>
			<schematicsymbol
				name="U3A"
				displayName="U3"
				chipRef=".U3"
				symbolName="opamp_with_power"
				schX={7.5}
				schY={3}
				connections={{
					inp1: ".U3 > .IN_POS",
					inp2: ".U3 > .IN_NEG",
					out: ".U3 > .OUT",
					"V+": ".U3 > .V_POS",
					"V-": ".U3 > .V_NEG",
				}}
			/>
			<capacitor
				name="C23"
				schX={7.5}
				schY={0}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={1.5}
				pcbY={21}
				pcbRotation={90}
				connections={{ pin1: N.V5, pin2: N.GND }}
			/>
			<INA226AIDGSR
				name="U2"
				schX={10.5}
				schY={3}
				pcbX={-3.5}
				pcbY={10}
				pcbRotation={90}
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
				schX={10.5}
				schY={0}
				schRotation="270deg"
				manufacturerPartNumber="GRM188R71E104KA01D"
				supplierPartNumbers={{ jlcpcb: ["C77050"] }}
				capacitance="0.1uF"
				footprint="0603"
				pcbX={-7}
				pcbY={14}
				pcbRotation={90}
				connections={{ pin1: N.V3P3_INA, pin2: N.GND }}
			/>

			<A_5001
				name="TP2"
				schX={9}
				schY={0}
				pcbX={-11}
				pcbY={23}
				connections={{ pin1: N.GND }}
			/>
			</group>

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
			<hole name="MH1" diameter="3mm" pcbX={-27.94} pcbY={22.86} />
			<hole name="MH2" diameter="3mm" pcbX={-27.94} pcbY={-22.86} />
			<hole name="MH3" diameter="3mm" pcbX={27.94} pcbY={-22.86} />
			<silkscreencircle
				radius="5.4mm"
				pcbX={20.5}
				pcbY={-17}
				strokeWidth="0.2mm"
			/>
			<silkscreenrect
				width="10.8mm"
				height="10.8mm"
				pcbX={20.5}
				pcbY={-17}
				strokeWidth="0.15mm"
			/>
			<pcbnotetext
				text="H1 IML-0688 LENS 10.8 SQ"
				pcbX={18}
				pcbY={-13.8}
				fontSize="0.6mm"
			/>
			<pcbnotetext
				text="BOOSTXL-TLV8544PIR — RECONSTRUCTION"
				pcbX={0}
				pcbY={23.6}
				fontSize="0.7mm"
			/>
		</board>
	);
}
