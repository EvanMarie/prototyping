import { useState, ReactNode, useRef, useEffect } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components//buildingBlocks/text";
import Icon from "~/components/buildingBlocks/icon";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionProps {
  title: string;
  children: ReactNode;
  titleStyles?: string;
  contentStyles?: string;
}

export default function AboutUsAccordion({
  title,
  children,
  //   titleStyles = "bg-slate-900 bg-gradient-to-b from-violet-600/30 via-indigo-700/30 to-fuchsia-700/30 hover:bg-slate-600 transition-400 text-col-100 textShadow",
  titleStyles = "text-slate-100 textShadow",
  contentStyles = "bg-slate-900/70 text-col-100 textShadow",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`w-full text-left p-[1vh]  ${titleStyles} transition-300 rounded-none`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HStackFull
          className="rounded-none justify-between h-full items-center"
          hoverCursor="hover:cursor-pointer"
        >
          <Text className="text-md-tight">{title}</Text>

          <Icon
            icon={isOpen ? BiChevronUp : BiChevronDown}
            iconClassName="text-[3vh]"
          />
        </HStackFull>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`transition-500 rounded-none ${
          isOpen ? "overflow-visible" : "overflow-hidden"
        } w-full`}
      >
        <div
          className={`px-[2vh] py-[1vh] w-full ${contentStyles} rounded-none`}
        >
          {children}
        </div>
      </div>
    </VStackFull>
  );
}
