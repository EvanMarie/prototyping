import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";
import FlexFull from "~/components/buildingBlocks/flexFull";
import AboutUsSection from "./aboutUsSection";

export default function IndexAboutUsSection() {
  return (
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
        <FlexFull className="h-fit xl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
          <FlexFull className="h-fit min-h-[95vh] md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-700/70 via-indigo-700/70 to-teal-700/70">
            <AboutUsSection />
          </FlexFull>
        </FlexFull>
        <FlexFull className="h-fit xl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
          <FlexFull className="h-fit min-h-[95vh] md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-700/70 via-indigo-700/70 to-teal-700/70">
            <AboutUsSection />
          </FlexFull>
        </FlexFull>
      </AnimatedComponent>
    </StickyLabeledSection>
  );
}
