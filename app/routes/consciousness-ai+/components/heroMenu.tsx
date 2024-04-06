import { NavLink } from "@remix-run/react";
import { BsMenuApp } from "react-icons/bs";
import { DotsMenuIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";

export default function ConsciousnessHeroMenu() {
  const linkStyle =
    "w-[9vh] lg:w-[11vh] xl:w-[13vh] text-[2vh] lg:text-[2.5vh] xl:text-[3vh] text-zinc-100 textShadow flex justify-center items-center flex-shrink-0";
  return (
    <HStackFull className="h-[8.5vh] lg:h-[11vh] justify-between px-[1.5vh] lg:px-[2vh] xxl:px-[5vh] items-end relative">
      <Flex className="text-[3.7vh] sm:text-[4.5vh] lg:text-[7vh] leading-tighter textShadow kufam-font flex-shrink-0 items-center h-full text-purple-300">
        Consciousness AI
      </Flex>
      <HStack className="h-full items-center hidden md:flex justify-evenly flex-shrink-0 ">
        <NavLink to="/" className={linkStyle}>
          Models
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Gen
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Ethics
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Contact
        </NavLink>
      </HStack>

      <Box className="bg-cyan-800/50 p-[0.7vh] md:p-[1.5vh] shadowBroadLoose border-970-md  absolute top-[1.5vh] right-[1vh] md:hidden">
        <Icon icon={DotsMenuIcon} iconClassName="text-zinc-100 text-[3vh]" />
      </Box>
    </HStackFull>
  );
}
