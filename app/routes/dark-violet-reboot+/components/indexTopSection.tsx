import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import TopMenu from "./topMenu";
import Box from "~/components/buildingBlocks/box";
import AnimatedText from "~/components/specialty/animatedText";
import UnblurImage from "./unBlurImage";
import AnimatedComponentSpring from "~/components/animate-on-scroll/animateOnScrollSpring";
import Text from "~/components/buildingBlocks/text";
import VStack from "~/components/buildingBlocks/vStack";
import FlexFull from "~/components/buildingBlocks/flexFull";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function IndexTopSection() {
  const taglineStyles =
    "text-[2.1vh] sm:text-[3vh] md:text-[3vh] text-cyan-300 textShadow";
  const taglineContainerStyles = "justify-end lg:justify-start";
  return (
    <LayoutContainer className="relative">
      <TopMenu />

      <VStack className="absolute w-fit right-[2vh] top-[11vh] lg:top-[13vh] lg:left-[5vh] xl:left-[16vh] xxl:top-[16vh] xxl:left-[16vh] items-end">
        <FlexFull className={taglineContainerStyles}>
          <AnimatedComponentSpring animation="flipUp" delay={0.3}>
            <Text className={taglineStyles}>
              Systems Architechture and AI Integration
            </Text>
          </AnimatedComponentSpring>
        </FlexFull>
        <FlexFull className={taglineContainerStyles}>
          <AnimatedComponentSpring animation="flipUp" delay={0.6}>
            <Text className={taglineStyles}>UI / UX Frontend Development</Text>
          </AnimatedComponentSpring>
        </FlexFull>
      </VStack>

      <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[25vh] opacity-60 z-10">
        <UnblurImage
          rows={3}
          columns={3}
          imageUrl="/images/dark_violet/headLightBulbColored.png"
          dimensions="h-[96vw] w-[96vw] sm:h-[85vw] sm:w-[85vw] md:h-[66vh] md:w-[65vh]"
        />
      </Box>

      <FlexFull
        className="absolute left-0 top-0 w-screen h-screen justify-center xl:justify-end items-end pb-[10vh] sm:pb-[3vh] md:pb-[2vh] xl:pb-[10vh] pr-[5vh] xxl:pb-[16vh] xxl:pr-[16vh]"
        style={{ zIndex: 0 }}
      >
        <Box className="w-fit h-fit z-20">
          <AnimatedText
            text="What can AI do for you?"
            animationType="inFromBottom"
            textClassName="text-[3.5vh] sm:text-[4vh] md:text-[4.5vh] lg:text-[4vh] text-slate-900 textGlow"
            overallDuration={1.5}
            overallDelay={1.2}
          />
        </Box>
      </FlexFull>
    </LayoutContainer>
  );
}
