import { useState } from "react";
import { IoMdExpand } from "react-icons/io";
import { CloseIcon, ExpandIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import Button from "~/components/buildingBlocks/button";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import IconButton from "~/components/buildingBlocks/iconButton";
import Image from "~/components/buildingBlocks/image";
import Modal from "~/components/buildingBlocks/modal";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function RadialProgressiveImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Flex
        className="shadowBroadLoose border-970-md rounded-md relative hover:cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        <Box className="absolute top-[0.5vh] right-[0.5vh] bg-slate-500/90 px-[0.5vh] border-[0.2vh] border-slate-900 shadowBroadLoose hover:bg-slate-900 transition-400">
          <IconButton
            icon={IoMdExpand}
            type="unstyled"
            iconClassName="text-[2.1vh]"
            onClick={() => setExpanded(true)}
          />
        </Box>
        <Image src={image} alt={title} className="w-full h-full max-h-[60vh]" />
      </Flex>
      <Modal
        isOpen={expanded}
        setModalOpen={setExpanded}
        onClose={() => setExpanded(false)}
        modalSize="w-full h-fit max-h-screnn md:w-[90vw] lg:w-[80vw]"
        showTopClose={false}
        showBottomClose={false}
        overlayBlur="backdrop-blur-md"
        overlayColor="bg-gradient-to-b from-violet-900/40 via-indigo-900/40 to-fuchsia-900/40 "
      >
        <VStackFull className="h-full justify-between bg-slate-900 bg-gradient-to-b from-violet-900/70 via-indigo-900/70 to-violet-900/70 shadowBroadLoose border-970-md">
          <HStackFull className="h-[6vh] justify-between px-[1vh] py-[0.5vh] items-center bg-slate-900/60 border-b-970-md rounded-b-none">
            <Text className="text-cyan-300 text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter">
              {title}
            </Text>

            <Flex className="h-full w-7% justify-end">
              <IconButton icon={CloseIcon} onClick={() => setExpanded(false)} />
            </Flex>
          </HStackFull>
          <FlexFull className="py-[5vh] xl:py-[3vh] px-[1vh] justify-center">
            <Flex className="shadowBroadLoose border-970-md rounded-md max-h-[85vh] max-w-[98vw] md:max-w-[85vw] lg:max-w-[75vw]">
              <Image
                src={image}
                alt={title}
                className="w-full h-full max-h-[75vh] max-w-[95vw]"
              />
            </Flex>
          </FlexFull>
          <CenterHorizontalFull className="h-[4vh] p-[1vh] items-center bg-slate-900/60 border-t-970-md rounded-t-none">
            <Button
              iconLeft={CloseIcon}
              onClick={() => setExpanded(false)}
              buttonText="close"
              type="smallNormal"
            />
          </CenterHorizontalFull>
        </VStackFull>
      </Modal>
    </>
  );
}
