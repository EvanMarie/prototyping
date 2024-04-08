import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import TopMenu from "./components/topMenu";
import Box from "~/components/buildingBlocks/box";
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
import AnimatedText from "~/components/specialty/animatedText";
import ShiftingComponents from "./components/shiftingComponents";
import { PortfolioItem, Projects } from "./components/data";
import ShiftingPortfolioCard from "./components/shiftingPortfolioCard";
import IndexPortfolioSection from "./components/indexPortfolioSection";

function GetRandomDelay() {
  return Math.random() * (0.6 - 0.1) + 0.1;
}

export const labelStyles =
  "px-[1vh] py-[0.5vh] text-slate-100 textShadow text-[3vh]";

const arrayOf6 = Array.from({ length: 6 }, (_, i) => i + 1);

export default function ConscioussnessIndex() {
  const genSectionStyles =
    "w-[75vw] h-[75vw] rounded-full shadowBroadLooser border-970-md";

  return (
    <TransitionFull className="overflow-y-auto text-slate-100">
      <GlowCursor />
      <VStackFull className="h-fit">
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
        <VStackFull className="h-fit">
          {/* ************************* PORTFOLIO ************************* */}
          <IndexPortfolioSection />
          {/* ************************* US  ************************* */}
          <StickyLabeledSection
            labelText="about us"
            labelClassName={labelStyles}
            spacerHeight="h-[6vh]"
            id="us"
          >
            <AnimatedComponent
              animation="fadeIn"
              className="w-full"
              runOnce={true}
              triggerPercent={0.3}
            >
              <FlexFull className="h-fitxl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
                <FlexFull className="h-fit md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-700/70 via-indigo-700/70 to-teal-700/70">
                  this
                </FlexFull>
              </FlexFull>
            </AnimatedComponent>
          </StickyLabeledSection>

          {/* ************************* BLOG  ************************* */}
          <StickyLabeledSection
            labelText="blog"
            labelClassName={labelStyles}
            spacerHeight="h-[6vh]"
            id="blog"
          >
            <AnimatedComponent
              animation="zoomIn"
              className="w-full h-screen"
              runOnce={true}
              triggerPercent={0.3}
            >
              <CenterFull className="h-fit xl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
                {" "}
                <Flex className="w-[50vh] h-[50vh]">
                  <ShiftingComponents
                    componentArray={[
                      <Center className="bg-violet-400 text-slate-100 h-[40vh] w-[40vh]">
                        One
                      </Center>,
                      <Center className="bg-fuchsia-400 text-slate-100 h-[40vh] w-[40vh]">
                        Two
                      </Center>,
                      <Center className="bg-cyan-400 text-slate-100 h-[40vh] w-[40vh]">
                        Three
                      </Center>,
                    ]}
                  />
                </Flex>
              </CenterFull>
            </AnimatedComponent>
          </StickyLabeledSection>

          {/* ************************* CHAT ************************* */}
          <StickyLabeledSection
            labelText="chat"
            labelClassName={labelStyles}
            spacerHeight="h-[14vh]"
            id="chat"
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
