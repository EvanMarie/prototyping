import { NavLink } from "@remix-run/react";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStack from "~/components/buildingBlocks/hStack";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import ConsciousnessHeroMenu from "./components/heroMenu";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import Text from "~/components/buildingBlocks/text";

export default function ConscioussnessIndex() {
  return (
    <TransitionFull className="p-[1vh] xl:p-[2vh] xxl:p-[2.5vh]">
      <ConsciousnessHeroMenu />
      <Box>
        <Text className="text-zinc-100 kufam-font text-[3vh] absolute left-[30vh] top-[30vh]">
          What can you do with AI?
        </Text>
      </Box>
      <Box className="h-[60vh] w-[60vh] absolute top-[20vh] opacity-50">
        <Image src="/images/consciousnessFrontImage.png" alt="consciousness" />
      </Box>
    </TransitionFull>
  );
}
