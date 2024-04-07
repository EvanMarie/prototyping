import CenterFull from "~/components/buildingBlocks/centerFull";
import ShiftingImages from "./components/shiftingImages";
import { useEffect, useState } from "react";

export default function ImageGallery() {
  const [imageArray, setImageArray] = useState<string[]>([]);

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
      <ShiftingImages imageArray={imageArray} />
    </CenterFull>
  );
}
