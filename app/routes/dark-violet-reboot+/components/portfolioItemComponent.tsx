import FlexFull from "~/components/buildingBlocks/flexFull";
import { Projects } from "./data";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import Box from "~/components/buildingBlocks/box";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import { CloseIcon } from "styles";
import { useRef } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import { useNavigate, useParams } from "@remix-run/react";
import useEscapeKey from "~/utils/useEscapeKey";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import { useScroll, motion } from "framer-motion";
import CenterFull from "~/components/buildingBlocks/centerFull";
import FlowerOfLifeOnScroll from "./flowerOfLifeOnScroll";
import RadialScrollProgress from "./radialProgress";
import RadialProgressiveImage from "./radialProgressImage";
import PortfolioTextSection from "./portfolioTextSection";
import Image from "~/components/buildingBlocks/image";

export default function PortfolioItemComponent() {
  // Your existing setup...
  const { title } = useParams();
  const project = Projects.find((project) => project.title === title);
  const navigate = useNavigate();
  const scrollYRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollYRef });
  useEscapeKey(() => navigate("/dark-violet-reboot/#portfolio"));
  const infoSections = project?.projectInfo ? project.projectInfo : [];
  const projectInfoImages = project?.projectInfoImages
    ? project.projectInfoImages
    : [];

  return (
    <FlexFull className="bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/aurora.png?quality=60')] bg-center bg-cover">
      <VStackFull className="relative h-[95vh] bg-gradient-to-br from-violet-900/90 via-indigo-900/90 to-fuchsia-900/90 p-[0.5vh] insetShadowXl text-slate-100 pt-[7vh] md:pt-[8.5vh] border-900-md">
        {/* HEADER  */}
        <VStackFull className="absolute top-0 left-0 h-[7vh] md:h-[8.5vh]  bg-slate-900/60 border-b-970-md">
          <HStackFull className="justify-between px-[1vh] py-[0.5vh] items-center">
            <VStack
              className="w-93% h-full justify-evenly"
              align="items-start"
              gap="gap-[0px] sm:gap-[1vh]"
            >
              <Text className="text-cyan-300 text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter">
                {project?.title}
              </Text>
              <Text className="text-[1.3vh] leading-[1.5vh] md:text-[1.7vh] md:leading-[2.8vh] leading-tighter">
                {project?.description}
              </Text>
            </VStack>
            <Flex className="h-full w-7% justify-end z-10">
              <NavIconButton
                icon={CloseIcon}
                to="/dark-violet-reboot/#portfolio"
              />
            </Flex>
          </HStackFull>
          <motion.div
            className="h-[0.8vh] rounded-l-none w-full bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400  absolute bottom-0 left-0"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </VStackFull>

        {/* FOOTER  */}
        <CenterHorizontalFull className="absolute bottom-0 left-0 h-[4vh] p-[1vh] items-center bg-slate-900/60 border-t-970-md">
          <Box className="z-10">
            <NavLinkButton
              iconLeft={CloseIcon}
              to="/dark-violet-reboot/#portfolio"
              buttonText="close"
              type="smallNormal"
            />
          </Box>
        </CenterHorizontalFull>
        {/* CONTENT  */}

        <FlexFull>
          <CenterFull className="absolute top-0 right-0 left-0 pt-[4vh]">
            <FlowerOfLifeOnScroll />
          </CenterFull>
          <FlexFull
            ref={scrollYRef}
            className="hide-scrollbar max-h-[84vh] md:max-h-[82vh] overflow-y-auto flex-col z-10"
          >
            {/* PARAGRAPHS  */}
            <VStackFull
              className="h-fit py-[1vh]"
              gap="gap-[1.5vh] sm:gap-[2vh]"
            >
              {/* IMAGES */}
              <CenterHorizontalFull className="pt-[1vh] ">
                <Flex className="h-fit w-[93vw] max-h-[84vh] xl:w-[87vw]">
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
              {infoSections[0] && (
                <PortfolioTextSection projectInfoSection={infoSections[0]} />
              )}
              {projectInfoImages[0] && (
                <CenterHorizontalFull className="max-h-[84vh]">
                  <Flex
                    className="border-970-md shadowBroadLoose"
                    style={{ maxWidth: "65vw", maxHeight: "65vh" }}
                  >
                    <Image
                      src={projectInfoImages[0].src}
                      alt="project image"
                      className="w-full h-full"
                      style={{ maxWidth: "65vw", maxHeight: "65vh" }}
                    />
                  </Flex>
                </CenterHorizontalFull>
              )}
              {infoSections[1] && (
                <PortfolioTextSection projectInfoSection={infoSections[1]} />
              )}
              {projectInfoImages[1] && (
                <CenterHorizontalFull className="max-h-[84vh]">
                  <Flex
                    className="border-970-md shadowBroadLoose"
                    style={{ maxWidth: "65vw", maxHeight: "65vh" }}
                  >
                    <Image
                      src={projectInfoImages[1].src}
                      alt="project image"
                      className="w-full h-full"
                      style={{ maxWidth: "65vw", maxHeight: "65vh" }}
                    />
                  </Flex>
                </CenterHorizontalFull>
              )}
              {infoSections[2] && (
                <PortfolioTextSection projectInfoSection={infoSections[2]} />
              )}
              {infoSections[3] && (
                <PortfolioTextSection projectInfoSection={infoSections[3]} />
              )}
            </VStackFull>
          </FlexFull>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
