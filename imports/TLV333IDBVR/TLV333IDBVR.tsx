import type { ChipProps } from "@tscircuit/props";
import objPath from "./TLV333IDBVR.obj";
import stepPath from "./TLV333IDBVR.step";

const pinLabels = {
	pin1: ["OUT"],
	pin2: ["V_NEG"],
	pin3: ["IN_POS"],
	pin4: ["IN_NEG"],
	pin5: ["V_POS"],
} as const;

export const TLV333IDBVR = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			symbol={
				<symbol>
					<port
						name="pin5"
						pinNumber={5}
						aliases={["V_POS"]}
						direction="up"
						schX={0}
						schY={10.16}
						schStemLength={5.08}
					/>
					<port
						name="pin1"
						pinNumber={1}
						aliases={["OUT"]}
						direction="right"
						schX={10.16}
						schY={0}
						schStemLength={5.08}
					/>
					<port
						name="pin2"
						pinNumber={2}
						aliases={["V_NEG"]}
						direction="down"
						schX={0}
						schY={-10.16}
						schStemLength={5.08}
					/>
					<port
						name="pin3"
						pinNumber={3}
						aliases={["IN_POS"]}
						direction="left"
						schX={-10.16}
						schY={-2.54}
						schStemLength={5.08}
					/>
					<port
						name="pin4"
						pinNumber={4}
						aliases={["IN_NEG"]}
						direction="left"
						schX={-10.16}
						schY={2.54}
						schStemLength={5.08}
					/>
					<schematicpath
						points={[
							{ x: 0, y: -2.54 },
							{ x: 0, y: -5.08 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
					<schematicpath
						points={[
							{ x: 0, y: 5.08 },
							{ x: 0, y: 2.54 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
					<schematicpath
						points={[
							{ x: -3.302, y: -1.778 },
							{ x: -3.302, y: -3.302 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
					<schematicpath
						points={[
							{ x: -4.064, y: -2.54 },
							{ x: -2.54, y: -2.54 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
					<schematicpath
						points={[
							{ x: -4.064, y: 2.54 },
							{ x: -2.54, y: 2.54 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
					<schematicpath
						points={[
							{ x: -5.08, y: -5.08 },
							{ x: 5.08, y: 0 },
							{ x: -5.08, y: 5.08 },
							{ x: -5.08, y: -5.08 },
						]}
						strokeWidth={0.254}
						strokeColor="#880000"
					/>
				</symbol>
			}
			supplierPartNumbers={{
				jlcpcb: ["C473369"],
			}}
			manufacturerPartNumber="TLV333IDBVR"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin5"]}
						pcbX="-0.94996mm"
						pcbY="1.100074mm"
						width="0.5999988mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin4"]}
						pcbX="0.94996mm"
						pcbY="1.100074mm"
						width="0.5999988mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-0.94996mm"
						pcbY="-1.100074mm"
						width="0.5999988mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin3"]}
						pcbX="0.94996mm"
						pcbY="-1.100074mm"
						width="0.5999988mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2"]}
						pcbX="0mm"
						pcbY="-1.100074mm"
						width="0.5999988mm"
						height="0.999998mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: -1.5240000000001146, y: 0.6984999999999673 },
							{ x: -1.5240000000001146, y: -0.6984999999999673 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.3969999999999345, y: 0.4224020000000337 },
							{ x: 1.3969999999999345, y: -0.4223765999998932 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.3810000000000855, y: 0.8890000000001237 },
							{ x: 0.3809999999999718, y: 0.8890000000001237 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.0381mm"
						pcbY="2.6002mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.7740000000001146, y: 1.8502000000000862 },
							{ x: 1.6977999999999156, y: 1.8502000000000862 },
							{ x: 1.6977999999999156, y: -2.1803999999999633 },
							{ x: -1.7740000000001146, y: -2.1803999999999633 },
							{ x: -1.7740000000001146, y: 1.8502000000000862 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: -0.75 },
			}}
			{...props}
		/>
	);
};
