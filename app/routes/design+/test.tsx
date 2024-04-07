import { useEffect, useRef, useState } from "react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax } from "@react-spring/parallax";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

import {
  motion,
  useAnimation,
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

import Ticker from "../consciousness-ai+/components/ticker";
import Flex from "~/components/buildingBlocks/flex";
import Center from "~/components/buildingBlocks/center";
import Text from "~/components/buildingBlocks/text";

const itemNumbers = Array.from({ length: 3 }, (_, i) => i + 1);
type TickerItemProps = HTMLMotionProps<"div"> & {
  speed?: number;
  onPositionTrigger?: () => void;
  positionFactor?: number;
  init?: boolean;
};

const TickerItem: React.FC<TickerItemProps> = ({
  children,
  speed = 25,
  onPositionTrigger,
  positionFactor = 2,
  init = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const controls = useAnimation();
  useMotionValueEvent(x, "change", (latest) => {
    const parentWidth = ref.current?.parentElement?.offsetWidth || 0;
    const itemWidth = ref.current?.offsetWidth || 0;
    if (
      !hasTriggered &&
      onPositionTrigger &&
      parentWidth &&
      itemWidth &&
      latest < parentWidth - positionFactor * itemWidth
    ) {
      setHasTriggered(true);
      onPositionTrigger();
    }
  });

  useEffect(() => {
    const animation: AnimationControls = controls;
    const tickerItem = ref.current;
    const itemWidth = tickerItem?.offsetWidth || 0;

    const parentWidth = tickerItem?.parentElement?.offsetWidth || 0;
    // init ? animation.set({ x: parentWidth }) : animation.set({ x: itemWidth });
    animation.set({ x: parentWidth });
    animation.start({
      x: -2 * itemWidth,
      transition: {
        duration: (parentWidth + itemWidth) / speed,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div ref={ref} animate={controls} style={{ x }}>
      {children}
    </motion.div>
  );
};

export default function Test() {
  const [lastItemIndex, setLastItemIndex] = useState(0);
  const [activeItemStack, setActiveItemStack] = useState<number[]>([
    itemNumbers[0],
  ]);
  const handlePositionTrigger = () => {
    setActiveItemStack((prev) => {
      const nextItemIndex = lastItemIndex + 1;
      setLastItemIndex(nextItemIndex);
      return [...prev, itemNumbers[nextItemIndex % itemNumbers.length]];
    });
  };

  return (
    <TransitionFull className="relative">
      <LayoutContainer className="relative overflow-y-auto">
        <div className="w-[40vh] bg-col-950 p-[2vh] h-fit">
          {activeItemStack.map((itemNumber, index) => (
            <TickerItem
              key={index}
              onPositionTrigger={handlePositionTrigger}
              init={activeItemStack.length === 1}
            >
              {/* <Center className="p-[1vh] bg-col-490 text-col-100 textShadow shadowNarrowNormal border-970-md"> */}
              <Text>Item: {String(itemNumber)}</Text>
              {/* </Center> */}
            </TickerItem>
          ))}
        </div>
      </LayoutContainer>
    </TransitionFull>
  );
}
