import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavContainer from "~/components/buildingBlocks/navContainer";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import { darkGradient, shineyGradient } from "../components/styleVariables";

export default function BlogMain() {
  return (
    <LayoutContainer className="text-slate-100 relative">
      <NavContainer h="h-[6vh]" bg={shineyGradient}>
        BLOG MAIN
      </NavContainer>
      <VStackFull
        className="h-[94vh] fixed top-[6vh]"
        style={{ maxHeight: "96svh" }}
      >
        Content
      </VStackFull>
    </LayoutContainer>
  );
}
