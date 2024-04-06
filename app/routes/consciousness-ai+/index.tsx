import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import ConsciousnessHeroMenu from "./components/heroMenu";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import GlowCursor from "./components/glowCursor";
import UnblurImage from "./components/unBlurImage";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import StickyLabeledSection from "./components/stickyLabeledSection";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import Wrap from "~/components/buildingBlocks/wrap";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";

function AnimatedFlipTestBox({ text, delay }: { text: string; delay: number }) {
  return (
    <AnimatedComponent
      animation="flipUp"
      className="h-fit"
      runOnce={true}
      delay={delay}
      duration={0.5}
    >
      <Center className="p-[2vh] h-[40vh] w-[35vh] bg-purple-600/50">
        {text}
      </Center>
    </AnimatedComponent>
  );
}

// get a random decimal value between 0.1 and 1.2
function GetRandomDelay() {
  return Math.random() * (0.6 - 0.1) + 0.1;
}

export default function ConscioussnessIndex() {
  const labelStyles = "px-[1vh] py-[0.5vh] text-zinc-100 textShadow text-[3vh]";
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
          </VStack>
          <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[25vh] opacity-60">
            {/* <Image src="/images/consciousnessFrontImage.png" alt="consciousness" /> */}
            <UnblurImage
              rows={3}
              columns={3}
              imageUrl="/images/consciousnessFrontImage.png"
              dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
            />
          </Box>
        </LayoutContainer>
        <VStackFull className="h-fit">
          {/* ************************* MODELS ************************* */}
          <StickyLabeledSection labelText="Models" labelClassName={labelStyles}>
            <FlexFull className="h-fit">
              <Wrap className="w-full justify-center md:justify-evenly gap-[6vh] py-[2vh]">
                <AnimatedFlipTestBox text="Card One" delay={GetRandomDelay()} />
                <AnimatedFlipTestBox text="Card Two" delay={GetRandomDelay()} />
                <AnimatedFlipTestBox
                  text="Card Three"
                  delay={GetRandomDelay()}
                />
                <AnimatedFlipTestBox
                  text="Card Four"
                  delay={GetRandomDelay()}
                />
                <AnimatedFlipTestBox
                  text="Card Five"
                  delay={GetRandomDelay()}
                />
                <AnimatedFlipTestBox text="Card Six" delay={GetRandomDelay()} />
              </Wrap>
            </FlexFull>
          </StickyLabeledSection>

          {/* ************************* Generative  ************************* */}
          <StickyLabeledSection
            labelText="Generative AI"
            labelClassName={labelStyles}
            spacerHeight="h-[6vh]"
          >
            <AnimatedComponent
              animation="fadeIn"
              className="w-full"
              runOnce={true}
            >
              <FlexFull className="h-screen py-[2vh] px-[1vh] sm:px-[2vh]">
                <CenterFull className="h-full bg-teal-600/30">
                  Section Two Page One
                </CenterFull>
              </FlexFull>
            </AnimatedComponent>
          </StickyLabeledSection>
          {/* ************************* ETHICS ************************* */}
          <StickyLabeledSection
            labelText="Ethics"
            labelClassName={labelStyles}
            spacerHeight="h-[14vh]"
          >
            <FlexFull className="h-screen ">Section One - Page One</FlexFull>
            <FlexFull className="h-screen">Section One - Page Two</FlexFull>
          </StickyLabeledSection>
          {/* ************************* CONTACT ************************* */}
          <StickyLabeledSection
            labelText="Contact"
            labelClassName={labelStyles}
            spacerHeight="h-[5vh]"
          >
            <FlexFull className="h-screen">Page One</FlexFull>
          </StickyLabeledSection>
        </VStackFull>
      </VStackFull>
    </TransitionFull>
  );
}
