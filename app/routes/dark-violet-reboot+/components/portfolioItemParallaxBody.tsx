import { ParallaxLayer } from "@react-spring/parallax";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import PortfolioParallaxSection from "./portfolioInfoParallaxSection";
import {
  PortfolioImage,
  PortfolioItem,
  PortfolioItemInfoSection,
} from "./data";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import RadialScrollProgress from "./radialProgress";
import RadialProgressiveImage from "./radialProgressImage";

export function PortfolioItemParallaxBodyMobile({
  infoSections,
  projectInfoImages,
  project,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
  project: PortfolioItem;
}) {
  return (
    <>
      {/* IMAGES */}
      <ParallaxLayer offset={0} speed={-0.15} className="sm:hidden">
        <CenterHorizontalFull className="pt-[1.5vh] ">
          <Flex className="h-fit w-[93vw] max-h-[85vh] xl:w-[85vw]">
            <RadialScrollProgress title={project?.title}>
              {project?.projectImages.map((image, index) => (
                <Flex
                  key={index}
                  className="w-fit flex-shrink-0 snap-center snap-always "
                >
                  <RadialProgressiveImage
                    image={image.src}
                    title={image.title ? image.title : ""}
                  />
                </Flex>
              ))}
            </RadialScrollProgress>
          </Flex>
        </CenterHorizontalFull>
      </ParallaxLayer>
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="sm:hidden"
          headingOffset={0.65}
          paragraphsOffset={0.7}
          headingSpeed={-0.05}
          paragraphsSpeed={-0.06}
          projectInfoSection={infoSections[0]}
        />
      )}
      {projectInfoImages[0] && (
        <ParallaxLayer offset={1} speed={1.5} className="sm:hidden">
          <CenterHorizontalFull>
            <Box className="w-[85vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[0].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[1] && (
        <PortfolioParallaxSection
          className="sm:hidden"
          headingOffset={1.55}
          paragraphsOffset={1.6}
          headingSpeed={0.9}
          paragraphsSpeed={0.8}
          projectInfoSection={infoSections[1]}
        />
      )}
      {projectInfoImages[1] && (
        <ParallaxLayer offset={1.9} speed={0.3} className="sm:hidden">
          <CenterHorizontalFull>
            <Box className="w-[90vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[1].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[2] && (
        <PortfolioParallaxSection
          className="sm:hidden"
          headingOffset={2.1}
          paragraphsOffset={2.2}
          headingSpeed={0.25}
          paragraphsSpeed={0.2}
          // headingSpeed={0.4}
          // paragraphsSpeed={0.25}
          projectInfoSection={infoSections[2]}
        />
      )}
      {infoSections[3] && (
        <PortfolioParallaxSection
          className="sm:hidden"
          headingOffset={2.5}
          paragraphsOffset={2.6}
          headingSpeed={0}
          paragraphsSpeed={-0.05}
          // headingSpeed={-0.3}
          // paragraphsSpeed={-0.35}
          projectInfoSection={infoSections[3]}
        />
      )}
    </>
  );
}

export function PortfolioItemParallaxBodySmall({
  infoSections,
  projectInfoImages,
  project,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
  project: PortfolioItem;
}) {
  return (
    <>
      {/* IMAGES  */}
      <ParallaxLayer
        offset={0}
        speed={0.4}
        className="hidden sm:block md:hidden"
      >
        <CenterHorizontalFull className="pt-[1.5vh] ">
          <Flex className="h-fit w-[93vw] max-h-[85vh] xl:w-[85vw]">
            <RadialScrollProgress title={project?.title}>
              {project?.projectImages.map((image, index) => (
                <Flex
                  key={index}
                  className="w-fit flex-shrink-0 snap-center snap-always "
                >
                  <RadialProgressiveImage
                    image={image.src}
                    title={image.title ? image.title : ""}
                  />
                </Flex>
              ))}
            </RadialScrollProgress>
          </Flex>
        </CenterHorizontalFull>
      </ParallaxLayer>
      {infoSections[0] && (
        <PortfolioParallaxSection
          className="hidden sm:block md:hidden"
          headingOffset={0.76}
          paragraphsOffset={0.8}
          headingSpeed={0.5}
          paragraphsSpeed={0.4}
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
      {infoSections[1] && (
        <PortfolioParallaxSection
          className="hidden sm:block md:hidden"
          headingOffset={1.95}
          paragraphsOffset={1.99}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[1]}
        />
      )}
      {projectInfoImages[1] && (
        <ParallaxLayer
          offset={2}
          speed={1.5}
          className="hidden sm:block md:hidden"
        >
          <CenterHorizontalFull>
            <Box className="w-[90vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[1].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[2] && (
        <PortfolioParallaxSection
          className="hidden sm:block md:hidden"
          headingOffset={2.7}
          paragraphsOffset={2.8}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[2]}
        />
      )}
      {infoSections[3] && (
        <PortfolioParallaxSection
          className="hidden sm:block md:hidden"
          headingOffset={3}
          paragraphsOffset={3.1}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[3]}
        />
      )}
    </>
  );
}

