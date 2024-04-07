import CenterFull from "~/components/buildingBlocks/centerFull";
import ShiftingImages from "./components/shiftingImages";
import { useEffect, useState } from "react";
import HStackFull from "~/components/buildingBlocks/hStackFull";

export default function ImageGallery() {
  const [imageArray, setImageArray] = useState<string[]>([]);
  const imageDimensions = "w-[20vw] h-[20vw]";
  useEffect(() => {
    const imageCount = 10;
    const imageWidth = 800;
    const imageHeight = 600;
    const generatedImageUrls: string[] = [];

    for (let i = 0; i < imageCount; i++) {
      const randomImageId = Math.floor(Math.random() * 1000);
      const imageUrl = `https://picsum.photos/seed/${randomImageId}/${imageWidth}/${imageHeight}`;
      generatedImageUrls.push(imageUrl);
    }

    setImageArray(generatedImageUrls);
  }, []);

  return (
    <CenterFull>
      <HStackFull className="justify-evenly" gap="gap-[0px]">
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
        <ShiftingImages
          imageArray={imageArray}
          imageDimensions={imageDimensions}
          shape="diamond"
        />
      </HStackFull>
    </CenterFull>
  );
}
