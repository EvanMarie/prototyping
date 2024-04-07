import { useState } from "react";
import { PortfolioItem } from "./data";
import Flex from "~/components/buildingBlocks/flex";
import IconButton from "~/components/buildingBlocks/iconButton";
import { GitHubIcon, InfoIcon, LinkIcon } from "styles";
import Button, { ButtonType } from "~/components/buildingBlocks/button";
import { TooltipPlacement } from "~/components/buildingBlocks/tooltip";
import Modal from "~/components/buildingBlocks/modal";
import ModalContent from "~/components/buildingBlocks/modalContent";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Heading from "~/components/buildingBlocks/headingText";

export default function ProjectIconButtons({
  project,
  direction = "flex-col",
  gap = "gap-[0.7vh]",
  className = "h-full justify-evenly",
  buttonType = "smallNormal",
  tooltipPlacement = "left",
  isModalModal = false,
}: {
  project: PortfolioItem;
  direction?: string;
  gap?: string;
  className?: string;
  buttonType?: string;
  tooltipPlacement?: string;
  isModalModal?: boolean;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  return (
    <>
      <Flex
        className={`${direction} ${gap} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          icon={InfoIcon}
          type={buttonType as ButtonType}
          containerClassName="p-[0.5vh] rounded-full"
          label="info"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          onClick={() => setModalOpen(true)}
        />

        <IconButton
          icon={LinkIcon}
          type={buttonType as ButtonType}
          containerClassName="p-[0.5vh] rounded-full"
          label="link"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          to={project.link === "coming soon" ? undefined : project.link}
          onClick={
            project.link === "coming soon"
              ? () => setComingSoonOpen(true)
              : undefined
          }
          isExternal
        />

        <IconButton
          icon={GitHubIcon}
          containerClassName="p-[0.5vh] rounded-full"
          type={buttonType as ButtonType}
          label="github"
          tooltipPlacement={tooltipPlacement as TooltipPlacement}
          to={project.github}
          isExternal
        />
      </Flex>
      {/* <Modal
        isOpen={modalOpen}
        setModalOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        showBottomClose={false}
        overlayZIndex={isModalModal ? 120 : undefined}
        modalZIndex={isModalModal ? 150 : undefined}
        modalSize="w-screen h-screen md:h-[90vh] max-h-[90vh] overflow-y-auto overflow-x-hidden md:w-80% xl:w-70% xxl:w-60%"
      >
        <ModalContent setModalOpen={setModalOpen} showBottomClose={false}>
          <ProjectModalInfo
            project={project}
            onClose={() => setModalOpen(false)}
          />
        </ModalContent>
      </Modal> */}

      <Modal
        isOpen={comingSoonOpen}
        setModalOpen={setComingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        modalSize="w-[80vw] h-50% md:h-1/2 md:w-2/3 lg:h-1/3 xl:w-1/3 xxl:w-1/4"
        footerClassName="bg-col-980"
        showBottomClose={false}
      >
        <FlexFull
          className="h-full z-10 absolute top-0 left-0 shadowBroadNormal border-550-lg 
    bg-400-radial6op75"
        >
          <VStackFull className="h-full justify-between">
            <FlexFull className="bg-col-990 px-[2vh] py-[0.5vh]">
              <Heading
                text="Coming soon!"
                layout="text-xl-normal"
                color="text-col-500"
                shadow="textShadow"
              />
            </FlexFull>
            <VStackFull className="h-full justify-center items-center">
              {" "}
              <Heading
                text="😄 This project will go live soon."
                layout="text-lg-loose"
                color="text-col-pink"
              />
              <Heading
                text="Check back for developments."
                layout="text-lg-loose"
                color="text-col-pink"
              />
            </VStackFull>
            <FlexFull className="h-[5vh] bg-col-990 justify-center items-center">
              <Button
                buttonText="Close"
                type="smallNormal"
                onClick={() => setComingSoonOpen(false)}
              />
            </FlexFull>
          </VStackFull>
        </FlexFull>
      </Modal>
    </>
  );
}
