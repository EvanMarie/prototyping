import { NavLink } from "@remix-run/react";
import { BsMenuApp } from "react-icons/bs";
import { DotsMenuIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Center from "~/components/buildingBlocks/center";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Icon from "~/components/buildingBlocks/icon";
import StaggerMenu from "~/components/specialty/staggerMenu";
import { motion } from "framer-motion";
import AnimatedText from "~/components/specialty/animatedText";
import AnimatedTitleDemo from "~/routes/design+/components/animatedTextDemo";
import AnimateInPlaceText from "~/components/specialty/animateInPlaceText";
import Image from "~/components/buildingBlocks/image";

export default function TopMenu() {
  function LinkText({
    linkText,
    linkUrl,
  }: {
    linkText: string;
    linkUrl: string;
  }) {
    const linkStyle =
      "w-20% md:text-[2.1vh] lg:text-[2.8vh] xl:text-[3.5vh]  text-cyan-200 textShadow flex justify-center items-center  hover:text-fuchsia-600 transition-300";

    return (
      <motion.div
        className={linkStyle}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ duration: 0.2 }}
      >
        <NavLink to={linkUrl}>{linkText}</NavLink>
      </motion.div>
    );
  }

  const menuItems = [
    {
      title: "portfolio",
      to: "#portfolio",
    },
    {
      title: "us",
      to: "#us",
    },
    {
      title: "blog",
      to: "#blog",
    },
    {
      title: "chat",
      to: "#chat",
    },
    {
      title: "contact",
      to: "#contact",
    },
  ];

  return (
    <HStackFull className="h-[10vh] lg:h-[12vh] xl:h-[13vh] justify-between px-[1.5vh] lg:px-[2vh] xxl:px-[5vh] items-end relative gap-[5vh]">
      <HStack className="text-[3.7vh] sm:text-[4vh] md:text-[4.5vh] lg:text-[6vh] xl:text-[7vh] leading-tighter textShadow kufam-font flex-shrink-0 items-center h-full text-purple-300 ">
        <AnimatedText
          text="DarkViolet.ai"
          textClassName="text-fuchsia-400 text-[5.7vh] md:text-[5vh] lg:text-[7vh] xl:text-[7.5vh] xxl:text-[8vh] textShadow tracking-wider"
        />
      </HStack>
      <HStack className="h-full w-[50vw] xl:w-[55vw] items-center hidden md:flex justify-evenly flex-shrink-0 px-[1vh] lg:px-[2vh]">
        {menuItems.map((item, index) => (
          <LinkText key={index} linkText={item.title} linkUrl={item.to} />
        ))}
      </HStack>

      <Box className="group bg-cyan-400 p-[0.7vh] hover:bg-fuchsia-800 md:p-[1.5vh] shadowBroadLoose border-970-md absolute top-[1.5vh] right-[1vh] md:hidden transition-400 hover:cursor-pointer">
        <StaggerMenu
          menuItems={menuItems}
          enterFrom="top"
          staggerDuration={0.2}
          overlayStyle=" bg- backdrop-blur-md"
          menuDirection="flex-col"
          containerClassName="w-screen justify-evenly p-[1vh]"
          itemPadding="px-[1.5vh] py-[0.5vh]"
          itemStyle="bg-purple-700 border-970-md shadowBroadLooser w-[75vw] sm:w-[65vw] h-[5.5vh] flex items-center text-[2.5vh] text-zinc-100 textShadow hover:bg-purple-500 transition-400"
          itemHoverStyle="hover:bg-fuchsia-600 transition-400"
          closeButtonDelay={1}
          menuGap="gap-[3vh]"
          menuPosition="left-0 top-[2vh]"
          slideDistance={10}
          damping={10}
          stiffness={100}
          buttonComponent={
            <Icon
              icon={DotsMenuIcon}
              iconClassName="text-gray-900 text-[3vh] group-hover:text-cyan-200 transition-400"
              containerClassName="w-full h-full"
              hoverCursor="cursor-pointer"
            />
          }
        />
      </Box>
    </HStackFull>
  );
}
