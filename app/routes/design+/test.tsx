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
} from "framer-motion";

import Ticker from "../consciousness-ai+/components/ticker";
import Flex from "~/components/buildingBlocks/flex";
import Center from "~/components/buildingBlocks/center";
import Text from "~/components/buildingBlocks/text";

const itemNumbers = Array.from({ length: 3 }, (_, i) => i + 1);

export default function Test() {
  const [activeItemStack, setActiveItemStack] = useState<React.ReactNode[]>([
    itemNumbers[0],
  ]);
  const [lastItemWidth, setLastItemWidth] = useState<number>(0);
  const [lastItemIndex, setLastItemIndex] = useState<number>(0);
  const lastItemRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  function TickerItem({ itemNumber }: { itemNumber: number }) {
    return (
      <Center className="p-[1vh] bg-col-490 text-col-100 textShadow shadowNarrowNormal border-970-md">
        <Text>Item: {String(itemNumber)}</Text>
      </Center>
    );
  }
  const controls = useAnimation();
  const speed = 13;
  useEffect(() => {
    const animation: AnimationControls = controls;
    const tickerItem = lastItemRef.current;
    const itemWidth = tickerItem?.offsetWidth || 0;
    setLastItemWidth(itemWidth);
    const parentWidth = tickerItem?.parentElement?.offsetWidth || 0;
    animation.set({ x: parentWidth });
    animation.start({
      x: -itemWidth,
      transition: {
        duration: parentWidth / speed,
      },
    });
  }, [controls, lastItemRef.current]);

  useEffect(() => {
    const lastItemTrigger = document.getElementById("nextItemTrigger");
    if (!lastItemTrigger) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Triggered");
          setActiveItemStack((prev) => {
            const nextItemIndex = lastItemIndex + 1;
            setLastItemIndex(nextItemIndex);
            return [...prev, itemNumbers[nextItemIndex % itemNumbers.length]];
          });
        }
      },
      { root: tickerRef.current, threshold: 1 }
    );
    observer.observe(lastItemTrigger);
    return () => observer.disconnect();
  }, [lastItemIndex, lastItemRef.current]);

  return (
    <TransitionFull className="relative">
      <LayoutContainer className="relative overflow-y-auto">
        <Flex ref={tickerRef} className="w-[40vh] bg-col-950 p-[2vh] h-fit">
          {activeItemStack.map((itemNumber, index) =>
            index === itemNumbers.length - 1 ? (
              <Center
                ref={lastItemRef}
                className="p-[1vh] bg-col-490 text-col-100 textShadow shadowNarrowNormal border-970-md"
              >
                <Text>Item: {String(itemNumber)}</Text>
              </Center>
            ) : (
              <Center className="p-[1vh] bg-col-490 text-col-100 textShadow shadowNarrowNormal border-970-md">
                <Text>Item: {String(itemNumber)}</Text>
              </Center>
            )
          )}
          <div
            id="nextItemTrigger"
            style={{ width: lastItemWidth || 100 }}
          ></div>
        </Flex>
      </LayoutContainer>
    </TransitionFull>
  );
}
