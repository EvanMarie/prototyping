import React, { useState } from "react";
import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";

interface UnblurImageProps {
  imageUrl: string;
  rows?: number;
  columns?: number;
  blurAmount?: number;
  transitionDuration?: number;
  dimensions?: string;
  initialOpacity?: number;
  overlayColor?: string;
}

export default function UnblurImage({
  imageUrl,
  rows = 7,
  columns = 7,
  blurAmount = 75,
  transitionDuration = 0.5,
  dimensions = "w-[50vh] h-[50vh]",
  initialOpacity = 0.3,
  overlayColor = "black",
}: UnblurImageProps) {
  const [unblurredSections, setUnblurredSections] = useState<boolean[][]>(
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill(false))
  );

  const handleMouseOver = (row: number, column: number) => {
    setUnblurredSections((prevState) => {
      const newState = prevState.map((innerRow) => [...innerRow]);
      newState[row][column] = true;
      return newState;
    });
  };

  const sectionWidth = 100 / columns;
  const sectionHeight = 100 / rows;

  return (
    <div className={`relative ${dimensions}`} style={{ overflow: "hidden" }}>
      <img
        src={imageUrl}
        alt="unblur image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          opacity: 0.7,
        }}
      />
      {[...Array(rows)].map((_, rowIndex) =>
        [...Array(columns)].map((_, columnIndex) => (
          <div
            key={`${rowIndex}-${columnIndex}`}
            onMouseOver={() => handleMouseOver(rowIndex, columnIndex)}
            className="absolute"
            style={{
              width: `${sectionWidth}%`,
              height: `${sectionHeight}%`,
              left: `${sectionWidth * columnIndex}%`,
              top: `${sectionHeight * rowIndex}%`,
              backdropFilter: unblurredSections[rowIndex][columnIndex]
                ? `blur(0px)`
                : `blur(${blurAmount}px)`,
              transition: `backdrop-filter ${transitionDuration}s, opacity ${transitionDuration}s`,
            }}
          >
            <div
              className={overlayColor}
              style={{
                width: "100%",
                height: "100%",
                opacity: unblurredSections[rowIndex][columnIndex]
                  ? 0
                  : initialOpacity,
                transition: `opacity ${transitionDuration}s`,
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}
