import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";
import FlexFull from "~/components/buildingBlocks/flexFull";
import AboutUsSection from "./aboutUsSection";
import { TeamFrames, TeamMembers } from "./data";

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
          <FlexFull className="h-fit md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-600/70 via-indigo-800/70 to-cyan-600/70">
            <AboutUsSection
              teamMember={TeamMembers[0]}
              teamFrame={TeamFrames[0]}
            />
          </FlexFull>
        </FlexFull>
        <FlexFull className="h-fit xl:h-screen py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
          <FlexFull className="h-fit md:w-95% lg:w-85% shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-600/70 via-indigo-600/70 to-teal-600/70">
            <AboutUsSection
              teamMember={TeamMembers[1]}
              teamFrame={TeamFrames[1]}
            />
          </FlexFull>
        </FlexFull>
      </AnimatedComponent>
    </StickyLabeledSection>
  );
}
