import { useRef } from "react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax } from "@react-spring/parallax";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

import Ticker from "../consciousness-ai+/components/ticker";

export default function Test() {
  const parallax = useRef<IParallax>(null);
  return (
    <TransitionFull className="relative">
      <LayoutContainer className="relative overflow-y-auto">
        <div>
          <Ticker speed={30}>
            <span>Item 1</span>
            <span>Item 2</span>
            <span>Item 3</span>
          </Ticker>
        </div>
      </LayoutContainer>
    </TransitionFull>
  );
}
