import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";

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
          className="fixed bottom-[1vh] left-[1vh] z-10"
        >
          <Flex
            className="p-4 bg-cyan-300 text-white z-50 cursor-pointer"
            onClick={scrollToTop}
          >
            Top
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
