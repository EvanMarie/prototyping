import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import DarkVioletHero from "./components/heroMenu";
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
import Flex from "~/components/buildingBlocks/flex";
import ShiftingImages from "./components/shiftingImages";

function AnimatedFlipTestBox({ text, delay }: { text: string; delay: number }) {
  return (
    <AnimatedComponent
      animation="flipUp"
      className="h-fit"
      runOnce={true}
      delay={delay}
      duration={0.5}
    >
      <Center className="p-[2vh] h-[40vh] w-[35vh] shadowBroadLooser border-970-md bg-zinc-300 bg-gradient-to-br from-purple-700/70 via-indigo-700/70 to-teal-700/70">
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
  const genSectionStyles =
    "w-[75vw] h-[75vw] rounded-full shadowBroadLooser border-970-md";
  const genImages = Array.from(
    { length: 17 },
    (_, i) => `/images/consciousness_ai/genArt${i + 1}.png`
  );
  const labelStyles = "px-[1vh] py-[0.5vh] text-zinc-100 textShadow text-[3vh]";
  return (
    <TransitionFull className="overflow-y-auto text-zinc-100">
      <GlowCursor />
      <VStackFull className="h-fit">
        <LayoutContainer className="relative">
          <DarkVioletHero />
          <VStack
            align="items-start"
            className="text-teal-200 text-[3vh] absolute right-[2vh] top-[11vh] md:left-[10vh] md:top-[13vh] lg:top-[12vh] lg:left-[13vh] xl:left-[20vh] xxl:left-[20vh] xxl:top-[20vh] textShadow"
          >
            <Text>What can AI do for you?</Text>
          </VStack>
          <Box className="h-[50vh] w-[60vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[25vh] opacity-60">
            <UnblurImage
              rows={3}
              columns={3}
              imageUrl="/images/dark_violet/frontImage.png"
              dimensions="h-[50vh] w-[60vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
            />
          </Box>
        </LayoutContainer>
        <VStackFull className="h-fit">
          {/* ************************* PORTFOLIO ************************* */}
          <StickyLabeledSection
            labelText="portfolio"
            labelClassName={labelStyles}
            id="models"
          >
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

          {/* ************************* US  ************************* */}
          <StickyLabeledSection
            labelText="who we are"
            labelClassName={labelStyles}
            spacerHeight="h-[6vh]"
            id="generative"
          >
            <AnimatedComponent
              animation="fadeIn"
              className="w-full"
              runOnce={true}
              triggerPercent={0.3}
            >
              <FlexFull className="h-fitxl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
                <FlexFull className="h-fit md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-zinc-900 bg-gradient-to-br from-purple-700/70 via-indigo-700/70 to-teal-700/70">
                  <FlexFull className="flex-col xl:flex-row items-center p-[2vh] gap-[2vh]">
                    <Flex className={genSectionStyles}>
                      <ShiftingImages imageArray={genImages} shape="circle" />
                    </Flex>
                    <Flex className={genSectionStyles}></Flex>
                  </FlexFull>
                </FlexFull>
              </FlexFull>
            </AnimatedComponent>
          </StickyLabeledSection>

          {/* ************************* CHAT ************************* */}
          <StickyLabeledSection
            labelText="chat"
            labelClassName={labelStyles}
            spacerHeight="h-[14vh]"
            id="ethics"
          >
            <FlexFull className="h-screen ">Section One - Page One</FlexFull>
            <FlexFull className="h-screen">Section One - Page Two</FlexFull>
          </StickyLabeledSection>

          {/* ************************* CONTACT ************************* */}
          <StickyLabeledSection
            labelText="contact"
            labelClassName={labelStyles}
            spacerHeight="h-[5vh]"
            id="contact"
          >
            <FlexFull className="h-screen">Page One</FlexFull>
          </StickyLabeledSection>
        </VStackFull>
      </VStackFull>
    </TransitionFull>
  );
}
