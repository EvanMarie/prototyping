import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";

interface ShiftingImagesProps {
  imageArray: string[];
  delaySeconds?: number;
  transitionDuration?: number;
  imageDimensions?: string;
  shape?:
    | "rectangle"
    | "circle"
    | "triangle"
    | "diamond"
    | "octagon"
    | "invertedTriangle";
  imageClassName?: string;
  containerClassName?: string;
  shadow?: string;
}

const shapeStyles = {
  rectangle: "",
  circle: "circle(50%)",
  triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
  invertedTriangle: "polygon(0% 0%, 100% 0%, 50% 100%)",
  diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  octagon:
    "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)",
};

export default function ShiftingImages({
  imageArray,
  delaySeconds = 4,
  transitionDuration = 4,
  imageDimensions = "h-full w-full",
  shape = "rectangle",
  imageClassName = "",
  containerClassName = "",
}: ShiftingImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const totalDisplayTime = delaySeconds * 1000 + transitionDuration * 1000;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, totalDisplayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImageIndex, delaySeconds, imageArray.length, transitionDuration]);

  const imageStyle = {
    ...(shapeStyles[shape] ? { clipPath: shapeStyles[shape] } : {}),
  };

  return (
    <CenterHorizontalFull>
      <Flex className={`relative ${imageDimensions} ${containerClassName}`}>
        <AnimatePresence>
          {" "}
          <motion.img
            key={currentImageIndex}
            src={imageArray[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
            style={imageStyle}
            className={`absolute inset-0 object-cover ${imageDimensions} ${imageClassName} `}
          />
        </AnimatePresence>
      </Flex>
    </CenterHorizontalFull>
  );
}
