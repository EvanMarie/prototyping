import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import ShiftingComponents from "./shiftingComponents";
import Center from "~/components/buildingBlocks/center";

export default function IndexBlogSection() {
  return (
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
  );
}
