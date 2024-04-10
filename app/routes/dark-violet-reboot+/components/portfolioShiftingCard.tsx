import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Center from "~/components/buildingBlocks/center";
import { PortfolioItem } from "./data";
import { BackOfCard, FrontOfCard } from "./portfolioCardSides";

export default function ShiftingPortfolioCard({
  delay = 0,
  portfolioItem,
  sideShiftDuration = 0.4,
  animateInDuration = 1.5,
  trigger = 0.5,
}: {
  delay?: number;
  portfolioItem: PortfolioItem;
  trigger?: number;
  sideShiftDuration?: number;
  animateInDuration?: number;
}) {
  const cardDimensions = "w-[35vh] h-[56vh] sm:w-[41vh]";
  const animationProps = {
    initial: { opacity: 0, y: "13vh" },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { scale: 1.02 },
    transition: {
      opacity: {
        duration: animateInDuration * 0.5,
        delay: delay,
      },
      y: {
        type: "spring",
        stiffness: 80,
        damping: 25,
        mass: 0.25,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      whileHover={animationProps.whileHover}
      transition={animationProps.transition}
      viewport={{
        once: true,
        amount: trigger,
      }}
    >
      <Box
        className={`${cardDimensions} perspective-100 group overflow-hidden relative`}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: sideShiftDuration }}
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
          transition={{ duration: sideShiftDuration }}
        >
          <Center className="h-full w-full shadowBroadLoose">
            <BackOfCard portfolioItem={portfolioItem} />
          </Center>
        </motion.div>
      </Box>
    </motion.div>
  );
}
