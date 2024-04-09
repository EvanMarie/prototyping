import FlexFull from "~/components/buildingBlocks/flexFull";
import {
  PortfolioImage,
  PortfolioItem,
  PortfolioItemInfoSection,
  Projects,
} from "./data";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import Box from "~/components/buildingBlocks/box";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import { CloseIcon } from "styles";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import { useNavigate, useParams } from "@remix-run/react";
import useEscapeKey from "~/utils/useEscapeKey";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";

import RadialScrollProgress from "./radialProgress";
import Image from "~/components/buildingBlocks/image";
import RadialProgressiveImage from "./radialProgressImage";
import PortfolioParallaxSection from "./portfolioInfoParallaxSection";
import {
  PortfolioItemParallaxBodyLarge,
  PortfolioItemParallaxBodyMedium,
  PortfolioItemParallaxBodyMobile,
  PortfolioItemParallaxBodySmall,
} from "./portfolioItemParallaxBody";
import { useScroll, motion } from "framer-motion";

export default function PortfolioItemParallax() {
  // Your existing setup...
  const { title } = useParams();
  const project = Projects.find((project) => project.title === title);
  const navigate = useNavigate();
  const parallax = useRef<IParallax>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Access the DOM node of the Parallax container
    const parallaxContainer = parallax.current?.container.current;

    if (parallaxContainer) {
      const handleScroll = () => {
        const maxScroll =
          parallaxContainer.scrollHeight - parallaxContainer.clientHeight;
        const progress = parallaxContainer.scrollTop / maxScroll;
        setScrollProgress(progress); // Update the scroll progress state
      };

      // Add the scroll event listener
      parallaxContainer.addEventListener("scroll", handleScroll);

      return () => {
        // Remove the scroll event listener on cleanup
        parallaxContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const numSections = project?.projectInfo.length || 0;

  return (
    <FlexFull className="bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/aurora.png?quality=60')] bg-center bg-cover">
      <VStackFull className="relative h-[95vh] bg-gradient-to-br from-violet-900/90 via-indigo-900/90 to-fuchsia-900/90 p-[0.5vh] insetShadowXl text-slate-100 pt-[7vh] md:pt-[8.5vh] border-900-md">
        {/* HEADER  */}
        <VStackFull className="absolute top-0 left-0 h-[7vh] md:h-[8.5vh]  bg-slate-900/60 border-b-970-md">
          <HStackFull className="justify-between px-[1vh] py-[0.5vh] items-center">
            <VStack
              className="w-93% h-full justify-evenly"
              align="items-start"
              gap="gap-[0px]"
            >
              <Text className="text-cyan-300 text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter">
                {project?.title}
              </Text>
              <Text className="text-[1.3vh] leading-[1.5vh] md:text-[1.7vh] md:leading-[2vh] leading-tighter">
                {project?.description}
              </Text>
            </VStack>
            <Flex className="h-full w-7% justify-end">
              <NavIconButton
                icon={CloseIcon}
                to="/dark-violet-reboot/#portfolio"
              />
            </Flex>
          </HStackFull>
          <motion.div
            className="h-[0.8vh] rounded-l-none w-full bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400  absolute bottom-0 left-0"
            style={{ scaleX: scrollProgress, transformOrigin: "left" }}
          />
        </VStackFull>
        {/* FOOTER  */}
        <CenterHorizontalFull className="absolute bottom-0 left-0 h-[4vh] p-[1vh] items-center bg-slate-900/60 border-t-970-md">
          <Box className="z-20">
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
          <Parallax
            ref={parallax}
            pages={numSections === 3 ? 3.5 : 4}
            className="hide-scrollbar max-h-[84vh] md:max-h-[82vh]"
          >
            {/* IMAGES  */}
            <ParallaxLayer offset={0} speed={0.7}>
              <CenterHorizontalFull className="pt-[1.5vh]">
                <Flex className="h-fit w-[93vw] max-h-[85vh]">
                  <RadialScrollProgress title={project?.title}>
                    {project?.projectImages.map((image, index) => (
                      <Flex
                        key={index}
                        className="w-fit flex-shrink-0 snap-center snap-always "
                      >
                        <RadialProgressiveImage
                          image={image.src}
                          title={image.title}
                        />
                      </Flex>
                    ))}
                  </RadialScrollProgress>
                </Flex>
              </CenterHorizontalFull>
            </ParallaxLayer>
            {/* PARAGRAPHS  */}
            <PortfolioItemParallaxBodyMobile
              infoSections={project?.projectInfo as PortfolioItemInfoSection[]}
              projectInfoImages={project?.projectInfoImages as PortfolioImage[]}
            />
            <PortfolioItemParallaxBodySmall
              infoSections={project?.projectInfo as PortfolioItemInfoSection[]}
              projectInfoImages={project?.projectInfoImages as PortfolioImage[]}
            />
            <PortfolioItemParallaxBodyMedium
              infoSections={project?.projectInfo as PortfolioItemInfoSection[]}
              projectInfoImages={project?.projectInfoImages as PortfolioImage[]}
            />
            <PortfolioItemParallaxBodyLarge
              infoSections={project?.projectInfo as PortfolioItemInfoSection[]}
              projectInfoImages={project?.projectInfoImages as PortfolioImage[]}
            />
          </Parallax>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
