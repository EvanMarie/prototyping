import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { CloseIcon, ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import Text from "~/components/buildingBlocks/text";

export default function PortfolioItem() {
  const parallax = useRef<IParallax>(null!);
  return (
    <LayoutContainer className="md:p-[2vh]">
      <FlexFull className="h-fit bg-gradient-to-br from-violet-400 via-indigo-400 to-fuchsia-400 shadowBroadLooser p-[0.3vh]">
        <FlexFull className="h-fit min-h-[95vh] bg-slate-800 p-[0.5vh] insetShadowXl text-slate-100 relative pt-[6vh]">
          <HStackFull className="absolute top-[1vh] right-[1vh] justify-between pl-[2vh]">
            <Text>HEADING</Text>
            <Box>
              <NavIconButton
                icon={CloseIcon}
                to="/dark-violet-reboot/#portfolio"
              />
            </Box>
          </HStackFull>
          <FlexFull>
            <Parallax ref={parallax} pages={6} className="hide-scrollbar">
              <ParallaxLayer sticky={{ start: 1, end: 2 }}>THIS</ParallaxLayer>
              <ParallaxLayer sticky={{ start: 2, end: 3 }}>THAT</ParallaxLayer>
              <ParallaxLayer sticky={{ start: 3, end: 5 }}>
                THE OTHER
              </ParallaxLayer>
            </Parallax>{" "}
          </FlexFull>
        </FlexFull>
      </FlexFull>
    </LayoutContainer>
  );
}
