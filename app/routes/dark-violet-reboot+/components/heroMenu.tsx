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
import AnimatedText from "~/components/specialty/animatedTitle";
import AnimatedTitleDemo from "~/routes/design+/components/animatedTextDemo";
import AnimateInPlaceText from "~/components/specialty/animateInPlaceText";

export default function DarkVioletHero() {
  function LinkText({
    linkText,
    linkUrl,
  }: {
    linkText: string;
    linkUrl: string;
  }) {
    const linkStyle =
      "w-[9vh] lg:w-[11vh] xl:w-[13vh] text-[2vh] lg:text-[2.5vh] xl:text-[3vh] text-teal-200 textShadow flex justify-center items-center flex-shrink-0 hover:text-purple-200 transition-300";

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

  return (
    <HStackFull className="h-[8.5vh] lg:h-[11vh] justify-between px-[1.5vh] lg:px-[2vh] xxl:px-[5vh] items-end relative">
      <Flex className="text-[3.7vh] sm:text-[4vh] md:text-[4.5vh] lg:text-[6vh] xl:text-[7vh] leading-tighter textShadow kufam-font flex-shrink-0 items-center h-full text-purple-300">
        <AnimateInPlaceText
          text="DarkViolet.ai"
          isWave
          // gradient="logoGradient"
          textColor="text-fuchsia-300"
          textShadow=""
          textSize="text-[5vh] md:text-[8vh]"
          waveSize={13}
        />
      </Flex>
      <HStack className="h-full items-center hidden md:flex justify-evenly flex-shrink-0 ">
        <LinkText linkText="Portfolio" linkUrl="#portfolio" />
        <LinkText linkText="Us" linkUrl="#us" />
        <LinkText linkText="chat" linkUrl="#chat" />
        <LinkText linkText="Contact" linkUrl="#contact" />
      </HStack>

      <Box className="bg-cyan-800/50 p-[0.7vh] md:p-[1.5vh] shadowBroadLoose border-970-md  absolute top-[1.5vh] right-[1vh] md:hidden">
        <StaggerMenu
          enterFrom="top"
          staggerDuration={0.2}
          overlayStyle=" bg- backdrop-blur-md"
          menuDirection="flex-col"
          containerClassName="w-screen justify-evenly p-[1vh]"
          itemPadding="px-[1.5vh] py-[0.5vh]"
          itemStyle="bg-col-300"
          itemHoverStyle="hoverbg-col-200 transition-400"
          itemHoverAnimation="hover:-translate-x-[1vh]"
          closeButtonDelay={1}
          slideDistance={10}
          damping={10}
          stiffness={100}
          buttonComponent={
            <Icon
              icon={DotsMenuIcon}
              iconClassName="text-zinc-100 text-[3vh]"
            />
          }
        />
      </Box>
    </HStackFull>
  );
}
