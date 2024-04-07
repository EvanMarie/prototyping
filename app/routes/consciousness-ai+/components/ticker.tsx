import React, { useEffect, useRef } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

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
  gap = "gap-[2vh]",
  width = "w-full",
  height = "h-[10vh]",
}) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [itemStack, setItemStack] = React.useState<React.ReactNode[]>([]);
  const refArray = useRef<HTMLDivElement[]>([]);

  // STACK BUILDING
useEffect(() => {
    const newItems = items.map((item, index) => {
        if (!refArray.current[index]) {
            refArray.current[index] = React.createRef();
        }
        return <motion.div key={index} ref={refArray.current[index]}>{item}</motion.div>;
    });
    setItemStack(newItems);
}, [items]);


useEffect(() => {
    const lastItem = refArray.current[itemStack.length - 1];
    if (lastItem) {
        const rect = lastItem.getBoundingClientRect();
        const xPos = rect.x;
        console.log(xPos); // Logs the x position of the last item
    }
}, [itemStack]);
    



  //   ANIMATION MOVEMENT
  useEffect(() => {
    const ticker = tickerRef.current;
    if (ticker) {
      const tickerWidth = ticker.scrollWidth;
      const parentWidth = ticker.parentElement?.offsetWidth || 0;

      const animation: AnimationControls = controls;
      animation.set({ x: parentWidth });
      animation.start({
        x: -tickerWidth,
        transition: {
          duration: (tickerWidth + parentWidth) / speed,
          repeat: Infinity,
        },
      });
    }
  }, [controls, speed]);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${height} ${width} insetShadowXl border-970-md`}
    >
      <motion.div
        ref={tickerRef}
        animate={controls}
        className={`inline-flex ${gap} ${width} ${height} items-center`}
      >
        {itemStack.map((item, index) => (
        //   <motion.div key={index}>{item}</motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
