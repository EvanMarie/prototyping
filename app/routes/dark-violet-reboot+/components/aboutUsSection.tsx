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
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { useState } from "react";

export default function AboutUsSection({
  teamMember,
  teamFrame,
}: {
  teamMember: TeamMember;
  teamFrame: TeamFrame;
}) {
  const [accordioOneOpen, setAccordionOneOpen] = useState(false);
  const [accordioTwoOpen, setAccordionTwoOpen] = useState(false);

  const handleClickAccordioOne = () => {
    setAccordionTwoOpen(false);
    setAccordionOneOpen(!accordioOneOpen);
  };

  const handleClickAccordioTwo = () => {
    setAccordionOneOpen(false);
    setAccordionTwoOpen(!accordioTwoOpen);
  };

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
        {/* CONTENT SMALL SCREENS TO LARGE  */}
        <VStackFull className="flex xl:hidden">
          <AboutUsAccordion
            title="About"
            isOpen={accordioOneOpen}
            clickAccordion={handleClickAccordioOne}
          >
            <VStack className="md:text-[1.9vh]">
              <Text>{teamFrame.paragraphs[0]}</Text>
              <Text>{teamFrame.paragraphs[1]}</Text>
              <Text>{teamFrame.paragraphs[2]}</Text>
            </VStack>
          </AboutUsAccordion>
          <AboutUsAccordion
            title="Education"
            isOpen={accordioTwoOpen}
            clickAccordion={handleClickAccordioTwo}
          >
            <VStack className="md:text-[1.9vh]">
              <Text>{teamFrame.edu1}</Text>
              <Text>{teamFrame.edu2}</Text>
              <Text>{teamFrame.edu3}</Text>
            </VStack>
          </AboutUsAccordion>
        </VStackFull>
        {/* CONTENT XL SCREENS  */}
        <VStackFull className="hidden xl:flex">
          <VStack className="md:text-[1.9vh]">
            <Text>{teamFrame.paragraphs[0]}</Text>
            <Text>{teamFrame.paragraphs[1]}</Text>
            <Text>{teamFrame.paragraphs[2]}</Text>
          </VStack>

          <VStack className="md:text-[1.9vh]">
            <Text>{teamFrame.edu1}</Text>
            <Text>{teamFrame.edu2}</Text>
            <Text>{teamFrame.edu3}</Text>
          </VStack>
        </VStackFull>
      </FlexFull>
    </FlexFull>
  );
}
