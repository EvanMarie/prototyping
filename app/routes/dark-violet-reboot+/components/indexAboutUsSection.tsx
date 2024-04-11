import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import StickyLabeledSection from "./stickyLabeledSection";
import FlexFull from "~/components/buildingBlocks/flexFull";
import AboutUsSection from "./aboutUsSection";
import { TeamFrames, TeamMembers } from "./data";
import { stickyLabelStyles } from "./styleVariables";

export default function IndexAboutUsSection() {
  return (
    <StickyLabeledSection
      labelText="about us"
      labelClassName={stickyLabelStyles}
      spacerHeight="h-[6vh]"
      id="us"
    >
      <AboutUsSection teamMember={TeamMembers[0]} teamFrame={TeamFrames[0]} />
      <AboutUsSection teamMember={TeamMembers[1]} teamFrame={TeamFrames[1]} />
    </StickyLabeledSection>
  );
}
