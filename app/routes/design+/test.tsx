import { useRef } from "react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import Text from "~/components/buildingBlocks/text";
import Box from "~/components/buildingBlocks/box";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterFull from "~/components/buildingBlocks/centerFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";

export default function Test() {
  const parallax = useRef<IParallax>(null);
  return (
    <TransitionFull className="relative">
      <LayoutContainer className="relative overflow-y-auto">
        <VStackFull>
          <HStackFull gap="gap-[0px]" className="relative pb-[10vh]">
            <Flex className="w-[20vw] h-[300vh] bg-zinc-100/40 justify-end">
              <Box className="-rotate-90 h-fit pr-[3vh] sticky top-[3vh] bg-blue-400">
                Menu One
              </Box>
            </Flex>
            <VStackFull className="h-fit w-[80vw]" gap="gap-[0px]">
              <FlexFull className="h-screen  bg-zinc-200/40">Page One</FlexFull>
              <FlexFull className="h-screen bg-zinc-300/40 z-10">
                Section One - Page One
              </FlexFull>
              <FlexFull className="h-screen  bg-zinc-400/40 z-10">
                Section One - Page Two
              </FlexFull>
            </VStackFull>
          </HStackFull>
          <HStackFull gap="gap-[0px]" className="relative">
            <Flex className="w-[20vw] h-[300vh] bg-zinc-100/40 justify-end">
              <Box className="-rotate-90 h-fit pr-[3vh] sticky top-[3vh] bg-blue-400">
                Menu Two
              </Box>
            </Flex>
            <VStackFull className="h-fit w-[80vw]" gap="gap-[0px]">
              <FlexFull className="h-screen  bg-zinc-200/40">Page One</FlexFull>
              <FlexFull className="h-screen bg-zinc-300/40 z-10">
                Section Two Page One
              </FlexFull>
              <FlexFull className="h-screen  bg-zinc-400/40 z-10">
                Section Two Page Two
              </FlexFull>
            </VStackFull>
          </HStackFull>
        </VStackFull>
      </LayoutContainer>
    </TransitionFull>
  );
}
