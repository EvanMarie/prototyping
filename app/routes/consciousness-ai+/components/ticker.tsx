import React, { useEffect, useRef } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface TickerProps {
  children: React.ReactNode;
  speed?: number;
  gap?: string;
  width?: string;
  height?: string;
}

const Ticker: React.FC<TickerProps> = ({
  children,
  speed = 50,
  gap = "gap-[2vh]",
  width = "w-full",
  height = "h-[5vh]",
}) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const ticker = tickerRef.current;
    if (ticker) {
      const tickerWidth = ticker.offsetWidth;
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
    <div className={`overflow-hidden whitespace-nowrap ${height} ${width}`}>
      <motion.div
        ref={tickerRef}
        animate={controls}
        className={`flex ${gap} ${width} ${height}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Ticker;
