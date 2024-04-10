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
import { motion } from "framer-motion";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { GrDocumentPdf } from "react-icons/gr";

export const aboutUsElementWidth = "w-[65vw] sm:w-[60vw] md:w-[50vh]";
function TeamMemberContainer({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedComponent
      animation="fadeIn"
      className="w-full"
      runOnce={true}
      triggerPercent={0.3}
    >
      <CenterHorizontalFull>
        <FlexFull className="h-fit md:w-[80vw] lg:w-[70vw] xl:w-[93vw] xxl:w-[85vw] py-[2vh] px-[1vh] sm:px-[2vh] justify-center">
          <FlexFull className="h-fit shadowBroadLooser border-970-md bg-slate-900 bg-gradient-to-br from-violet-600/70 via-indigo-800/70 to-cyan-600/70">
            {children}
          </FlexFull>
        </FlexFull>
      </CenterHorizontalFull>
    </AnimatedComponent>
  );
}

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
    return (
      <NavLink to={link} target="_blank">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2, rotate: -6 }}
          transition={{ duration: 0.4 }}
        >
          <HStack
            className="text-[1.2vh] sm:text-[2.1vh] lg:text-[2.3vh] text-cyan-200 textShadow hover:text-fuchsia-200 transition-400 py-[1.5vh]  hover:cursor-pointer items-center"
            gap="gap-[0.3vh]"
          >
            <Icon
              icon={icon}
              iconClassName="text-[1.5vh] sm:text-[2.1vh] lg:text-[2.3vh] xl:text-[2.5]"
            />
            <Text>{text}</Text>
          </HStack>
        </motion.div>
      </NavLink>
    );
  }

  return (
    <TeamMemberContainer>
      <FlexFull className="justify-center p-[1vh]">
        <FlexFull className="flex-col xl:flex-row p-[1vh] xl:justify-evenly">
          <CenterHorizontalFull className="xl:w-1/2">
            <VStack className="h-full justify-evenly">
              <Text className="text-[3vh] md:text-[4vh] text-cyan-200 textShadow">
                {teamMember.name}
              </Text>
              <Flex className="shadowBroadNormal border-970-md ">
                <Image
                  src={teamMember.headshot}
                  alt={teamMember.name}
                  className={`${aboutUsElementWidth} max-h-[65vh]`}
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
                <HStack className={`${aboutUsElementWidth} justify-between`}>
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
                  <SocialLink text="Resume" link="" icon={GrDocumentPdf} />
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
          <FlexFull className="h-full items-center xl:w-1/2">
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
    </TeamMemberContainer>
  );
}
