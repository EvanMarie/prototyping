import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import TopMenu from "./topMenu";
import Box from "~/components/buildingBlocks/box";
import AnimatedText from "~/components/specialty/animatedText";
import UnblurImage from "./unBlurImage";

export default function IndexTopSection() {
  return (
    <LayoutContainer className="relative">
      <TopMenu />

      <Box className=" absolute w-fit right-[2vh] top-[13vh] md:top-[15vh] md:left-[8vh] lg:top-[15vh] lg:left-[13vh] xl:top-[16vh] xl:left-[16vh] xxl:left-[20vh]">
        <AnimatedText
          text="What can AI do for you?"
          animationType="fadeIn"
          textClassName="text-[3vh] md:text-[4vh] text-cyan-300 textShadow"
          overallDuration={1.5}
        />
      </Box>

      <Box className="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh] absolute top-[25vh] opacity-60">
        <UnblurImage
          rows={3}
          columns={3}
          imageUrl="/images/consciousnessFrontImage.png"
          dimensions="h-[96vw] w-[96vw] sm:h-[90vw] sm:w-[90vw] md:h-[66vh] md:w-[65vh]"
        />
      </Box>
    </LayoutContainer>
  );
}
