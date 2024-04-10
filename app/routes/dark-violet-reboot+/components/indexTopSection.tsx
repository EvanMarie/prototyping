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

export default function IndexTopSection() {
  const taglineStyles = "text-[2.5vh] md:text-[4vh] text-cyan-300 textShadow";
  const taglineContainerStyles = "justify-end";
  return (
    <LayoutContainer className="relative">
      <TopMenu />

      <VStack className="absolute w-fit right-[2vh] top-[11vh] md:top-[15vh] md:left-[8vh] lg:top-[15vh] lg:left-[13vh] xl:top-[16vh] xl:left-[16vh] xxl:left-[20vh] items-end">
        <FlexFull className={taglineContainerStyles}>
          <AnimatedComponentSpring animation="flipUp" delay={0.3}>
            <Text className={taglineStyles}>
              Systems Architechture and AI Integration
            </Text>
          </AnimatedComponentSpring>
        </FlexFull>
        <FlexFull className={taglineContainerStyles}>
          <AnimatedComponentSpring animation="flipUp" delay={0.6}>
            <Text className={taglineStyles}>UI/UX Frontend Development</Text>
          </AnimatedComponentSpring>
        </FlexFull>
      </VStack>

      <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[25vh] opacity-60">
        <UnblurImage
          rows={3}
          columns={3}
          imageUrl="/images/consciousnessFrontImage.png"
          dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
        />
      </Box>

      <Box className=" absolute w-fit right-[2vh] bottom-[18vh] md:top-[15vh] md:left-[8vh] lg:top-[15vh] lg:left-[13vh] xl:top-[16vh] xl:left-[16vh] xxl:left-[20vh]">
        <AnimatedText
          text="What can AI do for you?"
          animationType="inFromBottom"
          textClassName="text-[3vh] md:text-[4vh] text-fuchsia-300 textShadow"
          overallDuration={1.5}
          overallDelay={1.2}
        />
      </Box>
    </LayoutContainer>
  );
}
