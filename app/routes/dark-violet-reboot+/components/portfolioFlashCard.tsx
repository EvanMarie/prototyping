import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import Box from "../../../components/buildingBlocks/box";
import Center from "../../../components/buildingBlocks/center";
import { PortfolioItem } from "~/routes/dark-violet-reboot+/components/data";
import Image from "../../../components/buildingBlocks/image";
import FlexFull from "../../../components/buildingBlocks/flexFull";
import Flex from "../../../components/buildingBlocks/flex";
import CenterHorizontalFull from "../../../components/buildingBlocks/centerHorizontalFull";
import VStackFull from "../../../components/buildingBlocks/vStackFull";
import Text from "../../../components/buildingBlocks/text";
import PortfolioIconButtons from "~/routes/dark-violet-reboot+/components/portfolioIcons";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStack from "~/components/buildingBlocks/vStack";

function FrontOfCard({ portofolioItem }: { portofolioItem: PortfolioItem }) {
  return (
    <Box className="h-full w-full">
      <Image
        src={portofolioItem.thumbnail}
        alt={portofolioItem.title}
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0"
      />
      <CenterHorizontalFull className="absolute bottom-0 left-0 right-0 bg-zinc-900/90 py-[0.5vh] rounded-t-none text-[2.3vh] textShadow text-fuchsia-300">
        {portofolioItem.title}
      </CenterHorizontalFull>
    </Box>
  );
}

function BackOfCard({ portofolioItem }: { portofolioItem: PortfolioItem }) {
  return (
    <VStackFull className="h-full bg-gray-300 bg-gradient-to-b from-violet-600/50 via-indigo-700/50 to-fuchsia-700/50 ">
      <FlexFull className="bg-zinc-900/90 rounded-b-none px-[1vh] py-[0.5vh] text-[2.3vh] textShadow text-fuchsia-300">
        <Text>{portofolioItem.title}</Text>
      </FlexFull>
      <HStackFull>
        <VStack className="w-30%">
          {portofolioItem.projectImages.slice(0, 3).map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={portofolioItem.title}
              className="w-[11vh] h-[11vh] rounded-md"
            />
          ))}
        </VStack>

        <VStack className="w-70%">
          <Text>{portofolioItem.description}</Text>
          <PortfolioIconButtons project={portofolioItem} direction="flex-row" />
        </VStack>
      </HStackFull>
    </VStackFull>
  );
}

export default function PortfolioCard({
  delay = 0,
  visibilityThreshold = "400px",
  porfolioItem,
}: {
  delay?: number;
  visibilityThreshold?: string;
  porfolioItem: PortfolioItem;
}) {
  const cardDimensions = "h-[43vh] w-[40vh]";
  const spring = {
    type: "spring",
    stiffness: 80,
    damping: 25,
    mass: 0.7,
    delay: delay,
  };

  return (
    <NavLink to={`/dark-violet-reboot/portfolio/${porfolioItem.id}`}>
      <motion.div
        initial={{ scale: 0, y: -300 }}
        whileInView={{ scale: 1, y: 0 }}
        whileTap={{ scale: 0.8 }}
        viewport={{
          once: true,
          amount: 1.0,
          margin: `-${visibilityThreshold} 0px 0px 0px`,
        }}
        transition={spring}
      >
        <Box className="perspective-100 group">
          <Box
            className={`${cardDimensions} transition-transform duration-1000 transform-style-3d group-hover:rotate-y-180`}
          >
            {/* FRONT OF CARD  */}
            <FlexFull className="h-full shadowBroadLoose border-970-md">
              <FrontOfCard portofolioItem={porfolioItem} />
            </FlexFull>
            {/* BACK OF CARD  */}
            <Center className="h-full w-full absolute inset-0 backface-hidden rotate-y-180 shadowBroadLoose">
              <BackOfCard portofolioItem={porfolioItem} />
            </Center>
          </Box>
        </Box>
      </motion.div>
    </NavLink>
  );
}
