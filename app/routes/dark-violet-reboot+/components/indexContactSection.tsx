import FlexFull from "~/components/buildingBlocks/flexFull";
import StickyLabeledSection from "./stickyLabeledSection";
import { stickyLabelStyles } from "./styleVariables";

export default function IndexContactSection() {
  return (
    <StickyLabeledSection
      labelText="contact"
      labelClassName={stickyLabelStyles}
      spacerHeight="h-[5vh]"
      id="contact"
    >
      <FlexFull className="h-screen">Page One</FlexFull>
    </StickyLabeledSection>
  );
}
