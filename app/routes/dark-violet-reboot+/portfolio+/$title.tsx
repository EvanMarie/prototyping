import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { CloseIcon, ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import Text from "~/components/buildingBlocks/text";
import PortfolioItemComponent from "../components/portfolioItemComponent";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import CenterFull from "~/components/buildingBlocks/centerFull";
import FlowerOfLifeOnScroll from "../components/flowerOfLifeOnScroll";

export default function PortfolioItem() {
  return (
    <TransitionFull className="h-full">
      <LayoutContainer className="md:p-[2vh] xl:px-[5vw]">
        <FlexFull className="h-fit bg-gradient-to-br from-violet-400 via-indigo-400 to-fuchsia-400 shadowBroadLooser p-[0.3vh]">
          <PortfolioItemComponent />
        </FlexFull>
      </LayoutContainer>
    </TransitionFull>
  );
}
