import type { InductorProps } from "@tscircuit/props";
import objPath from "./BLM18HE152SN1D.obj";
import stepPath from "./BLM18HE152SN1D.step";

type BLM18HE152SN1DProps = Omit<InductorProps, "inductance"> & {
	inductance?: InductorProps["inductance"];
};

// Murata specifies this ferrite bead as 1500 ohm at 100 MHz rather than with
// a nominal inductance. 1500 / (2 * pi * 100 MHz) is 2.387 uH, which is used
// only as the native inductor's schematic/electrical-model equivalent.
const equivalentInductanceAt100MHz = "2.387uH";

export const BLM18HE152SN1D = (props: BLM18HE152SN1DProps) => {
	return (
		<inductor
			inductance={equivalentInductanceAt100MHz}
			supplierPartNumbers={{
				jlcpcb: ["C82155"],
			}}
			manufacturerPartNumber="BLM18HE152SN1D"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1"]}
						pcbX="-0.699897mm"
						pcbY="0mm"
						width="0.7999984mm"
						height="0.8640064mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="0.699897mm"
						pcbY="0mm"
						width="0.7999984mm"
						height="0.8640064mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -1.2700000000000955, y: -0.6513575999998693 },
							{ x: -1.4241018000001304, y: -0.499008399999866 },
							{ x: -1.4241018000001304, y: 0.5174234000000979 },
							{ x: -1.2700000000000955, y: 0.6499860000001263 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.2699999999998681, y: 0.6499860000001263 },
							{ x: 1.4241525999999567, y: 0.49898300000006657 },
							{ x: 1.4241525999999567, y: -0.5174487999998973 },
							{ x: 1.2699999999998681, y: -0.6500114000000394 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.272006600000168, y: 0.6499860000001263 },
							{ x: -0.5100066000001107, y: 0.6499860000001263 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.2720573999999942, y: -0.6500114000000394 },
							{ x: 0.5100573999999369, y: -0.6500114000000394 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.272006600000168, y: -0.6500114000000394 },
							{ x: -0.5100066000001107, y: -0.6500114000000394 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.2720573999999942, y: 0.6499860000001263 },
							{ x: 0.5100573999999369, y: 0.6499860000001263 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.009525mm"
						pcbY="1.63754mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.6628750000002128, y: 0.8875400000000582 },
							{ x: 1.6819249999998647, y: 0.8875400000000582 },
							{ x: 1.6819249999998647, y: -0.9078599999998005 },
							{ x: -1.6628750000002128, y: -0.9078599999998005 },
							{ x: -1.6628750000002128, y: 0.8875400000000582 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 180,
				modelOriginPosition: {
					x: 0.0023875999999063424,
					y: 0.015976600000044527,
					z: -0.25,
				},
			}}
			{...props}
		/>
	);
};
