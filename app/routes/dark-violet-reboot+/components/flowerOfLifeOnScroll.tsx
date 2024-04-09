import Center from "~/components/buildingBlocks/center";
import { motion } from "framer-motion";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";

export default function FlowerOfLifeOnScroll({
  delay = 0.2,
  visibilityThreshold = "20px",
  transitionDuration = 0.8,
}) {
  const radius = 23;
  const centerX = 55;
  const centerY = 55;
  const encompassingRadius = 2 * radius;
  const smallCircleColor = "rgba(92, 0, 240, 0.6)";
  const largerCircleColor = "rgba(131, 0, 224, 0.6)";

  return (
    <svg
      viewBox="0 0 110 110"
      className="  w-[100vw] h-[100vw] md:h-[90vh] md:w-[90vh]"
    >
      {/* Large Encompassing Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={encompassingRadius}
        fill="none"
        stroke={largerCircleColor}
        strokeWidth="0.6"
        className="text-col-600 shadowBroadNormal animate-[pulse_5s_ease-in-out_infinite]"
      />
      {/* Central Circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={smallCircleColor}
        strokeWidth="0.5" // Adjust stroke width for visibility
        className="text-col-600 shadowBroadNormal animate-[pulse_2.5s_ease-in-out_infinite]"
      />
      {/* Surrounding Circles */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => (
        <circle
          key={index}
          cx={centerX + Math.cos((angle * Math.PI) / 180) * radius}
          cy={centerY + Math.sin((angle * Math.PI) / 180) * radius}
          r={radius}
          fill="none"
          stroke={smallCircleColor}
          strokeWidth="0.6"
          className="text-col-600 shadowBroadNormal animate-[pulse_3.5s_ease-in-out_infinite]"
        />
      ))}
    </svg>
  );
}
