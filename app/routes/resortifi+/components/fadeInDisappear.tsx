import { ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function FadeInOut({
  children,
  fadeIn = true,
  fadeInDuration = 0.5,
  fadeInDelay = 0,
  screenTime = 6000,
  fadeOutDuration = 0.6,
  className,
}: {
  children: ReactNode;
  fadeIn?: boolean;
  fadeInDuration?: number;
  fadeInDelay?: number;
  screenTime?: number;
  fadeOutDuration?: number;
  className?: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      if (fadeIn) {
        await controls.start({
          opacity: 1,
          transition: { delay: fadeInDelay, duration: fadeInDuration },
        });
      }
      await new Promise((resolve) => setTimeout(resolve, screenTime));
      await controls.start({
        opacity: 0,
        transition: { duration: fadeOutDuration },
      });
    };

    sequence();
  }, [
    controls,
    fadeIn,
    fadeInDuration,
    fadeInDelay,
    screenTime,
    fadeOutDuration,
  ]);

  return (
    <motion.div
      initial={{ opacity: fadeIn ? 0 : 1 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
