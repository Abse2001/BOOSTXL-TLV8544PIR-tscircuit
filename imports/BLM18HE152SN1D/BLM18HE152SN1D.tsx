import objPath from "./BLM18HE152SN1D.obj"
import stepPath from "./BLM18HE152SN1D.step"
import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const BLM18HE152SN1D = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={5.08} schY={0} schStemLength={0.762} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-5.08} schY={0} schStemLength={0.762} />
          <schematicpath svgPath="M -4.28752 0.01778 A 1.016 0.9906 0 1 0 -2.26568 0.01524" strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath svgPath="M -2.1336 0.01778 A 1.016 0.9906 0 1 0 -0.11176 0.01778" strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath svgPath="M 0.01778 0.01778 A 1.016 0.9906 0 1 0 2.03962 0.01778" strokeWidth={0.254} strokeColor="#880000" />
          <schematicpath svgPath="M 2.2098 0.01778 A 1.016 0.9906 0 1 0 4.23418 0.01524" strokeWidth={0.254} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C82155"
  ]
}}
      manufacturerPartNumber="BLM18HE152SN1D"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.699897mm" pcbY="0mm" width="0.7999984mm" height="0.8640064mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="0.699897mm" pcbY="0mm" width="0.7999984mm" height="0.8640064mm" shape="rect" />
<silkscreenpath route={[{"x":-1.2700000000000955,"y":-0.6513575999998693},{"x":-1.4241018000001304,"y":-0.499008399999866},{"x":-1.4241018000001304,"y":0.5174234000000979},{"x":-1.2700000000000955,"y":0.6499860000001263}]} />
<silkscreenpath route={[{"x":1.2699999999998681,"y":0.6499860000001263},{"x":1.4241525999999567,"y":0.49898300000006657},{"x":1.4241525999999567,"y":-0.5174487999998973},{"x":1.2699999999998681,"y":-0.6500114000000394}]} />
<silkscreenpath route={[{"x":-1.272006600000168,"y":0.6499860000001263},{"x":-0.5100066000001107,"y":0.6499860000001263}]} />
<silkscreenpath route={[{"x":1.2720573999999942,"y":-0.6500114000000394},{"x":0.5100573999999369,"y":-0.6500114000000394}]} />
<silkscreenpath route={[{"x":-1.272006600000168,"y":-0.6500114000000394},{"x":-0.5100066000001107,"y":-0.6500114000000394}]} />
<silkscreenpath route={[{"x":1.2720573999999942,"y":0.6499860000001263},{"x":0.5100573999999369,"y":0.6499860000001263}]} />
<silkscreentext text="{NAME}" pcbX="0.009525mm" pcbY="1.63754mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.6628750000002128,"y":0.8875400000000582},{"x":1.6819249999998647,"y":0.8875400000000582},{"x":1.6819249999998647,"y":-0.9078599999998005},{"x":-1.6628750000002128,"y":-0.9078599999998005},{"x":-1.6628750000002128,"y":0.8875400000000582}]} />
      </footprint>}
      cadModel={{
        objUrl: objPath,
        stepUrl: stepPath,
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0.0023875999999063424, y: 0.015976600000044527, z: -0.25 },
      }}
      {...props}
    />
  )
}