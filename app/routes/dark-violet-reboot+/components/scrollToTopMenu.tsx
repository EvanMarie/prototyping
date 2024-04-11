import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import StaggerMenu from "~/components/specialty/staggerMenu";
import { menuItems } from "./topMenu";
import Icon from "~/components/buildingBlocks/icon";
import { DotsMenuIcon } from "styles";
import VStack from "~/components/buildingBlocks/vStack";
import { HiMiniArrowUturnUp, HiOutlineArrowUturnUp } from "react-icons/hi2";
import { PiArrowURightUpBold } from "react-icons/pi";
import { staggerMenuLinkStyles } from "./styleVariables";

interface ScrollToTopProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollContainerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > window.innerHeight * 1
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", toggleVisibility);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonStyle =
    "bg-cyan-300 hover:bg-fuchsia-800 transition-400 hover:metallicEdgesSm z-10 cursor-pointer group p-[0.5vh] md:p-[0.3vh]";
  const containerStyle = "bg-slate-800/80 p-[1vh] shadowBroadNormal";
  const iconStyle =
    "text-slate-900 text-[2.5] md:text-[3vh] group-hover:text-slate-100 transition-400";
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scrollToTopButton"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 z-10"
        >
          <VStack className={containerStyle} gap="gap-[1.5vh]">
            <Flex className={buttonStyle}>
              <StaggerMenu
                menuItems={menuItems}
                enterFrom="bottom"
                staggerDuration={0.2}
                overlayStyle=" bg-900/25-400 backdrop-blur-md"
                menuDirection="flex-col"
                containerClassName="w-[20vh] justify-evenly p-[1vh]"
                itemPadding="px-[1.5vh] py-[0.5vh]"
                itemStyle={`w-[18vh] h-[5.5vh] text-[2.5vh] ${staggerMenuLinkStyles}`}
                itemHoverStyle="hover:bg-fuchsia-600 transition-400"
                closeButtonDelay={1}
                menuGap="gap-[3vh]"
                menuPosition="left-0 bottom-0"
                slideDistance={10}
                damping={10}
                stiffness={100}
                buttonComponent={
                  <Icon
                    icon={DotsMenuIcon}
                    iconClassName={iconStyle}
                    containerClassName="w-full h-full"
                    hoverCursor="cursor-pointer"
                  />
                }
              />
            </Flex>
            <Flex className={buttonStyle} onClick={scrollToTop}>
              <Icon
                icon={PiArrowURightUpBold}
                iconClassName={iconStyle}
                containerClassName="w-full h-full"
                hoverCursor="cursor-pointer"
              />
            </Flex>
          </VStack>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
