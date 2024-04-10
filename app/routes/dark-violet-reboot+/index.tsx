import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import GlowCursor from "./components/glowCursor";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import IndexPortfolioSection from "./components/indexPortfolioSection";
import IndexTopSection from "./components/indexTopSection";
import IndexAboutUsSection from "./components/indexAboutUsSection";
import IndexBlogSection from "./components/indexBlogSection";
import IndexChatSection from "./components/indexChatSection";
import IndexContactSection from "./components/indexContactSection";
import ScrollToTop from "./components/scrollToTopMenu";
import { useRef } from "react";

function GetRandomDelay() {
  return Math.random() * (0.6 - 0.1) + 0.1;
}
export const labelStyles =
  "px-[1vh] py-[0.5vh] text-cyan-200 textShadow text-[3vh]";

export default function DarkVioletIndex() {
  const genSectionStyles =
    "w-[75vw] h-[75vw] rounded-full shadowBroadLooser border-970-md";
  const scrollContainerRef = useRef(null);
  return (
    <TransitionFull
      className="overflow-y-auto text-slate-100 relative"
      ref={scrollContainerRef}
    >
      <ScrollToTop scrollContainerRef={scrollContainerRef} />
      <GlowCursor />
      <VStackFull className="h-fit">
        <IndexTopSection />
        {/* ************************* PORTFOLIO ************************* */}
        <IndexPortfolioSection />
        {/* ************************* US  ************************* */}
        <IndexAboutUsSection />
        {/* ************************* BLOG  ************************* */}
        <IndexBlogSection />
        {/* ************************* CHAT ************************* */}
        <IndexChatSection />
        {/* ************************* CONTACT ************************* */}
        <IndexContactSection />
      </VStackFull>
    </TransitionFull>
  );
}
