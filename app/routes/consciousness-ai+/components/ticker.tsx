import React, { createRef, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  AnimationControls,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";

interface TickerItemProps {
  children: React.ReactNode;
  speed?: number;
  onPositionTrigger?: () => void;
  positionFactor?: number;
}

const TickerItem: React.FC<TickerItemProps> = ({
  children,
  speed = 13,
  positionFactor = 2,
  onPositionTrigger,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  useEffect(() => {
    const animation: AnimationControls = controls;
    const tickerItem = ref.current;
    const itemWidth = tickerItem?.offsetWidth || 0;
    const parentWidth = tickerItem?.parentElement?.offsetWidth || 0;
    animation.set({ x: parentWidth });
    animation.start({
      x: -itemWidth,
      transition: {
        duration: 10,
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    const tickerItem = ref.current;
    const parentWidth = tickerItem?.parentElement?.offsetWidth || 0;
    if (onPositionTrigger && tickerItem) {
      const rect = tickerItem.getBoundingClientRect();
      const xPos = rect.x;
      console.log(xPos); // Logs the x position
      if (xPos < parentWidth - positionFactor * rect.width) {
        console.log("Triggered");
        onPositionTrigger();
      }
    }
  }, [onPositionTrigger, positionFactor]);

  return (
    <motion.div ref={ref} animate={controls}>
      {children}
    </motion.div>
  );
};

interface TickerProps {
  items: React.ReactNode[];
  speed?: number;
  gap?: string;
  width?: string;
  height?: string;
}

const Ticker: React.FC<TickerProps> = ({
  items,
  speed = 13,
  gap = "10px",
  width = "100%",
  height = "100px",
}) => {
  const [itemStack, setItemStack] = React.useState<React.ReactNode[]>([
    items[0],
  ]);
  const [nextItemIndex, setNextItemIndex] = React.useState<number>(1);

  const handlePositionTrigger = () => {
    if (nextItemIndex < items.length) {
      setItemStack([...itemStack, items[nextItemIndex % items.length]]);
      setNextItemIndex(nextItemIndex + 1);
    }
  };

  return (
    <div style={{ width, height, overflow: "hidden", display: "flex", gap }}>
      {itemStack.map((item, index) => (
        <TickerItem
          key={index}
          speed={speed}
          onPositionTrigger={handlePositionTrigger}
        >
          {item}
        </TickerItem>
      ))}
    </div>
  );
};

export default Ticker;
