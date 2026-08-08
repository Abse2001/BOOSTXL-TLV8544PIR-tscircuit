import type { LedProps } from "@tscircuit/props";
import objPath from "./A_19_217_R6C_AL1M2VY_3T.obj";
import stepPath from "./A_19_217_R6C_AL1M2VY_3T.step";

const pinLabels = {
	pin1: ["cathode", "neg"],
	pin2: ["anode", "pos"],
} as const;

export const A_19_217_R6C_AL1M2VY_3T = (props: LedProps) => {
	const { name = "LED1", ...restProps } = props;

	return (
		<led
			name={name}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C72044"],
			}}
			manufacturerPartNumber="19-217/R6C-AL1M2VY/3T"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2", "anode", "pos"]}
						pcbX="0.7489952mm"
						pcbY="0.000127mm"
						width="0.7999984mm"
						height="0.7999984mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1", "cathode", "neg"]}
						pcbX="-0.7489952mm"
						pcbY="-0.000127mm"
						width="0.7999984mm"
						height="0.7999984mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 0.22042119999991883, y: -0.3235197999999855 },
							{ x: 0.21046439999986433, y: -0.3235197999999855 },
							{ x: -0.11958320000007916, y: 0.006527799999958006 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22042119999991883, y: 0.3565143999999236 },
							{ x: 0.22042119999991883, y: 0.346532199999956 },
							{ x: -0.11958320000007916, y: 0.006527799999958006 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22042119999991883, y: 0.3565143999999236 },
							{ x: 0.22042119999991883, y: -0.3235197999999855 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.24046179999993456, y: 0.7565898000000288 },
							{ x: 1.3904721999999765, y: 0.7565898000000288 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.24046179999993456, y: -0.7435342000001128 },
							{ x: 1.3904721999999765, y: -0.7435342000001128 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.3904721999999765, y: 0.7564882000000352 },
							{ x: 1.3904721999999765, y: -0.7234428000000435 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.13954760000001443, y: -0.7458455999999387 },
							{ x: -1.1896598000000722, y: -0.7458455999999387 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896084000000656, y: -0.3457701999999472 },
							{ x: -1.4896084000000656, y: -0.44579539999995177 },
							{ x: -1.1896598000000722, y: -0.7458455999999387 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896084000000656, y: 0.3541776000000709 },
							{ x: -1.4896084000000656, y: -0.3457701999999472 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896084000000656, y: 0.3541776000000709 },
							{ x: -1.4896084000000656, y: 0.45432980000009593 },
							{ x: -1.1896598000000722, y: 0.7542784000000893 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.13954760000001443, y: 0.7542784000000893 },
							{ x: -1.1896598000000722, y: 0.7542784000000893 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22042119999991883, y: 0.006527799999958006 },
							{ x: -0.11958320000007916, y: 0.006527799999958006 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.066675mm"
						pcbY="1.767715mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.7517750000001797, y: 1.0177150000000665 },
							{ x: 1.618425000000002, y: 1.0177150000000665 },
							{ x: 1.618425000000002, y: -0.9808849999999438 },
							{ x: -1.7517750000001797, y: -0.9808849999999438 },
							{ x: -1.7517750000001797, y: 1.0177150000000665 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: -0.000012700000070253736,
					y: 0.000012699999956566899,
					z: -0.01,
				},
			}}
			{...restProps}
		/>
	);
};
