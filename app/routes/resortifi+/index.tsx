import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { Path, resortifi } from "./components/logoSVG";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Box from "~/components/buildingBlocks/box";
import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "~/components/buildingBlocks/image";
import Flex from "~/components/buildingBlocks/flex";
import Center from "~/components/buildingBlocks/center";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import { motion } from "framer-motion";
import OpeningResortifi from "./components/openingLogo";

export const bgGradient =
  "bg-gradient-to-b from-yellow-400/70 via-orange-300/90 to-orange-400/70";
const images = [
  "/images/resortifi/beach_family.png",
  "/images/resortifi/boat_house.png",
  "/images/resortifi/chalet_inside.png",
  "/images/resortifi/fireside_chalet.png",
  "/images/resortifi/pool_party.png",
  "/images/resortifi/urban_apartment.png",
];
export default function Resortifi() {
  const parallax = useRef(null);

  function ImageComponent({
    offset,
    speed,
    index,
  }: {
    offset: number;
    speed: number;
    index: number;
  }) {
    return (
      <ParallaxLayer offset={offset} speed={speed}>
        <Box className="h-[40vh] w-[40vh] shadowBroadNormal border-970-md">
          <Image src={images[index]} alt="ex image" />
        </Box>
      </ParallaxLayer>
    );
  }

  function ButtonComponent({ text }: { text: string }) {
    return (
      <motion.div
        whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
        whileTap={{ scale: 0.9, rotate: -3, transition: { duration: 0.4 } }}
      >
        <Center className="w-[20vh] h-[4vh] bg-cyan-300/80 border-[0.1vh] border-cyan-900 hover:bg-cyan-400 transition-400 rounded-md shadowBroadNormal hover:cursor-pointer">
          <Center className="text-[2.1vh]">{text}</Center>
        </Center>
      </motion.div>
    );
  }

  return (
    <TransitionFull
      className={`overflow-y-auto rounded-none relative ${bgGradient} pt-[6vh]`}
    >
      <OpeningResortifi />
      <TransitionFull delay={7} duration={0.7}>
        <FlexFull className="w-screen absolute top-0 right-0 left-0 h-[6vh] bg-amber-500/60 rounded-none shadowBroadLoose px-[1vh]">
          <Flex className="h-[6vh] text-[5vh] items-center w-fit flex-shrink-0">
            resortifi
          </Flex>
          <HStackFull className="h-full items-center justify-evenly">
            <ButtonComponent text="Find your resort" />
            <ButtonComponent text="List your resort" />
          </HStackFull>
        </FlexFull>
        <VStackFull
          className="w-screen h-[94vh] pt-[1.5vh]"
          align="items-start"
        >
          <FlexFull className="h-[42vh] insetShadowXl bg-orange-900/50 rounded-none">
            <Parallax
              ref={parallax}
              pages={2.9}
              horizontal
              className="h-[42vh] overflow-y-hidden px-[2vh] pt-[1vh]"
            >
              <ImageComponent offset={0.01} speed={1} index={0} />
              <ImageComponent offset={0.25} speed={0.4} index={1} />
              <ImageComponent offset={0.5} speed={0.1} index={2} />
              <ImageComponent offset={0.75} speed={0} index={3} />
              <ImageComponent offset={1} speed={0} index={4} />
              <ImageComponent offset={1.25} speed={0} index={5} />
              <ImageComponent offset={1.5} speed={0} index={0} />
              <ImageComponent offset={1.75} speed={-0.03} index={1} />
              <ImageComponent offset={2} speed={-0.025} index={2} />
              <ImageComponent offset={2.3} speed={-0.05} index={3} />
              <ImageComponent offset={2.6} speed={-0.05} index={4} />
            </Parallax>
          </FlexFull>
        </VStackFull>
      </TransitionFull>
    </TransitionFull>
  );
}
