import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import FlexFull from "~/components/buildingBlocks/flexFull";
import TopMenu from "./components/topMenu";
import Box from "~/components/buildingBlocks/box";
import GlowCursor from "./components/glowCursor";
import UnblurImage from "./components/unBlurImage";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import StickyLabeledSection from "./components/stickyLabeledSection";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import Wrap from "~/components/buildingBlocks/wrap";
import Center from "~/components/buildingBlocks/center";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import ShiftingImages from "./components/shiftingImages";
import AnimatedText from "~/components/specialty/animatedText";
import ShiftingComponents from "./components/shiftingComponents";
import { PortfolioItem, Projects } from "./components/data";
import ShiftingPortfolioCard from "./components/shiftingPortfolioCard";
import IndexPortfolioSection from "./components/indexPortfolioSection";
import IndexTopSection from "./components/indexTopSection";
import IndexAboutUsSection from "./components/indexAboutUsSection";
import IndexBlogSection from "./components/indexBlogSection";
import IndexChatSection from "./components/indexChatSection";
import IndexContactSection from "./components/indexContactSection";

function GetRandomDelay() {
  return Math.random() * (0.6 - 0.1) + 0.1;
}

export const labelStyles =
  "px-[1vh] py-[0.5vh] text-cyan-200 textShadow text-[3vh]";

const arrayOf6 = Array.from({ length: 6 }, (_, i) => i + 1);

export default function ConscioussnessIndex() {
  const genSectionStyles =
    "w-[75vw] h-[75vw] rounded-full shadowBroadLooser border-970-md";

  return (
    <TransitionFull className="overflow-y-auto text-slate-100">
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
