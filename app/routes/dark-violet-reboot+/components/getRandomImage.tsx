import Box from "~/components/buildingBlocks/box";
import Image from "~/components/buildingBlocks/image";
import Text from "~/components/buildingBlocks/text";

export function GetRandomImage({
  height = 500,
  width = 500,
  alt = "placeholder",
  className = "shadowBroadNormal border-970-md",
}: {
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
}) {
  const src = `https://picsum.photos/seed/${String(
    Math.floor(Math.random() * 100) + 1
  )}/${width}/${height}`;

  return (
    <>
      <Box className={className}>
        <Image src={src} alt={alt} />
      </Box>
    </>
  );
}

export function GetRandomImageString({
  height = 500,
  width = 500,
}: {
  height?: number;
  width?: number;
}) {
  const src = String(
    `https://picsum.photos/seed/${
      Math.floor(Math.random() * 100) + 1
    }/${width}/${height}`
  );
  return src;
}
