import { NavLink } from "@remix-run/react";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";

export default function ConsciousnessHeroMenu() {
  const linkStyle =
    "w-[7vh] lg:w-[10vh] text-[2vh] lg:text-[2.5vh] text-zinc-100 textShadow justify-end flex-shrink-0";
  return (
    <HStackFull className="h-[8.5vh] justify-between px-[1.5vh] pt-[1vh] lg:px-[2vh] xxl:px-[5vh] items-end">
      <Flex className="text-[4vh] sm:text-[5vh] md:text-[5.5vh] lg:text-[7vh] leading-tight text-zinc-100 textShadow kufam-font flex-shrink-0 items-end ">
        Consciousness AI
      </Flex>
      <HStack className="h-full items-center hidden md:flex justify-evenly flex-shrink-0 ">
        <NavLink to="/" className={linkStyle}>
          Our Models
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Link 2
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Link 3
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Link 4
        </NavLink>
      </HStack>
    </HStackFull>
  );
}
