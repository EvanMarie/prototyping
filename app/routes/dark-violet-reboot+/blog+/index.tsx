import Box from "~/components/buildingBlocks/box";
import { BlogPost } from "./tempBlogs";
import Image from "~/components/buildingBlocks/image";
import Transition from "~/components/buildingBlocks/transition";
import { dummyBlogs } from "./tempBlogs";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import Text from "~/components/buildingBlocks/text";
import FormatDate from "~/utils/formatDate";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import {
  darkGradient,
  staggerMenuLinkStyles,
} from "../components/styleVariables";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import TransitionFull from "~/components/buildingBlocks/TransitionFull";
import HStack from "~/components/buildingBlocks/hStack";
import Icon from "~/components/buildingBlocks/icon";
import { TbBook2 } from "react-icons/tb";

function MasonryBlog({ blogItems }: { blogItems: BlogPost[] }) {
  function MasonryBox({ item }: { item: BlogPost }) {
    const randomSizes = [
      // "h-[30vh]",
      // "h-[35vh]",
      // "h-[40vh]",
      {
        cardHeight: "h-[30vh]",
        titleHeight: "text-[2vh] leading-tight",
        authorDateHeight: "text-[1.6vh] leading-tight",
        paragraphHeight: "text-[1.4vh] leading-tight",
      },
      {
        cardHeight: "h-[36vh]",
        titleHeight: "text-[2.2vh] leading-tight",
        authorDateHeight: "text-[1.8vh] leading-tight",
        paragraphHeight: "text-[1.6vh] leading-tight",
      },
      {
        cardHeight: "h-[42vh]",
        titleHeight: "text-[2.4vh] leading-tight",
        authorDateHeight: "text-[2vh] leading-tight",
        paragraphHeight: "text-[1.8vh]",
      },
      {
        cardHeight: "h-[48vh]",
        titleHeight: "text-[2.5vh] leading-tight",
        authorDateHeight: "text-[2vh] leading-tight",
        paragraphHeight: "text-[1.8vh]",
      },
      {
        cardHeight: "h-[54vh]",
        titleHeight: "text-[3vh] leading-tight",
        authorDateHeight: "text-[2.5vh] leading-tight",
        paragraphHeight: "text-[2vh]",
      },
      // {
      //   cardHeight: "h-[70vh]",
      //   titleHeight: "text-[3.5vh]",
      //   authorDateHeight: "text-[3vh]",
      //   paragraphHeight: "text-[2.2vh]",
      // },
    ];
    const randomSize =
      randomSizes[Math.floor(Math.random() * randomSizes.length)];

    return (
      <Transition duration={0.6}>
        <div
          key={item.id}
          data-id={item.id}
          className={`${randomSize.cardHeight} w-full p-[1.2vh] overflow-hidden`}
        >
          <motion.div className="w-full h-full overflow-hidden shadowWideLoose relative">
            <Image
              src={item.image}
              alt="random"
              w="w-full"
              className="w-full h-full object-cover object-center border-970-sm absolute top-0 left-0 right-0 bottom-0"
            />
            <VStackFull
              className={`absolute top-0 bottom-0 right-0 left-0 bg-slate-900/70 bg-gradient-to-t from-fuchsia-900/60 via-purple-800-60 to-indigo-900/60 backdrop-blur-sm p-[2vh] justify-between hover:insetShadowXl transition-400 h-full`}
            >
              <Text
                className={`${randomSize.titleHeight} text-cyan-300 textShadow`}
              >
                {item.title}
              </Text>
              <HStackFull
                className={`justify-evenly ${randomSize.authorDateHeight}`}
              >
                <Text>{item.author}</Text>
                <Text>
                  <FormatDate inputDate={item.date} format="text" dateOnly />
                </Text>
              </HStackFull>
              {item.tags.length > 0 ? (
                <HStackFull gap="gap-[1.5vh]" className="justify-center">
                  {item.tags.slice(0, 2).map((tag) => (
                    <Text
                      key={tag}
                      className={`${darkGradient} text-cyan-300 px-[1vh] border-970-md shadowBroadNormal`}
                    >
                      {tag}
                    </Text>
                  ))}
                </HStackFull>
              ) : (
                <> </>
              )}

              <Text noOfLines={3} className={`${randomSize.paragraphHeight}`}>
                {item.paragraphs[0]}
              </Text>
              <NavLink to={`/dark-violet-reboot/blog/${item.id}`}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
                >
                  <HStack
                    className={`${staggerMenuLinkStyles} h-[3.5vh] px-[1vh] hover:cursor-pointer text-[1.5vh] md:text-[2vh]`}
                  >
                    <Icon icon={TbBook2} iconClassName="text-[2.5vh]" />
                    view this post
                  </HStack>
                </motion.div>
              </NavLink>
            </VStackFull>
          </motion.div>
        </div>
      </Transition>
    );
  }

  return (
    <Box className="w-full h-fit columns-1 md:columns-2 xxl:columns-3 fullHD:columns-4 gap-0">
      {blogItems.map((item, index) => (
        <MasonryBox item={item as BlogPost} key={index} />
      ))}
    </Box>
  );
}

export default function MainBlog() {
  return (
    <TransitionFull className="h-[95vh] overflow-y-auto p-[1vh]">
      <MasonryBlog blogItems={dummyBlogs as any} />
    </TransitionFull>
  );
}
