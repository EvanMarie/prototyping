import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Center from "~/components/buildingBlocks/center";
import { PortfolioItem } from "./data";
import { BackOfCard, FrontOfCard } from "./portfolioCardSides";

export default function ShiftingPortfolioCard({
  delay = 0.1,
  visibilityThreshold,
  portfolioItem,
  transitionDuration = 0.5,
}: {
  delay?: number;
  visibilityThreshold?: string;
  portfolioItem: PortfolioItem;
  transitionDuration?: number;
}) {
  const cardDimensions = "h-[56vh] w-[41vh]";
  const animationProps = {
    // initial: { scale: 0 },
    // whileInView: { scale: 1 },
    initial: { opacity: 0, y: "6vh" },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { scale: 1.02 },
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 25,
      mass: 0.7,
      delay: delay,
    },
  };

  const threshold = visibilityThreshold ? visibilityThreshold : "0px";
  return (
    <motion.div
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      whileHover={animationProps.whileHover}
      transition={animationProps.transition}
      viewport={{
        once: true,
        amount: 1.0,
        // margin: `-${visibilityThreshold} 0px 0px 0px`,
        margin: `-${threshold} 0px -${threshold} 0px`,
      }}
    >
      <Box
        className={`${cardDimensions} perspective-100 group overflow-hidden relative`}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        >
          <FlexFull className="h-full p-[1vh]">
            <FrontOfCard portfolioItem={portfolioItem as PortfolioItem} />
          </FlexFull>
        </motion.div>
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: transitionDuration }}
        >
          <Center className="h-full w-full shadowBroadLoose">
            <BackOfCard portfolioItem={portfolioItem} />
          </Center>
        </motion.div>
      </Box>
    </motion.div>
  );
}
