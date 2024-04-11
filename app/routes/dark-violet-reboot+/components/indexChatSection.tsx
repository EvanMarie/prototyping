import FlexFull from "~/components/buildingBlocks/flexFull";
import StickyLabeledSection from "./stickyLabeledSection";
import { stickyLabelStyles } from "./styleVariables";

export default function IndexChatSection() {
  return (
    <StickyLabeledSection
      labelText="chat"
      labelClassName={stickyLabelStyles}
      spacerHeight="h-[14vh]"
      id="chat"
    >
      <FlexFull className="h-screen ">Section One - Page One</FlexFull>
    </StickyLabeledSection>
  );
}