export function PortfolioItemParallaxBodyMedium({
  infoSections,
  projectInfoImages,
  project,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
  project: PortfolioItem;
}) {
  return (
    <>
      {/* IMAGES  */}
      <ParallaxLayer
        offset={0}
        speed={0.4}
        className="hidden md:block lg:hidden"
      >
        <CenterHorizontalFull className="pt-[1.5vh] ">
          <Flex className="h-fit w-[93vw] max-h-[85vh] xl:w-[85vw]">
            <RadialScrollProgress title={project?.title}>
              {project?.projectImages.map((image, index) => (
                <Flex
                  key={index}
                  className="w-fit flex-shrink-0 snap-center snap-always "
                >
                  <RadialProgressiveImage
                    image={image.src}
                    title={image.title ? image.title : ""}
                  />
                </Flex>
              ))}
            </RadialScrollProgress>
          </Flex>
        </CenterHorizontalFull>
      </ParallaxLayer>
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
      {infoSections[1] && (
        <PortfolioParallaxSection
          className="hidden md:block lg:hidden"
          headingOffset={1.9}
          paragraphsOffset={1.95}
          headingSpeed={0.8}
          paragraphsSpeed={0.7}
          projectInfoSection={infoSections[1]}
        />
      )}
      {projectInfoImages[1] && (
        <ParallaxLayer
          offset={2}
          speed={2.5}
          className="hidden md:block lg:hidden"
        >
          <CenterHorizontalFull>
            <Box className="w-[65vw] border-970-md shadowBroadLoose">
              <Image src={projectInfoImages[1].src} alt="project image" />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[2] && (
        <PortfolioParallaxSection
          className="hidden md:block lg:hidden"
          headingOffset={2.9}
          paragraphsOffset={2.99}
          headingSpeed={0.8}
          paragraphsSpeed={0.7}
          projectInfoSection={infoSections[2]}
        />
      )}
      {infoSections[3] && (
        <PortfolioParallaxSection
          className="hidden md:block lg:hidden"
          headingOffset={3}
          paragraphsOffset={3.1}
          headingSpeed={0.8}
          paragraphsSpeed={0.7}
          projectInfoSection={infoSections[3]}
        />
      )}
    </>
  );
}

export function PortfolioItemParallaxBodyLarge({
  infoSections,
  projectInfoImages,
  project,
}: {
  infoSections: PortfolioItemInfoSection[];
  projectInfoImages: PortfolioImage[];
  project: PortfolioItem;
}) {
  return (
    <>
      {/* IMAGES  */}
      <ParallaxLayer offset={0} speed={0.4} className="hidden lg:block">
        <CenterHorizontalFull className="pt-[1.5vh] ">
          <Flex className="h-fit w-[93vw] max-h-[85vh] xl:w-[85vw]">
            <RadialScrollProgress title={project?.title}>
              {project?.projectImages.map((image, index) => (
                <Flex
                  key={index}
                  className="w-fit flex-shrink-0 snap-center snap-always "
                >
                  <RadialProgressiveImage
                    image={image.src}
                    title={image.title ? image.title : ""}
                  />
                </Flex>
              ))}
            </RadialScrollProgress>
          </Flex>
        </CenterHorizontalFull>
      </ParallaxLayer>
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
            <Box className="max-w-[60vw] max-h-[65vh] border-970-md shadowBroadLoose">
              <Image
                src={projectInfoImages[0].src}
                alt="project image"
                className="max-w-[60vw] max-h-[65vh] "
              />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[1] && (
        <PortfolioParallaxSection
          className="hidden lg:block"
          headingOffset={1.9}
          paragraphsOffset={1.95}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[1]}
        />
      )}
      {projectInfoImages[1] && (
        <ParallaxLayer offset={2} speed={2.5} className="hidden lg:block">
          <CenterHorizontalFull>
            <Box className="max-w-[60vw] max-h-[65vh] border-970-md shadowBroadLoose">
              <Image
                src={projectInfoImages[1].src}
                alt="project image"
                className="nax-w-[60vw] max-h-[65vh] "
              />
            </Box>
          </CenterHorizontalFull>
        </ParallaxLayer>
      )}
      {infoSections[2] && (
        <PortfolioParallaxSection
          className="hidden lg:block"
          headingOffset={2.9}
          paragraphsOffset={2.99}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[2]}
        />
      )}
      {infoSections[3] && (
        <PortfolioParallaxSection
          className="hidden lg:block"
          headingOffset={3}
          paragraphsOffset={3.1}
          headingSpeed={0.6}
          paragraphsSpeed={0.5}
          projectInfoSection={infoSections[3]}
        />
      )}
    </>
  );
}
