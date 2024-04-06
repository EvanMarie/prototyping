import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function StickyLabeledSection({
  children,
  menuGap = "gap-[5vh]",
  sectionPadding = "pb-[0px]",
  stickyTopPosition = "top-[3vh]",
  labelClassName = "",
  labelText,
  topPadding = "pt-[5vh]",
  menuSectionWidth = "w-[8vw]",
  contentSectionWidth = "w-[92vw]",
  menuSectionClassName,
  menuLabelJustify = "justify-end",
  labelRotation = "-rotate-90",
  contentSectionClassName,
  id,
}: {
  children: React.ReactNode;
  menuGap?: string;
  sectionPadding?: string;
  stickyTopPosition?: string;
  labelClassName?: string;
  labelText: string;
  topPadding?: string;
  menuSectionWidth?: string;
  contentSectionWidth?: string;
  menuSectionClassName?: string;
  menuLabelJustify?: string;
  labelRotation?: string;
  id?: string;
  contentSectionClassName?: string;
}) {
  return (
    <HStackFull gap={menuGap} className={`relative ${sectionPadding}`} id={id}>
      <Flex
        className={`${menuSectionWidth} ${menuSectionClassName} ${menuLabelJustify} ${topPadding}`}
      >
        <Box
          className={`${labelRotation} h-fit sticky ${stickyTopPosition} ${labelClassName}`}
          style={{ transformOrigin: "100% 0" }}
        >
          {labelText}
        </Box>
      </Flex>
      <VStackFull
        className={`h-fit ${contentSectionWidth} ${contentSectionClassName}`}
        gap="gap-[0px]"
      >
        {children}
      </VStackFull>
    </HStackFull>
  );
}
