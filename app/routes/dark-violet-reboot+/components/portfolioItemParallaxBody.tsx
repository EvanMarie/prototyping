import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import RadialScrollProgress from "./radialProgress";
import PortfolioParallaxSection from "./portfolioInfoParallaxSection";
import { PortfolioImage, PortfolioItemInfoSection } from "./data";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";

export function PortfolioItemParallaxBodyMobile({
  infoSections,
  projectInfoImages,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
}) {
  return (
    <>
      {" "}
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="sm:hidden"
          headingOffset={0.65}
          paragraphsOffset={0.7}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[0]}
        />
      )}
      {projectInfoImages[0] && (
        <ParallaxLayer offset={1.1} speed={1.8} className="sm:hidden">
          <CenterHorizontalFull>
            <Box className="w-[90vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[0].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
    </>
  );
}

export function PortfolioItemParallaxBodySmall({
  infoSections,
  projectInfoImages,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
}) {
  return (
    <>
      {" "}
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="hidden sm:block md:hidden"
          headingOffset={0.75}
          paragraphsOffset={0.8}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[0]}
        />
      )}
      {projectInfoImages[0] && (
        <ParallaxLayer
          offset={1}
          speed={1.9}
          className="hidden sm:block md:hidden"
        >
          <CenterHorizontalFull>
            <Box className="w-[90vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[0].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
    </>
  );
}

export function PortfolioItemParallaxBodyMedium({
  infoSections,
  projectInfoImages,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
}) {
  return (
    <>
      {" "}
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="hidden md:block lg:hidden"
          headingOffset={0.95}
          paragraphsOffset={0.999}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[0]}
        />
      )}
      {projectInfoImages[0] && (
        <ParallaxLayer
          offset={1}
          speed={1.9}
          className="hidden md:block lg:hidden"
        >
          <CenterHorizontalFull>
            <Box className="w-[65vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[0].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
    </>
  );
}

export function PortfolioItemParallaxBodyLarge({
  infoSections,
  projectInfoImages,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
}) {
  return (
    <>
      {" "}
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="hidden lg:block"
          headingOffset={0.95}
          paragraphsOffset={0.999}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[0]}
        />
      )}
      {projectInfoImages[0] && (
        <ParallaxLayer offset={1} speed={1.9} className="hidden lg:block">
          <CenterHorizontalFull>
            <Box className="w-[45vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[0].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
    </>
  );
}
