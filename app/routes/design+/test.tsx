import { useRef } from "react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import { IParallax } from "@react-spring/parallax";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

import Ticker from "../consciousness-ai+/components/ticker";
import Flex from "~/components/buildingBlocks/flex";
import Center from "~/components/buildingBlocks/center";
import Text from "~/components/buildingBlocks/text";

const itemNumbers = Array.from({ length: 3 }, (_, i) => i + 1);

export default function Test() {
  function TickerItem({ itemNumber }: { itemNumber: number }) {
    return (
      <Center className="p-[1vh] bg-col-490 text-col-100 textShadow shadowNarrowNormal border-970-md">
        <Text>Item: {String(itemNumber)}</Text>
      </Center>
    );
  }
  return (
    <TransitionFull className="relative">
      <LayoutContainer className="relative overflow-y-auto">
        <Flex className="w-[40vh] bg-col-950 p-[2vh] h-fit">
          <Ticker
            speed={70}
            items={itemNumbers.map((itemNumber) => (
              <TickerItem itemNumber={itemNumber} />
            ))}
          />
        </Flex>
      </LayoutContainer>
    </TransitionFull>
  );
}
