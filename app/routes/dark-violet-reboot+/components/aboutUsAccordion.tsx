import { useState, ReactNode, useRef, useEffect } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components//buildingBlocks/text";
import Icon from "~/components/buildingBlocks/icon";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import { aboutUsElementWidth } from "./aboutUsSection";

interface AccordionProps {
  title: string;
  children: ReactNode;
  titleStyles?: string;
  contentStyles?: string;
  isOpen: boolean;
  // setIsOpen: (isOpen: boolean) => void;
  clickAccordion: () => void;
}

export default function AboutUsAccordion({
  title,
  children,
  isOpen,
  clickAccordion,
  titleStyles = "text-slate-100 textShadow ",
  contentStyles = "bg-slate-900/70 text-slate-100 textShadow py-[1vh] md:w-90%",
}: AccordionProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen, contentRef.current?.scrollHeight]);

  return (
    <VStackFull
      className="overflow-hidden rounded-none"
      gap="gap-[0px]"
      align="items-start"
    >
      <button
        className={`w-full text-left p-[1vh]  ${titleStyles} transition-300 rounded-none `}
        // onClick={() => setIsOpen(!isOpen)}
        onClick={clickAccordion}
      >
        <CenterHorizontalFull>
          <HStackFull
            className={`rounded-none justify-between h-full items-center ${aboutUsElementWidth}`}
            hoverCursor="hover:cursor-pointer"
          >
            <Text className="text-md-tight">{title}</Text>
            <Icon
              icon={isOpen ? BiChevronUp : BiChevronDown}
              iconClassName="text-[3vh]"
            />
          </HStackFull>
        </CenterHorizontalFull>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`transition-500 rounded-none ${
          isOpen ? "overflow-visible" : "overflow-hidden"
        } w-full`}
      >
        <CenterHorizontalFull>
          <div
            className={`px-[2vh] py-[1vh] w-full ${contentStyles} flex flex-col`}
          >
            {children}
          </div>
        </CenterHorizontalFull>
      </div>
    </VStackFull>
  );
}
