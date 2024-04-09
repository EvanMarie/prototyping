import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Accordion from "~/components/specialty/accordion";
import AboutUsAccordion from "./aboutUsAccordion";
import Center from "~/components/buildingBlocks/center";

export default function AboutUsSection() {
  return (
    <FlexFull className="justify-center p-[1vh]">
      <FlexFull className="flex-col lg:flex-row bg-slate-600 p-[1vh]">
        <Center className="w-full sm:w-80% md:w-60% h-[60vh] border-200-md">
          PHOTO
        </Center>
        <AboutUsAccordion title="Read More">This</AboutUsAccordion>
      </FlexFull>
    </FlexFull>
  );
}
