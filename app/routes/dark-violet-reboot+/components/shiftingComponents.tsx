import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FlexFull from "~/components/buildingBlocks/flexFull";

interface ShiftingComponentsProps {
  componentArray: React.ReactNode[];
  delaySeconds?: number;
  transitionDuration?: number;
  containerClassName?: string;
  dimensions?: string;
}

export default function ShiftingComponents({
  componentArray,
  delaySeconds = 3,
  transitionDuration = 5,
  containerClassName = "",
  dimensions = "h-full w-full",
}: ShiftingComponentsProps) {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const totalDisplayTime = delaySeconds * 1000 + transitionDuration * 1000;
    const timer = setTimeout(() => {
      setCurrentComponentIndex(
        (prevIndex) => (prevIndex + 1) % componentArray.length
      );
    }, totalDisplayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentComponentIndex,
    delaySeconds,
    componentArray.length,
    transitionDuration,
  ]);

  return (
    <FlexFull className={`relative ${containerClassName} ${dimensions}`}>
      <AnimatePresence>
        <motion.div
          key={currentComponentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
          className={`absolute inset-0 ${dimensions}`}
        >
          {componentArray[currentComponentIndex]}
        </motion.div>
      </AnimatePresence>
    </FlexFull>
  );
}
