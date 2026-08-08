import type { LedProps } from "@tscircuit/props";
import objPath from "./A_19_213_Y2C_CQ2R2L_3T_CY_.obj";
import stepPath from "./A_19_213_Y2C_CQ2R2L_3T_CY_.step";

const pinLabels = {
	pin1: ["cathode", "neg"],
	pin2: ["anode", "pos"],
} as const;

export const A_19_213_Y2C_CQ2R2L_3T_CY_ = (props: LedProps) => {
	const { name = "LED1", ...restProps } = props;

	return (
		<led
			name={name}
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C72038"],
			}}
			manufacturerPartNumber="19-213/Y2C-CQ2R2L/3T(CY)"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin1", "cathode", "neg"]}
						pcbX="-0.799465mm"
						pcbY="-0.003429mm"
						width="0.7999984mm"
						height="0.7999984mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin2", "anode", "pos"]}
						pcbX="0.799465mm"
						pcbY="0.003429mm"
						width="0.7999984mm"
						height="0.7999984mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 0.22039580000011938, y: -0.32349440000007235 },
							{ x: 0.21048980000011852, y: -0.32349440000007235 },
							{ x: -0.1196085999999923, y: 0.006527800000071693 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22039580000011938, y: 0.35653979999995045 },
							{ x: 0.22039580000011938, y: 0.3465322000000697 },
							{ x: -0.1196085999999923, y: 0.006527800000071693 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22039580000011938, y: 0.35653979999995045 },
							{ x: 0.22039580000011938, y: -0.32349440000007235 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.24043640000002142, y: 0.756564400000002 },
							{ x: 1.3904976000000033, y: 0.756564400000002 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.24043640000002142, y: -0.743559600000026 },
							{ x: 1.3904976000000033, y: -0.743559600000026 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.3904976000000033, y: 0.7565135999999484 },
							{ x: 1.3904976000000033, y: -0.7234682000000703 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.13957299999992756, y: -0.7458456000000524 },
							{ x: -1.1896851999999853, y: -0.7458456000000524 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896337999999787, y: -0.34574479999992036 },
							{ x: -1.4896337999999787, y: -0.44577000000003864 },
							{ x: -1.1896851999999853, y: -0.7458456000000524 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896337999999787, y: 0.35417759999995724 },
							{ x: -1.4896337999999787, y: -0.34574479999992036 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.4896337999999787, y: 0.35417759999995724 },
							{ x: -1.4896337999999787, y: 0.45432979999998224 },
							{ x: -1.1896851999999853, y: 0.7542783999999756 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -0.13957299999992756, y: 0.7542783999999756 },
							{ x: -1.1896851999999853, y: 0.7542783999999756 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 0.22039580000011938, y: 0.006527800000071693 },
							{ x: -0.1196085999999923, y: 0.006527800000071693 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.050165mm"
						pcbY="1.758571mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -1.735264999999913, y: 1.0085709999999608 },
							{ x: 1.6349350000002687, y: 1.0085709999999608 },
							{ x: 1.6349350000002687, y: -0.9900289999999359 },
							{ x: -1.735264999999913, y: -0.9900289999999359 },
							{ x: -1.735264999999913, y: 1.0085709999999608 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0.0499998999998752, y: 0, z: -0.01 },
			}}
			{...restProps}
		/>
	);
};
