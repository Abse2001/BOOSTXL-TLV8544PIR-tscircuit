import { A_1N4148X_TP } from "../imports/A_1N4148X_TP/A_1N4148X_TP"
import { BLM18HE152SN1D } from "../imports/BLM18HE152SN1D/BLM18HE152SN1D"
import { INA226AIDGSR } from "../imports/INA226AIDGSR/INA226AIDGSR"
import { SSQ_110_03_G_D } from "../imports/SSQ_110_03_G_D/SSQ_110_03_G_D"
import { TLV8544PWR } from "../imports/TLV8544PWR/TLV8544PWR"

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
} as const

type TwoTerminalProps = {
  name: string
  from: string
  to: string
  pcbX: number
  pcbY: number
  pcbRotation?: number
  footprint?: string
}

const R = ({
  name,
  resistance,
  from,
  to,
  pcbX,
  pcbY,
  pcbRotation = 0,
  footprint = "0603",
}: TwoTerminalProps & { resistance: string }) => (
  <resistor
    name={name}
    resistance={resistance}
    footprint={footprint}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    connections={{ pin1: from, pin2: to }}
  />
)

const C = ({
  name,
  capacitance,
  from,
  to,
  pcbX,
  pcbY,
  pcbRotation = 90,
  footprint = "0603",
}: TwoTerminalProps & { capacitance: string }) => (
  <capacitor
    name={name}
    capacitance={capacitance}
    footprint={footprint}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    connections={{ pin1: from, pin2: to }}
  />
)

/**
 * Murata IRS-B210ST01-R1 footprint reconstructed from the archived Murata
 * package drawing. Pins 2, 4, and 5 are the grounded shield terminals.
 */
const PirSensorFootprint = () => (
  <footprint>
    <smtpad name="pin1" portHints={["1"]} shape="rect" width="1.2mm" height="0.8mm" pcbX="2.35mm" pcbY="0.95mm" />
    <smtpad name="pin2" portHints={["2"]} shape="rect" width="1.2mm" height="0.8mm" pcbX="2.35mm" pcbY="0mm" />
    <smtpad name="pin3" portHints={["3"]} shape="rect" width="1.2mm" height="0.8mm" pcbX="2.35mm" pcbY="-0.95mm" />
    <smtpad name="pin4" portHints={["4"]} shape="rect" width="1.2mm" height="0.8mm" pcbX="-2.35mm" pcbY="-1.25mm" />
    <smtpad name="pin5" portHints={["5"]} shape="rect" width="1.2mm" height="0.8mm" pcbX="-2.35mm" pcbY="1.25mm" />
    <silkscreenrect width="4.7mm" height="4.7mm" strokeWidth="0.15mm" />
    <silkscreencircle radius="0.3mm" pcbX="1.55mm" pcbY="1.55mm" isFilled />
  </footprint>
)

const PirSensor = () => (
  <chip
    name="A1"
    manufacturerPartNumber="IRS-B210ST01-R1"
    footprint={<PirSensorFootprint />}
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
  />
)

/** Molex SD-87898-001 recommended SMT land pattern for the two-circuit part. */
const Molex878980204Footprint = () => (
  <footprint>
    <smtpad name="pin1" portHints={["1"]} shape="rect" width="1.27mm" height="2.96mm" pcbX="-1.27mm" />
    <smtpad name="pin2" portHints={["2"]} shape="rect" width="1.27mm" height="2.96mm" pcbX="1.27mm" />
    <silkscreenrect width="5.08mm" height="2.54mm" strokeWidth="0.15mm" />
    <silkscreencircle radius="0.3mm" pcbX="-2.15mm" pcbY="0.8mm" isFilled />
  </footprint>
)

