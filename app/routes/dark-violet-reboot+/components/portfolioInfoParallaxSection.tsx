import { ParallaxLayer } from "@react-spring/parallax";
import { PortfolioItemInfoSection } from "./data";
import Text from "~/components/buildingBlocks/text";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function PortfolioParallaxSection({
  projectInfoSection,
  headingOffset,
  headingSpeed,
  headingSticky,
  paragraphsOffset,
  paragraphsSpeed,
  paragraphsSticky,
  className,
}: {
  projectInfoSection: PortfolioItemInfoSection;
  headingOffset?: number;
  headingSpeed?: number;
  headingSticky?: { start: number; end: number };
  paragraphsOffset?: number;
  paragraphsSpeed?: number;
  paragraphsSticky?: { start: number; end: number };
  className?: string;
}) {
  return (
    <>
      <ParallaxLayer
        offset={headingOffset}
        speed={headingSpeed}
        sticky={headingSticky}
        className={className}
      >
        <FlexFull className="px-[1vh] md:px-[2vh] xl:px-[3vh] justify-center">
          <FlexFull className="xl:max-w-[80vw]">
            <Text className="text-cyan-300 text-[2.5vh] textShadow">
              {projectInfoSection.heading}
            </Text>
          </FlexFull>
        </FlexFull>
      </ParallaxLayer>
      <ParallaxLayer
        offset={paragraphsOffset}
        speed={paragraphsSpeed}
        sticky={paragraphsSticky}
        className={className}
      >
        {" "}
        <VStackFull
          className="px-[1vh] md:px-[2vh] lg:px-[3vh]"
          gap="gap-[2vh]"
          align="items-start xl:items-center"
        >
          {projectInfoSection.paragraphs.map((paragraph, index) => (
            <FlexFull className="xl:max-w-[80vw]">
              <Text key={index} className="text-[2.1vh] textShadow">
                {paragraph}
              </Text>
            </FlexFull>
          ))}{" "}
        </VStackFull>
      </ParallaxLayer>
    </>
  );
}
