import Box from "~/components/buildingBlocks/box";
import { BlogPost } from "../components/tempBlogs";
import Image from "~/components/buildingBlocks/image";
import Transition from "~/components/buildingBlocks/transition";
import { dummyBlogs } from "../components/tempBlogs";
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

function MasonryBlog({ blogItems }: { blogItems: BlogPost[] }) {
  function MasonryBox({ item }: { item: BlogPost }) {
    const randomSizes = [
      // "h-[30vh]",
      // "h-[35vh]",
      // "h-[40vh]",
      {
        cardHeight: "h-[45vh]",
        titleHeight: "text-[2vh]",
        authorDateHeight: "text-[1.9vh]",
        paragraphHeight: "text-[1.8vh]",
      },
      {
        cardHeight: "h-[50vh]",
        titleHeight: "text-[2vh]",
        authorDateHeight: "text-[1.9vh]",
        paragraphHeight: "text-[1.8vh]",
      },
      {
        cardHeight: "h-[55vh]",
        titleHeight: "text-[2vh]",
        authorDateHeight: "text-[1.9vh]",
        paragraphHeight: "text-[1.8vh]",
      },
      {
        cardHeight: "h-[60vh]",
        titleHeight: "text-[2vh]",
        authorDateHeight: "text-[1.9vh]",
        paragraphHeight: "text-[1.8vh]",
      },
    ];
    const randomSize =
      randomSizes[Math.floor(Math.random() * randomSizes.length)];

    return (
      <Transition duration={0.6}>
        <div
          key={item.id}
          data-id={item.id}
          className={`${randomSize.cardHeight} w-full p-[1vh] overflow-hidden`}
        >
          <Box className="w-full h-full overflow-hidden rounded-[3vh] shadowWideLoose relative">
            <Image
              src={item.image}
              alt="random"
              w="w-full"
              className="w-full h-full object-cover object-center border-970-sm rounded-[3vh] absolute top-0 left-0 right-0 bottom-0"
            />
            <VStackFull
              className={`absolute top-0 bottom-0 right-0 left-0 bg-indigo-900/70 bg-gradient-to-t from-fuchsia-900/40 via-purple-800-40 to-cyan-900/40 rounded-[3vh] p-[1vh]`}
            >
              <Text className={`${randomSize.titleHeight}`}>{item.title}</Text>
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
                  {item.tags.map((tag) => (
                    <Text
                      key={tag}
                      className={`${darkGradient} text-cyan-300 px-[1vh] border-970-md shadowBroadNormal ${randomSize.authorDateHeight}`}
                    >
                      {tag}
                    </Text>
                  ))}
                </HStackFull>
              ) : (
                <> </>
              )}

              <Text noOfLines={4} className={`${randomSize.paragraphHeight}`}>
                {item.paragraphs[0]}
              </Text>
              <NavLink to={`/blog/${item.id}`}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
                >
                  <Flex
                    className={`${staggerMenuLinkStyles} h-[3.5vh] px-[2vh] hover:cursor-pointer text-[2vh]`}
                  >
                    view this post
                  </Flex>
                </motion.div>
              </NavLink>
            </VStackFull>
          </Box>
        </div>
      </Transition>
    );
  }

  return (
    <Box className="w-full h-fit columns-1 md:columns-2 xl:columns-3 fullHD:columns-4 gap-0">
      {blogItems.map((item, index) => (
        <MasonryBox item={item as BlogPost} key={index} />
      ))}
    </Box>
  );
}

export default function MainBlog() {
  return (
    <FlexFull className="h-[95vh] overflow-y-auto">
      <MasonryBlog blogItems={dummyBlogs as any} />
    </FlexFull>
  );
}
