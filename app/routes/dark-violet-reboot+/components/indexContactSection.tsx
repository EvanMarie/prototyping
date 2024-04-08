import FlexFull from "~/components/buildingBlocks/flexFull";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";

export default function IndexContactSection() {
  return (
    <StickyLabeledSection
      labelText="contact"
      labelClassName={labelStyles}
      spacerHeight="h-[5vh]"
      id="contact"
    >
      <FlexFull className="h-screen">Page One</FlexFull>
    </StickyLabeledSection>
  );
}
