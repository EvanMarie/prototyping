import { NavLink } from "@remix-run/react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ConsciousnessHeroMenu from "./components/heroMenu";

export default function ConscioussnessIndex() {
  return (
    <TransitionFull className="p-[1vh] xl:p-[2vh] xxl:p-[2.5vh]">
      <ConsciousnessHeroMenu />
    </TransitionFull>
  );
}
