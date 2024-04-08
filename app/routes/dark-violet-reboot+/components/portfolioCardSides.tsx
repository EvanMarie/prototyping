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
import Flex from "~/components/buildingBlocks/flex";

export function FrontOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <VStack className="h-full w-full justify-between">
      <Flex className="w-full h-80%">
        <Image
          src={portfolioItem.thumbnail}
          alt={portfolioItem.title}
          className="w-full"
        />
      </Flex>
      <VStackFull className="bg-slate-900/90 py-[0.5vh] px-[1vh] h-20%">
        <Text className=" text-[2.3vh] textShadow text-fuchsia-300">
          {portfolioItem.title}
        </Text>
        <Text>{portfolioItem.description}</Text>
      </VStackFull>
    </VStack>
  );
}

export function BackOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  const heading = portfolioItem.projectInfo[0].heading;
  const paragraph = portfolioItem.projectInfo[0].paragraphs[0];
  return (
    <VStackFull className="h-full bg-slate-800 bg-gradient-to-b from-indigo-700/80 via-violet-700/80 to-indigo-700/80/80 relative justify-between shadowBroadLoose border-900-md">
      <FlexFull className="absolute z-10 top-0 left-0 bottom-0 right-0 hover:cursor-pointer text-transparent">
        curosr overlay
      </FlexFull>
      <FlexFull className="bg-slate-900/90 rounded-b-none px-[1vh] py-[0.5vh] text-[2.3vh] textShadow text-fuchsia-100">
        <Text>{portfolioItem.title}</Text>
      </FlexFull>
      <HStackFull gap="gap-[0px]">
        <VStack className="w-40%">
          {portfolioItem.projectImages.slice(0, 3).map((image, index) => (
            <Box className="shadowBroadLoose border-970-md">
              <Image
                key={index}
                src={image.src}
                alt={portfolioItem.title}
                className="w-[13vh] h-[13vh]"
              />
            </Box>
          ))}
        </VStack>

        <VStack className="w-60% pr-[2vh] textShadow">
          <FlexFull>
            <Text className="text-[2.5vh] text-fuchsia-100 ">{heading}</Text>
          </FlexFull>
          <Text noOfLines={13}>{paragraph}</Text>
        </VStack>
      </HStackFull>
      <FlexFull className="p-[1vh]">
        <PortfolioIconButtons
          project={portfolioItem}
          direction="flex-row"
          className="w-full justify-evenly"
          buttonType="normal"
        />
      </FlexFull>
    </VStackFull>
  );
}
