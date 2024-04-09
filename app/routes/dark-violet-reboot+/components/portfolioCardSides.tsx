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
import { NavLink } from "@remix-run/react";

export function FrontOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  return (
    <NavLink to={`/dark-violet-reboot/portfolio/${portfolioItem.title}`}>
      <VStack className="h-full w-full justify-between">
        <Flex className="w-full h-75% shadowBroadLoose">
          <Image
            src={portfolioItem.thumbnail}
            alt={portfolioItem.title}
            className="w-full"
          />
        </Flex>
        <VStackFull className="bg-slate-900/90 py-[0.5vh] px-[1vh] h-20% shadowBroadLoose">
          <Text className=" text-[2.3vh] textShadow text-fuchsia-300">
            {portfolioItem.title}
          </Text>
          <Text>{portfolioItem.description}</Text>
        </VStackFull>
      </VStack>
    </NavLink>
  );
}

export function BackOfCard({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) {
  const heading = portfolioItem.projectInfo[0].heading;
  const paragraph = portfolioItem.projectInfo[0].description;
  return (
    <VStackFull className="h-full bg-slate-900 bg-gradient-to-br from-indigo-700/70 via-violet-900/70 to-fuchsia-900/70 justify-between shadowBroadLoose border-900-md">
      <NavLink to={`/dark-violet-reboot/portfolio/${portfolioItem.title}`}>
        <VStackFull className="relative">
          <FlexFull className="absolute z-10 top-0 left-0 bottom-0 right-0 hover:cursor-pointer text-transparent">
            curosr overlay
          </FlexFull>
          <FlexFull className="bg-slate-900/90 rounded-b-none px-[1vh] py-[0.5vh] text-[2.3vh] textShadow text-fuchsia-100">
            <Text>{portfolioItem.title}</Text>
          </FlexFull>
          <HStackFull gap="gap-[0px]">
            <VStack className="w-40%">
              {portfolioItem.projectImages.slice(0, 3).map((image, index) => (
                <Box className="shadowBroadLoose border-970-md" key={index}>
                  <Image
                    src={image.src}
                    alt={portfolioItem.title}
                    className="w-[13vh] h-[13vh]"
                  />
                </Box>
              ))}
            </VStack>
            <VStack className="w-60% pr-[2vh] textShadow">
              <FlexFull>
                <Text className="text-[2.5vh] text-fuchsia-100 ">
                  {heading}
                </Text>
              </FlexFull>
              <Text noOfLines={13}>{paragraph}</Text>
            </VStack>
          </HStackFull>
        </VStackFull>
      </NavLink>
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
