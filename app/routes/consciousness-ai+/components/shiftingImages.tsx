import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import FlexFull from "~/components/buildingBlocks/flexFull";

interface ShiftingImagesProps {
  imageArray: string[];
  delaySeconds?: number;
  transitionDuration?: number;
  height?: string;
  width?: string;
}

export default function ShiftingImages({
  imageArray,
  delaySeconds = 3,
  transitionDuration = 5,
  height = "h-full",
  width = "w-full",
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const transitionDuration = 3;
    const totalDisplayTime = delaySeconds * 1000 + transitionDuration * 1000;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, totalDisplayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex, delaySeconds, imageArray.length]);

  return (
    <FlexFull className={`relative ${height} ${width}`}>
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={imageArray[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </FlexFull>
  );
}
