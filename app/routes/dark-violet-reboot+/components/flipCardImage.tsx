import React, { useState } from "react";

interface FlipCardImageProps {
  mainImageUrl: string;
  rows?: number;
  columns?: number;
  transitionDuration?: number;
  dimensions?: string;
  flipCardGradient?: string;
}

export default function UnblurImage({
  mainImageUrl,
  rows = 5,
  columns = 5,
  transitionDuration = 0.6,
  dimensions = "w-[50vh] h-[50vh]",
  flipCardGradient = "linear-gradient(135deg, rgba(0, 138, 153, 0.9) 0%, rgba(114, 42, 176, 0.9) 50%,  rgba(0, 138, 153, 0.9) 100%)",
}: FlipCardImageProps) {
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
    <div
      className={`relative ${dimensions}`}
      style={{
        perspective: "1000px",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={mainImageUrl}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover rounded-none"
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
              transformStyle: "preserve-3d",
              transition: `transform ${transitionDuration}s`,
              transform: unblurredSections[rowIndex][columnIndex]
                ? "rotateY(180deg)"
                : "rotateY(0deg)",
            }}
          >
            <div
              className="rounded-none"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                background: flipCardGradient,
                transform: "rotateY(0deg)",
              }}
            />
          </div>
        ))
      )}
    </div>
  );
}
