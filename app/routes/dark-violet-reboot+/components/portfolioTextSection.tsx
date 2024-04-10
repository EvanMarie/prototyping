import { ParallaxLayer } from "@react-spring/parallax";
import { PortfolioItemInfoSection } from "./data";
import Text from "~/components/buildingBlocks/text";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function PortfolioTextSection({
  projectInfoSection,

  className,
}: {
  projectInfoSection: PortfolioItemInfoSection;

  className?: string;
}) {
  return (
    <VStackFull className="p-[1.5vh] sm:p-[2vh] md:p-[3vh] md:w-90% lg:80%">
      <FlexFull className="px-[1vh] md:px-[2vh] xl:px-[3vh] justify-center ">
        <FlexFull className="xl:max-w-[80vw] ">
          <Text className="text-cyan-300 text-[2.5vh] md:text-[2.8vh] lg:text-[3vh] xl:text-[3.3vh] textShadow">
            {projectInfoSection.heading}
          </Text>
        </FlexFull>
      </FlexFull>

      <FlexFull className="xl:max-w-[80vw]">
        <Text className="text-[1.9vh] sm:text-[2.1vh] md:text-[2.2vh] lg:text-[2.3vh] xl:text-[2.4vh] xxl:text-[2.8vh] textShadow">
          {projectInfoSection.description}
        </Text>
      </FlexFull>
    </VStackFull>
  );
}
