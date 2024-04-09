import CenterFull from "~/components/buildingBlocks/centerFull";
import FadeInOut from "./fadeInDisappear";
import SVGMultiPaths from "~/components/specialty/svgPathsAnimate";
import { Path, resortifi } from "./logoSVG";
import { bgGradient } from "..";

export default function OpeningResortifi() {
  return (
    <FadeInOut
      className="h-screen w-screen absolute top-0 left-0"
      fadeIn={false}
    >
      <CenterFull
        className={`h-screen rounded-none bg-yellow-300 ${bgGradient} insetShadowXl`}
      >
        <SVGMultiPaths
          paths={resortifi as Path[]}
          viewBox="0 0 262 77"
          containerClassName="h-[20vh] w-full"
        />
      </CenterFull>
    </FadeInOut>
  );
}
