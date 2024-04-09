import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";

export type Path = {
  path: string;
  delay?: number;
  duration?: number;
  fill?: string;
  fillDelay?: number;
  fillDuration?: number;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number | string;
  ease?: string;
  repeat?: number;
  zIndex?: number;
  scaleDelay?: number;
  scaleDuration?: number;
  scaleAmount?: number;
};

export default function SVGMultiPaths({
  paths,
  width = "w-[50vh] max-w-full",
  height = "h-[50vh] max-h-full",
  viewBox = "0 0 200 200",
  containerClassName,
}: {
  paths: Path[];
  height?: string;
  width?: string;
  viewBox?: string;
  containerClassName?: string;
}) {
  return (
    <Flex className={`${height} ${width} ${containerClassName}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <defs>
          <linearGradient
            id="yellowToOrangeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#ff7f00" />
          </linearGradient>
        </defs>
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path.path}
            stroke={path.stroke || "#000000"}
            strokeWidth={path.strokeWidth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: path.duration || 1,
              ease: path.ease || "easeInOut",
              delay: path.delay || 0,
              repeat: path.repeat || 0,
              repeatType: path.repeat ? "reverse" : "mirror",
            }}
            fill={
              path.fill === "url(#yellowToOrangeGradient)"
                ? "url(#yellowToOrangeGradient)"
                : path.fill
            }
            style={{
              fillOpacity: 0,
              animation: path.fill
                ? `fillAnimation ${path.fillDuration || 0.5}s ease-in-out ${
                    path.fillDelay || 0
                  }s forwards`
                : "none",
            }}
          />
        ))}
      </svg>
    </Flex>
  );
}
