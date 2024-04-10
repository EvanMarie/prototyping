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
import { NavLink } from "@remix-run/react";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { linkStyle } from "./topMenu";

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

  function SocialLink({
    text,
    link,
    icon,
  }: {
    text: string;
    link: string;
    icon: any;
  }) {
    const socialLinkStyle =
      "md:text-[2.1vh] lg:text-[2.8vh] text-cyan-200 textShadow flex justify-center items-center hover:text-fuchsia-200 transition-300 py-[1.5vh] lg:px-[2vh] hover:cursor-pointer items-center";
    const iconStyles = "md:text-[2.1vh] lg:text-[2.8vh]";
    return (
      <NavLink to={link} target="_blank">
        <HStack className={socialLinkStyle} gap="gap-[0.3vh]">
          <Icon icon={icon} iconClassName={iconStyles} />
          <Text>{text}</Text>
        </HStack>
      </NavLink>
    );
  }

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
            <VStackFull
              align="items-start"
              gap="gap-[0.2vh]"
              className="justify-start text-sm-tighter sm:text-md-tight md:text-xl-tight lg:text-lg-tight xl:text-xl-tight"
            >
              <HStack className="w-[60w] sm:w-[50vw] md:w-[50vh] max-h-[65vh] justify-between">
                <SocialLink
                  text="LinkedIn"
                  link={teamMember.linkedin}
                  icon={FaLinkedin}
                />
                <SocialLink
                  text="GitHub"
                  link={teamMember.github}
                  icon={FiGithub}
                />

                <SocialLink
                  text="Connect"
                  link={"#connect"}
                  icon={MdOutlineConnectWithoutContact}
                />
              </HStack>
            </VStackFull>
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
        <FlexFull className="h-full items-center">
          <VStackFull className="hidden xl:flex" gap="gap-[1.5vh]">
            <VStack
              className="md:text-[1.9vh] bg-slate-900/80 p-[1vh] shadowBroadNormal"
              gap="gap-[1.5vh]"
            >
              <Text>{teamFrame.paragraphs[0]}</Text>
              <Text>{teamFrame.paragraphs[1]}</Text>
              <Text>{teamFrame.paragraphs[2]}</Text>
            </VStack>
            <VStack
              className="md:text-[1.9vh]  bg-slate-900/80 p-[2vh] shadowBroadNormal"
              gap="gap-[1.5vh]"
            >
              <Text>{teamFrame.edu1}</Text>
              <Text>{teamFrame.edu2}</Text>
              <Text>{teamFrame.edu3}</Text>
            </VStack>
          </VStackFull>
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
