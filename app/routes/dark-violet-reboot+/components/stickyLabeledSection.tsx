import Box from "~/components/buildingBlocks/box";
import Flex from "~/components/buildingBlocks/flex";
import FlexFull from "~/components/buildingBlocks/flexFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function StickyLabeledSection({
  children,
  menuGap = "gap-[5vh]",
  sectionPadding = "pb-[0px]",
  stickyTopPosition = "top-[3vh]",
  labelClassName,
  labelText,
  topPadding,
  menuSectionWidth = "w-[0.2vw]",
  contentSectionWidth = "w-[95vw]",
  menuSectionClassName,
  menuLabelJustify = "justify-end",
  labelRotation = "-rotate-90",
  contentSectionClassName,
  contentPadding = "md:px[2vh] xl:px-[3vh]",
  spacerHeight = "h-[10vh]",
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
  contentPadding?: string;
  spacerHeight?: string;
}) {
  return (
    <VStackFull className="">
      <FlexFull className={`${spacerHeight} text-transparent`}>spacer</FlexFull>
      <HStackFull
        gap={menuGap}
        className={`relative justify-between ${sectionPadding}`}
        id={id}
      >
        <Flex
          className={`${menuSectionWidth} ${menuSectionClassName} ${menuLabelJustify} ${topPadding}`}
        >
          <Box
            className={`${labelRotation} h-fit sticky ${stickyTopPosition} ${labelClassName}`}
            style={{ transformOrigin: "100% 0" }}
          >
            <Text className="whitespace-nowrap">{labelText}</Text>
          </Box>
        </Flex>
        <VStackFull
          className={`${contentSectionWidth} ${contentSectionClassName} ${contentPadding}`}
          gap="gap-[0px]"
        >
          {children}
        </VStackFull>
      </HStackFull>
    </VStackFull>
  );
}
