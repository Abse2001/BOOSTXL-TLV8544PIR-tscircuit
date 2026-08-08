import type { LedProps } from "@tscircuit/props";
import objPath from "./A_19_217_G7C_AN1P2_6T.obj";
import stepPath from "./A_19_217_G7C_AN1P2_6T.step";

const pinLabels = {
	pin1: ["anode", "pos"],
	pin2: ["cathode", "neg"],
} as const;

export const A_19_217_G7C_AN1P2_6T = (props: LedProps) => {
	const { name = "LED1", ...restProps } = props;

	return (
		<led
			name={name}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C2986030"],
			}}
			manufacturerPartNumber="19-217/G7C-AN1P2/6T"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1", "anode", "pos"]}
						pcbX="-0.850011mm"
						pcbY="0mm"
						width="0.899922mm"
						height="0.999998mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2", "cathode", "neg"]}
						pcbX="0.850011mm"
						pcbY="0mm"
						width="0.899922mm"
						height="0.999998mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 1.7500599999999622, y: 0.35001199999999244 },
							{ x: 1.7500599999999622, y: 0.45003719999988334 },
							{ x: 1.4501114000000825, y: 0.7500619999999572 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.7500599999999622, y: -0.34991039999999884 },
							{ x: 1.7500599999999622, y: -0.45006260000013754 },
							{ x: 1.4501114000000825, y: -0.7500112000000172 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.7500599999999622, y: -0.34991039999999884 },
							{ x: 1.7500599999999622, y: 0.35001199999999244 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.549958800000013, y: -0.7498841999999968 },
							{ x: -1.549958800000013, y: 0.7300213999999414 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.3001009999999269, y: 0.7500619999999572 },
							{ x: 1.4501114000000825, y: 0.7500619999999572 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.3001009999999269, y: -0.7500112000000172 },
							{ x: 1.4501114000000825, y: -0.7500112000000172 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.29992319999985284, y: 0.7500619999999572 },
							{ x: -1.549958800000013, y: 0.7500619999999572 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.29992319999985284, y: -0.7500112000000172 },
							{ x: -1.549958800000013, y: -0.7500112000000172 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.1269999999999527, y: 0.3809999999999718 },
							{ x: -0.1269999999999527, y: -0.3810000000000855 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.1269999999999527, y: -0.006400800000051277 },
							{ x: 0.1270000000000664, y: -0.006400800000051277 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="0.089789mm"
						pcbY="1.762mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.8112110000000712, y: 1.0119999999999436 },
							{ x: 1.9907889999999497, y: 1.0119999999999436 },
							{ x: 1.9907889999999497, y: -0.9866000000000668 },
							{ x: -1.8112110000000712, y: -0.9866000000000668 },
							{ x: -1.8112110000000712, y: 1.0119999999999436 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0, y: 0, z: -0.001 },
			}}
			{...restProps}
		/>
	);
};
