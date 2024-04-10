import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Accordion from "~/components/specialty/accordion";
import AboutUsAccordion from "./aboutUsAccordion";
import Center from "~/components/buildingBlocks/center";
import { TeamFrame, TeamFrames, TeamMember, TeamMembers } from "./data";
import Image from "~/components/buildingBlocks/image";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import VStack from "~/components/buildingBlocks/vStack";
import Text from "~/components/buildingBlocks/text";

export default function AboutUsSection({
  teamMember,
  teamFrame,
}: {
  teamMember: TeamMember;
  teamFrame: TeamFrame;
}) {
  return (
    <FlexFull className="justify-center p-[1vh]">
      <FlexFull className="flex-col xl:flex-row p-[1vh]">
        <CenterHorizontalFull>
          <VStack>
            <Text className="text-[2.5vh] text-cyan-200 textShadow">
              {teamMember.name}
            </Text>
            <Flex className="shadowBroadNormal border-970-md ">
              <Image
                src={teamMember.headshot}
                alt={teamMember.name}
                className="w-[60w] sm:w-[50vw] md:w-[50vh] max-h-[65vh]"
              />
            </Flex>
            <Text className="text-[2vh] text-slate-100 textShadow">
              {teamMember.role}
            </Text>
          </VStack>
        </CenterHorizontalFull>
        <AboutUsAccordion title="Education">
          <VStack>{teamFrame.edu1}</VStack>
        </AboutUsAccordion>
      </FlexFull>
    </FlexFull>
  );
}
