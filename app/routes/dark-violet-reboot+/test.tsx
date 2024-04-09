import { useRef } from "react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import { IParallax, Parallax } from "@react-spring/parallax";
import FlowerOfLifeOnScroll from "./components/flowerOfLifeOnScroll";
import CenterFull from "~/components/buildingBlocks/centerFull";

export default function Test() {
  const parallax = useRef<IParallax>(null);
  return (
    <LayoutContainer className="overflow-y-auto ">
      {/* <Parallax ref={parallax} pages={4}> */}
      <CenterFull className="h-[200vh]">
        <FlowerOfLifeOnScroll />
      </CenterFull>
      {/* </Parallax> */}
    </LayoutContainer>
  );
}
