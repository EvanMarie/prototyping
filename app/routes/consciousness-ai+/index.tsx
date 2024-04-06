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
import VStackFull from "~/components/buildingBlocks/vStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import StickyLabeledSection from "./components/stickyLabeledSection";

export default function ConscioussnessIndex() {
  const labelStyles =
    "bg-purple-300/40 px-[1vh] py-[0.5vh] text-zinc-100 textShadow";
  return (
    <TransitionFull className="overflow-y-auto text-zinc-100">
      <GlowCursor />
      <VStackFull className="h-fit">
        <LayoutContainer className="relative">
          <ConsciousnessHeroMenu />
          <VStack
            align="items-start"
            className="text-teal-300 text-[3vh] absolute right-[2vh] top-[11vh] md:left-[10vh] md:top-[13vh] lg:top-[12vh] lg:left-[13vh] xl:left-[20vh] xxl:left-[20vh] xxl:top-[20vh] textShadow"
          >
            <Text>What can you do with AI?</Text>
            {/* <Text>What can you</Text>
            <Text>do with AI?</Text> */}
          </VStack>
          <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[20vh] md:top-[25vh] opacity-60">
            {/* <Image src="/images/consciousnessFrontImage.png" alt="consciousness" /> */}
            <UnblurImage
              imageUrl="/images/consciousnessFrontImage.png"
              dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
            />
            {/* <FlipCardImage
              mainImageUrl="/images/consciousnessFrontImage.png"
              dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
            /> */}
          </Box>
        </LayoutContainer>
        <VStackFull>
          {/* ************************* MODELS ************************* */}
          <StickyLabeledSection
            labelText="Models"
            labelClassName={labelStyles}
            sectionPadding="pb-[2vh]"
          >
            <FlexFull className="h-screen">Section One - Page One</FlexFull>
          </StickyLabeledSection>

          {/* ************************* Generative  ************************* */}
          <StickyLabeledSection
            labelText="Generative AI"
            labelClassName={labelStyles}
          >
            <FlexFull className="h-screen">Section Two Page One</FlexFull>
            <FlexFull className="h-screen">Section Two Page Two</FlexFull>
          </StickyLabeledSection>
          {/* ************************* ETHICS ************************* */}
          <StickyLabeledSection
            labelText="Ethics"
            labelClassName={labelStyles}
            sectionPadding="pt-[4vh]"
          >
            <FlexFull className="h-screen">Section One - Page One</FlexFull>
            <FlexFull className="h-screen">Section One - Page Two</FlexFull>
          </StickyLabeledSection>
          {/* ************************* CONTACT ************************* */}
          <StickyLabeledSection
            labelText="Contact"
            labelClassName={labelStyles}
            sectionPadding="pt-[2vh]"
          >
            <FlexFull className="h-screen">Page One</FlexFull>
          </StickyLabeledSection>
        </VStackFull>
      </VStackFull>
    </TransitionFull>
  );
}
