import { NavLink } from "@remix-run/react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ConsciousnessHeroMenu from "./components/heroMenu";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import GlowCursor from "./components/glowCursor";
import UnblurImage from "./components/unBlurImage";
import FlipCardImage from "./components/flipCardImage";

export default function ConscioussnessIndex() {
  return (
    <TransitionFull>
      <GlowCursor />
      <ConsciousnessHeroMenu />
      <VStack
        align="items-start"
        className="text-teal-300 text-[3vh] absolute left-[10vh] top-[9vh] sm:left-[5vh] md:left-[6vh] md:top-[13vh] lg:top-[12vh] lg:left-[13vh] xl:left-[20vh] xxl:left-[20vh] xxl:top-[20vh] textShadow"
      >
        <Text>What can you do with AI?</Text>
        {/* <Text>What can you</Text>
        <Text>do with AI?</Text> */}
      </VStack>
      <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[60vh] md:w-[60vh] absolute top-[20vh] opacity-60">
        {/* <Image src="/images/consciousnessFrontImage.png" alt="consciousness" /> */}
        <UnblurImage
          imageUrl="/images/consciousnessFrontImage.png"
          dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[60vh] md:w-[60vh]"
        />
      </Box>
    </TransitionFull>
  );
}
