import FlexFull from "~/components/buildingBlocks/flexFull";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";

export default function IndexChatSection() {
  return (
    <StickyLabeledSection
      labelText="chat"
      labelClassName={labelStyles}
      spacerHeight="h-[14vh]"
      id="chat"
    >
      <FlexFull className="h-screen ">Section One - Page One</FlexFull>
      <FlexFull className="h-screen">Section One - Page Two</FlexFull>
    </StickyLabeledSection>
  );
}
