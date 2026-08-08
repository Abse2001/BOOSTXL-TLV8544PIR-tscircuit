import type { ChipProps } from "@tscircuit/props";
import objPath from "./GPHD101_0202A037R1BA.obj";
import stepPath from "./GPHD101_0202A037R1BA.step";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
} as const;

export const GPHD101_0202A037R1BA = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C5371819"],
			}}
			manufacturerPartNumber="GPHD101-0202A037R1BA"
			footprint={
				<footprint>
					<smtpad
						portHints={["pin2"]}
						pcbX="1.27mm"
						pcbY="0mm"
						width="1.0199878mm"
						height="3.1599886mm"
						shape="rect"
					/>
					<smtpad
						portHints={["pin1"]}
						pcbX="-1.27mm"
						pcbY="0mm"
						width="1.0199878mm"
						height="3.1599886mm"
						shape="rect"
					/>
					<silkscreenpath
						route={[
							{ x: 2.5400000000000773, y: -3.9840153999999757 },
							{ x: 2.5400000000000773, y: -6.484010399999988 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.5400000000000773, y: -3.9840153999999757 },
							{ x: 2.5400000000000773, y: -3.9840153999999757 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.2699999999998681, y: -1.8111724000000322 },
							{ x: 1.2699999999998681, y: -3.9840153999999757 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: 1.2699999999998681, y: -6.477000000000089 },
							{ x: 1.2699999999998681, y: -12.476937199999952 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.2699999999999818, y: -6.477000000000089 },
							{ x: -1.2699999999999818, y: -12.476937199999952 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -1.2699999999999818, y: -1.8111724000000322 },
							{ x: -1.2699999999999818, y: -3.9840153999999757 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.5400000000000773, y: -3.9840153999999757 },
							{ x: -2.5400000000000773, y: -6.484010399999988 },
						]}
					/>
					<silkscreenpath
						route={[
							{ x: -2.5400000000000773, y: -6.484010399999988 },
							{ x: 2.5400000000000773, y: -6.484010399999988 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.127mm"
						pcbY="2.5748mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -3.0439999999999827, y: 1.8247999999998683 },
							{ x: 2.7900000000000773, y: 1.8247999999998683 },
							{ x: 2.7900000000000773, y: -12.772199999999998 },
							{ x: -3.0439999999999827, y: -12.772199999999998 },
							{ x: -3.0439999999999827, y: 1.8247999999998683 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				stepUrl: stepPath,
				pcbRotationOffset: 0,
				modelOriginPosition: {
					x: -0.004999999999999893,
					y: 3.9179971000000022,
					z: -1.25,
				},
			}}
			{...props}
		/>
	);
};
