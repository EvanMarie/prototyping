import FlexFull from "~/components/buildingBlocks/flexFull";
import { BlogPost } from "./tempBlogs";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Text from "~/components/buildingBlocks/text";
import FormatDate from "~/utils/formatDate";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import {
  darkGradient,
  shineyGradient,
  staggerMenuLinkStyles,
} from "./styleVariables";
import Flex from "~/components/buildingBlocks/flex";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import Icon from "~/components/buildingBlocks/icon";
import { PiBookOpenText } from "react-icons/pi";
import HStack from "~/components/buildingBlocks/hStack";

export default function ShiftingBlogPanel({ blog }: { blog: BlogPost }) {
  return (
    <FlexFull
      className="p-[1vh] h-full items-center justify-center"
      style={{ maxHeight: "100svh" }}
    >
      <VStackFull className="p-[1vh] sm:p-[2vh] flex-col items-center gap-[2vh] bg-cyan-700/60 bg-gradient-to-b from-indigo-900-75 to-purple-900-75 border-970-md shadowBroadNormal md:w-[73vh] xl:w-full xl:max-h-[80vh] xxl:w-[80vw]">
        <VStackFull gap="gap-[2vh]" className="text-center">
          <VStackFull gap="gap-[1vh]">
            <Text className="text-cyan-300 sm:text-[2.3vh] xl:text-[3vh] textShadow">
              {blog.title}
            </Text>
            <HStackFull className="justify-between xl:justify-center xl:gap-[3vh] px-[2vh] sm:text-[2vh] md:px-[4vh] py-[1vh] md:text-[2.3vh] xl:text-[3vh] xl:w-60% text-purple-300 textShadow">
              <Text>{blog.author}</Text>
              <Text>
                <FormatDate inputDate={blog.date} format="text" dateOnly />
              </Text>
            </HStackFull>
          </VStackFull>
          <FlexFull className="flex-col xl:flex-row gap-[1vh] sm:gap-[2vh]">
            <VStackFull
              gap="gap-[1vh] xl:gap-[2vh]"
              className="text-slate-100 sm:text-[2vh] textShadow xl:w-5/12"
            >
              {blog.tags.length > 0 ? (
                <HStackFull gap="gap-[1.5vh]" className="justify-center">
                  {blog.tags.map((tag) => (
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
              {blog.image && (
                <CenterHorizontalFull className="">
                  <Box className="w-[70vw] h-[70vw] sm:w-[55vw] sm:h-[55vw] md:w-[40vh] md:h-[40vh] xl:w-[50vh] xl:h-[50vh] border-970-md shadowBroadNormal">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full"
                    />
                  </Box>
                </CenterHorizontalFull>
              )}
            </VStackFull>

            <VStackFull
              className="xl:w-7/12 justify-center text-[1.9vh] text-left xl:text-[2.1vh] px-[1vh] sm:px-[2vh] xxl:text-[2.3vh]"
              gap="gap-[2.5vh]"
            >
              <Text noOfLines={6}>{blog.paragraphs[0]}</Text>
              <FlexFull
                className="hidden xl:inline"
                style={{ fontSize: "inherit" }}
              >
                <Text noOfLines={8}>{blog.paragraphs[1]}</Text>
              </FlexFull>
            </VStackFull>
          </FlexFull>
          <HStackFull className="justify-evenly">
            <NavLink to={`/blog/${blog.id}`}>
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

            <NavLink to={`/dark-violet-reboot/blog`}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.9, transition: { duration: 0.4 } }}
              >
                <HStack
                  className={`${staggerMenuLinkStyles} h-[3.5vh] px-[2vh] hover:cursor-pointer text-[2vh]`}
                >
                  <Icon icon={PiBookOpenText} iconClassName="text-[2.5vh]" />
                  <Text>view all posts</Text>
                </HStack>
              </motion.div>
            </NavLink>
          </HStackFull>
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