const MolexCurrentJumper = ({
  name,
  pcbX,
  pcbY,
  pcbRotation = 0,
  pin1,
  pin2,
}: {
  name: string
  pcbX: number
  pcbY: number
  pcbRotation?: number
  pin1: string
  pin2: string
}) => (
  <pinheader
    name={name}
    pinCount={2}
    manufacturerPartNumber="87898-0204"
    footprint={<Molex878980204Footprint />}
    pcbX={pcbX}
    pcbY={pcbY}
    pcbRotation={pcbRotation}
    connections={{ pin1, pin2 }}
  />
)

/** U3 is a unity-gain buffer, but TI did not print its MPN in SNOU148A. */
const CurrentSenseBuffer = () => (
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
)

export const BoostxlTlv8544Pir = () => (
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
    autorouter={{ preset: "auto_local", local: true, traceClearance: "0.15mm" }}
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
    <C name="C1" capacitance="0.01uF" from={N.PIR_OUT_HI} to={N.GND} pcbX={-18} pcbY={9} />
    <C name="C2" capacitance="0.01uF" from={N.FIRST_STAGE_AOUT} to={N.GND} pcbX={-18} pcbY={6} />
    <C name="C3" capacitance="0.01uF" from={N.PIR_OUT_LO} to={N.GND} pcbX={-18} pcbY={3} />
    <C name="C4" capacitance="0.01uF" from={N.PIR_SGL_AOUT} to={N.GND} pcbX={-18} pcbY={0} />

    {/* PIR sensor bias and seven-decade supply bypass bank. */}
    <PirSensor />
    <R name="R12" resistance="619kohm" from={N.V_PIR} to={N.PIR_VIN1} pcbX={7} pcbY={-9} />
    <C name="C10" capacitance="100uF" from={N.PIR_VIN1} to={N.GND} pcbX={1} pcbY={-17} footprint="1210" />
    <C name="C11" capacitance="10uF" from={N.PIR_VIN1} to={N.GND} pcbX={4.5} pcbY={-17} footprint="0805" />
    <C name="C12" capacitance="1uF" from={N.PIR_VIN1} to={N.GND} pcbX={7.5} pcbY={-17} />
    <C name="C13" capacitance="0.1uF" from={N.PIR_VIN1} to={N.GND} pcbX={0} pcbY={-12} />
    <C name="C14" capacitance="0.01uF" from={N.PIR_VIN1} to={N.GND} pcbX={2.5} pcbY={-12} />
    <C name="C15" capacitance="1000pF" from={N.PIR_VIN1} to={N.GND} pcbX={5} pcbY={-12} />
    <C name="C16" capacitance="100pF" from={N.PIR_VIN1} to={N.GND} pcbX={7.5} pcbY={-12} />

    {/* Quad nanopower op-amp: two gain/filter stages plus window comparators. */}
    <TLV8544PWR
      name="U1"
      pcbX={7}
      pcbY={0}
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

    <R name="R14" resistance="0ohm" from={N.PIR_VOUT_RAW} to={N.PIR_VO} pcbX={11} pcbY={-9} />
    <R name="R16" resistance="1.30Mohm" from={N.PIR_VO} to={N.GND} pcbX={11} pcbY={-12} pcbRotation={90} />
    <R name="R6" resistance="6.81kohm" from={N.U1A_INV} to={N.U1A_AC_RETURN} pcbX={-0.5} pcbY={-5} />
    <C name="C5" capacitance="33uF" from={N.U1A_AC_RETURN} to={N.GND} pcbX={-4} pcbY={-5} footprint="1206" />
    <R name="R9" resistance="1.50Mohm" from={N.U1A_OUT} to={N.U1A_INV} pcbX={1} pcbY={-3} />
    <C name="C6" capacitance="0.01uF" from={N.U1A_OUT} to={N.U1A_INV} pcbX={1} pcbY={-0.5} />
    <A_1N4148X_TP name="D4" pcbX={-2.5} pcbY={-1.5} connections={{ anode: N.U1A_INV, cathode: N.U1A_OUT }} />
    <A_1N4148X_TP name="D5" pcbX={-2.5} pcbY={1} pcbRotation={180} connections={{ anode: N.U1A_OUT, cathode: N.U1A_INV }} />
    <R name="R4" resistance="10kohm" from={N.U1A_OUT} to={N.FIRST_STAGE_AOUT} pcbX={1} pcbY={3} />

    <C name="C9" capacitance="3.3uF" from={N.U1A_OUT} to={N.INTERSTAGE} pcbX={10} pcbY={-6} footprint="0805" />
    <R name="R13" resistance="68.1kohm" from={N.INTERSTAGE} to={N.U1B_INV} pcbX={13} pcbY={-6} />
    <R name="R7" resistance="15Mohm" from={N.U1B_OUT} to={N.U1B_INV} pcbX={12} pcbY={-3.5} />
    <C name="C7" capacitance="1000pF" from={N.U1B_OUT} to={N.U1B_INV} pcbX={15} pcbY={-3.5} />
    <R name="R17" resistance="0ohm" from={N.U1B_REF} to={N.REF_MID} pcbX={12} pcbY={5.5} />
    <C name="C17" capacitance="0.1uF" from={N.U1B_REF} to={N.GND} pcbX={9.5} pcbY={5.5} />
    <R name="R15" resistance="0ohm" from={N.U1B_OUT} to={N.PIR_SIGNAL_BUS} pcbX={11.5} pcbY={-2} />
    <R name="R5" resistance="10kohm" from={N.PIR_SIGNAL_BUS} to={N.PIR_SGL_AOUT} pcbX={14.5} pcbY={0.5} />

    {/* 3/4-VCC and 1/4-VCC window-comparator references. */}
    <R name="R8" resistance="15Mohm" from={N.V3P3_REF} to={N.REF_HIGH} pcbX={17} pcbY={9} pcbRotation={90} />
    <R name="R11" resistance="15Mohm" from={N.REF_HIGH} to={N.REF_MID} pcbX={17} pcbY={5.7} pcbRotation={90} />
    <R name="R18" resistance="15Mohm" from={N.REF_MID} to={N.REF_LOW} pcbX={17} pcbY={2.4} pcbRotation={90} />
    <R name="R20" resistance="15Mohm" from={N.REF_LOW} to={N.GND} pcbX={17} pcbY={-0.9} pcbRotation={90} />
    <C name="C8" capacitance="0.1uF" from={N.REF_HIGH} to={N.GND} pcbX={19} pcbY={6} />
    <C name="C18" capacitance="0.1uF" from={N.REF_LOW} to={N.GND} pcbX={19} pcbY={2} />
    <R name="R10" resistance="10kohm" from={N.U1C_OUT} to={N.PIR_OUT_HI} pcbX={18} pcbY={-4} />
    <R name="R19" resistance="10kohm" from={N.U1D_OUT} to={N.PIR_OUT_LO} pcbX={18} pcbY={-7} />
    <C name="C19" capacitance="0.1uF" from={N.V_TLV} to={N.GND} pcbX={3.5} pcbY={5.5} />
    <C name="C20" capacitance="10uF" from={N.V_TLV} to={N.GND} pcbX={6} pcbY={6} footprint="0805" />

    {/* Indicator LEDs driven by the LaunchPad. */}
    <R name="R1" resistance="442ohm" from={N.RLED} to="net.D1_ANODE" pcbX={-14} pcbY={-4} />
    <led name="D1" color="red" footprint="0603" pcbX={-11} pcbY={-4} connections={{ anode: "net.D1_ANODE", cathode: N.GND }} />
    <R name="R2" resistance="487ohm" from={N.YLED} to="net.D2_ANODE" pcbX={-14} pcbY={-7} />
    <led name="D2" color="yellow" footprint="0603" pcbX={-11} pcbY={-7} connections={{ anode: "net.D2_ANODE", cathode: N.GND }} />
    <R name="R3" resistance="487ohm" from={N.OLED} to="net.D3_ANODE" pcbX={-14} pcbY={-10} />
    <led name="D3" color="green" footprint="0603" pcbX={-11} pcbY={-10} connections={{ anode: "net.D3_ANODE", cathode: N.GND }} />

    {/* 3.3-V and 5-V filtering at the LaunchPad connector. */}
    <BLM18HE152SN1D name="L1" pcbX={-16} pcbY={16} connections={{ pin1: N.V3P3_LPD, pin2: N.V3P3 }} />
    <C name="C24" capacitance="0.1uF" from={N.V3P3} to={N.GND} pcbX={-13} pcbY={16} />
    <C name="C25" capacitance="10uF" from={N.V3P3} to={N.GND} pcbX={-10.5} pcbY={16} footprint="0805" />
    <BLM18HE152SN1D name="L2" pcbX={-16} pcbY={12.5} connections={{ pin1: N.V5_LPD, pin2: N.V5 }} />
    <C name="C26" capacitance="0.1uF" from={N.V5} to={N.GND} pcbX={-13} pcbY={12.5} />
    <C name="C27" capacitance="0.1uF" from={N.V5} to={N.GND} pcbX={-10.5} pcbY={12.5} />
    <C name="C28" capacitance="10uF" from={N.V5} to={N.GND} pcbX={-8} pcbY={12.5} footprint="0805" />
    <C name="C29" capacitance="0.1uF" from={N.V5} to={N.GND} pcbX={-5.5} pcbY={12.5} />

    {/* TI net ties split the filtered 3.3-V rail into functional domains. */}
    <R name="NT1" resistance="0ohm" from={N.V3P3} to={N.V3P3_TLV} pcbX={-7} pcbY={19} />
    <R name="NT2" resistance="0ohm" from={N.V3P3} to={N.V3P3_REF} pcbX={-4} pcbY={19} />
    <R name="NT3" resistance="0ohm" from={N.V3P3} to={N.V3P3_INA} pcbX={-1} pcbY={19} />

    {/* Current-measurement jumpers. Exact Molex 87898-0204 is not in JLCPCB. */}
    <MolexCurrentJumper
      name="J3"
      pcbX={-18}
      pcbY={-15}
      pin1={N.V_PIR}
      pin2={N.V3P3}
    />
    <MolexCurrentJumper
      name="J4"
      pcbX={7}
      pcbY={15}
      pin1={N.V_TLV}
      pin2={N.V3P3}
    />

    {/* INA226 supply-current measurement and its unity-gain input buffer. */}
    <R name="R21" resistance="15kohm" from={N.V3P3_TLV} to={N.V_TLV} pcbX={0} pcbY={8} pcbRotation={90} />
    <C name="C22" capacitance="0.1uF" from={N.V3P3_TLV} to={N.GND} pcbX={-2} pcbY={8} />
    <CurrentSenseBuffer />
    <C name="C23" capacitance="0.1uF" from={N.V5} to={N.GND} pcbX={11} pcbY={13.5} />
    <INA226AIDGSR
      name="U2"
      pcbX={-5}
      pcbY={8}
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
    <C name="C21" capacitance="0.1uF" from={N.V3P3_INA} to={N.GND} pcbX={-8} pcbY={8} />

    <testpoint name="TP1" footprintVariant="through_hole" padDiameter="2.4mm" holeDiameter="1mm" pcbX={7.7} pcbY={-20} connections={{ pin1: N.GND }} />
    <testpoint name="TP2" footprintVariant="through_hole" padDiameter="2.4mm" holeDiameter="1mm" pcbX={-3} pcbY={14} connections={{ pin1: N.GND }} />

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
    <pcbnotetext text="H1 IML-0669 LENS Ø12" pcbX={15} pcbY={-20.4} fontSize="0.6mm" />
    <pcbnotetext text="BOOSTXL-TLV8544PIR — RECONSTRUCTION" pcbX={0} pcbY={20.3} fontSize="0.7mm" />
  </board>
)

export default BoostxlTlv8544Pir
