import type { ChipProps } from "@tscircuit/props";
import objPath from "./SSQ_110_03_G_D.obj";

const pinLabels = {
	pin1: ["pin1"],
	pin2: ["pin2"],
	pin3: ["pin3"],
	pin4: ["pin4"],
	pin5: ["pin5"],
	pin6: ["pin6"],
	pin7: ["pin7"],
	pin8: ["pin8"],
	pin9: ["pin9"],
	pin10: ["pin10"],
	pin11: ["pin11"],
	pin12: ["pin12"],
	pin13: ["pin13"],
	pin14: ["pin14"],
	pin15: ["pin15"],
	pin16: ["pin16"],
	pin17: ["pin17"],
	pin18: ["pin18"],
	pin19: ["pin19"],
	pin20: ["pin20"],
} as const;

export const SSQ_110_03_G_D = (props: ChipProps<typeof pinLabels>) => {
	return (
		<chip
			pinLabels={pinLabels}
			supplierPartNumbers={{
				jlcpcb: ["C3323139"],
			}}
			manufacturerPartNumber="SSQ-110-03-G-D"
			footprint={
				<footprint>
					<platedhole
						portHints={["pin20"]}
						pcbX="11.43mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin19"]}
						pcbX="11.43mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin18"]}
						pcbX="8.89mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin17"]}
						pcbX="8.89mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin16"]}
						pcbX="6.35mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin15"]}
						pcbX="6.35mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin14"]}
						pcbX="3.81mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin13"]}
						pcbX="3.81mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin12"]}
						pcbX="1.27mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin11"]}
						pcbX="1.27mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin10"]}
						pcbX="-1.27mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin9"]}
						pcbX="-1.27mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin8"]}
						pcbX="-3.81mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin7"]}
						pcbX="-3.81mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin6"]}
						pcbX="-6.35mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin5"]}
						pcbX="-6.35mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin4"]}
						pcbX="-8.89mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin3"]}
						pcbX="-8.89mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin2"]}
						pcbX="-11.43mm"
						pcbY="1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<platedhole
						portHints={["pin1"]}
						pcbX="-11.43mm"
						pcbY="-1.27mm"
						outerDiameter="1.7999964mm"
						holeDiameter="1.1000232mm"
						shape="circle"
					/>
					<silkscreenpath
						route={[
							{ x: -12.826999999999884, y: 0 },
							{ x: -10.159999999999854, y: 0 },
							{ x: -10.159999999999854, y: -2.413000000000011 },
						]}
					/>
					<silkscreentext
						text="{NAME}"
						pcbX="-0.0127mm"
						pcbY="3.4892mm"
						anchorAlignment="center"
						fontSize="1mm"
					/>
					<courtyardoutline
						outline={[
							{ x: -13.229399999999828, y: 2.7392000000000962 },
							{ x: 13.204000000000178, y: 2.7392000000000962 },
							{ x: 13.204000000000178, y: -2.7900000000000773 },
							{ x: -13.229399999999828, y: -2.7900000000000773 },
							{ x: -13.229399999999828, y: 2.7392000000000962 },
						]}
					/>
				</footprint>
			}
			cadModel={{
				objUrl: objPath,
				pcbRotationOffset: 0,
				modelOriginPosition: { x: 0.0004862999999293294, y: 0, z: -4.2500064 },
			}}
			{...props}
		/>
	);
};
