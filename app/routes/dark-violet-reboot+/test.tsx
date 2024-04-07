import CenterFull from "~/components/buildingBlocks/centerFull";
import ShiftingImages from "./components/shiftingImages";
import { useEffect, useState } from "react";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import AnimatedText from "~/components/specialty/animatedText";
import FlashCard from "~/routes/dark-violet-reboot+/components/portfolioFlashCard";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import PorfolioCard from "~/routes/dark-violet-reboot+/components/portfolioFlashCard";

export default function Test() {
  return (
    <LayoutContainer className="overflow-y-auto">
      <VStackFull className="h-fit">
        <CenterFull className="h-screen">THIS</CenterFull>
        <CenterFull className="h-screen">this</CenterFull>
      </VStackFull>
    </LayoutContainer>
  );
}
