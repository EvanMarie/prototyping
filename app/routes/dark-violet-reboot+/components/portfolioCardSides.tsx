import Box from "~/components/buildingBlocks/box";
import { PortfolioItem } from "./data";
import Image from "~/components/buildingBlocks/image";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Text from "~/components/buildingBlocks/text";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStack from "~/components/buildingBlocks/vStack";
import PortfolioIconButtons from "./portfolioIcons";

export function FrontOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <Box className="h-full w-full">
      <Image
        src={portfolioItem.thumbnail}
        alt={portfolioItem.title}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
      />
      <CenterHorizontalFull className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 py-[0.5vh] rounded-t-none text-[2.3vh] textShadow text-fuchsia-300">
        {portfolioItem.title}
      </CenterHorizontalFull>
    </Box>
  );
}

export function BackOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <VStackFull className="h-full bg-gray-300 bg-gradient-to-b from-violet-600/50 via-indigo-700/50 to-fuchsia-700/50 ">
      <FlexFull className="bg-zinc-900/90 rounded-b-none px-[1vh] py-[0.5vh] text-[2.3vh] textShadow text-fuchsia-300">
        <Text>{portfolioItem.title}</Text>
      </FlexFull>
      <HStackFull>
        <VStack className="w-30%">
          {portfolioItem.projectImages.slice(0, 3).map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={portfolioItem.title}
              className="w-[11vh] h-[11vh] rounded-md"
            />
          ))}
        </VStack>

        <VStack className="w-70%">
          <Text>{portfolioItem.description}</Text>
          <PortfolioIconButtons project={portfolioItem} direction="flex-row" />
        </VStack>
      </HStackFull>
    </VStackFull>
  );
}
