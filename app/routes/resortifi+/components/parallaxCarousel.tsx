import React, { useRef, useEffect } from "react";
import HStackFull from "~/components/buildingBlocks/hStackFull";

interface ParallaxCarouselProps {
  images: string[];
  height?: string;
  randomWidths?: string[];
  gap?: string;
}

export default function ParallaxCarousel({
  images,
  height = "h-[55vh] md:h-[75vh]",
  randomWidths = ["w-[60vh]", "w-[70vh]", "w-[80vh]", "w-[90vh]", "w-[100vh]"],
  gap = "gap-[1vh]",
}: ParallaxCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollPosition = carouselRef.current.scrollLeft;
        // Apply a parallax effect by adjusting the background position based on the scroll position
        Array.from(carouselRef.current.children).forEach((child) => {
          const speed = 0.5; // Adjust the speed for a more pronounced parallax effect
          const x = scrollPosition * speed;
          (child as HTMLDivElement).style.backgroundPosition = `${x}px center`;
        });
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);

      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      ref={carouselRef}
      className={`overflow-x-auto overflow-y-hidden ${height} hide-scrollbar`}
      style={{ whiteSpace: "nowrap" }}
    >
      <HStackFull className="w-fit">
        {images.map((image, index) => {
          const randomWidth =
            randomWidths[Math.floor(Math.random() * randomWidths.length)];
          return (
            <div
              key={index}
              className={`${randomWidth} inline-block ${gap} bg-cover bg-no-repeat bg-center rounded-none`}
              style={{ backgroundImage: `url(${image})`, height: "100%" }}
            />
          );
        })}
      </HStackFull>
    </div>
  );
}
