/* eslint-disable @typescript-eslint/no-explicit-any */
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Box from "~/components/buildingBlocks/box";
import CenterFull from "~/components/buildingBlocks/centerFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Flex from "~/components/buildingBlocks/flex";
import Text from "~/components/buildingBlocks/text";

export default function RadialScrollProgress({
  children,
  containerPadding = "px-[0.5vh] pb-[0.5vh] sm:px-[1vh] sm:pb-[1vh] md:px-[2vh] md:pb-[2vh]",
  bg = "bg-gray-900/60 bg-gradient-to-b from-violet-300/40 via-indigo-300/40 to-fuchsia-300/40 border-970-md shadowBroadTight",
  innerBg = "bg-slate-300/50",
  innerPadding = "py-[1vh]",
  itemGap = "gap-[1.5vh]",
  title = "Content Title",
  topPadding = "pt-[7vh]",
  trackOpacity = "opacity-30",
  titlePosition = "top-[1vh] right-[1vh]",
  titleClassName = "h-[3.2vh] pr-[2vh] text-[2.5vh] md:text-[3vh] font-bold text-cyan-300 textShadow",
  progressPosition = "top-[0.5vh] left-[0.5vh]",
  progressColor = "stroke-cyan-300",
  progressWidth = "1.2vh",
  radius = 40,
  progressCircleSize = "4.5vh",
  snapScroll = true,
}: {
  children?: React.ReactNode;
  containerPadding?: string;
  itemGap?: string;
  bg?: string;
  innerBg?: string;
  innerPadding?: string;
  topPadding?: string;
  title?: string;
  titlePosition?: string;
  titleClassName?: string;
  trackOpacity?: string;
  progressPosition?: string;
  progressColor?: string;
  progressWidth?: string;
  radius?: number;
  progressCircleSize?: string;
  snapScroll?: boolean;
}) {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  return (
    <CenterFull
      className={`w-full h-full relative ${bg} ${containerPadding} ${topPadding} max-h-[75vh]`}
    >
      <Box className={`absolute ${progressPosition}`}>
        <svg
          className="-rotate-90"
          width={progressCircleSize}
          height={progressCircleSize}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            pathLength="1"
            className={`${progressColor} ${trackOpacity}`}
            style={{ fill: "none", strokeWidth: progressWidth }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            pathLength="1"
            className={progressColor}
            style={{
              fill: "none",
              strokeWidth: progressWidth,
              pathLength: scrollXProgress,
            }}
          />
        </svg>
      </Box>
      <Flex
        className={`absolute items-center ${titlePosition} ${titleClassName}`}
      >
        <Text>{title}</Text>
      </Flex>
      <Box
        className={`${innerPadding} ${innerBg} insetShadowXl border-980-lg overflow-x-hidden w-full`}
      >
        <FlexFull
          className={`overflow-x-auto overflow-y-hidden ${
            snapScroll ? "snap-mandatory snap-x" : ""
          } hide-scrollbar`}
          ref={scrollRef}
        >
          <HStackFull
            className="w-fit h-full items-center p-[1vh]"
            gap={itemGap}
          >
            {children}
          </HStackFull>
        </FlexFull>
      </Box>
    </CenterFull>
  );
}
