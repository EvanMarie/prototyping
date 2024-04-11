import FlexFull from "~/components/buildingBlocks/flexFull";
import { Projects } from "./data";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Text from "~/components/buildingBlocks/text";
import Box from "~/components/buildingBlocks/box";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import { CloseIcon } from "styles";
import { useRef } from "react";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import NavLinkButton from "~/components/buildingBlocks/navLinkButton";
import { useNavigate, useParams } from "@remix-run/react";
import useEscapeKey from "~/utils/useEscapeKey";
import Flex from "~/components/buildingBlocks/flex";
import VStack from "~/components/buildingBlocks/vStack";
import { useScroll, motion } from "framer-motion";
import PortfolioTextSection from "./portfolioTextSection";
import Image from "~/components/buildingBlocks/image";
import { BlogPost } from "../blog+/tempBlogs";
import Wrap from "~/components/buildingBlocks/wrap";
import Center from "~/components/buildingBlocks/center";
import { darkGradient, shineyGradient } from "./styleVariables";
import FormatDate from "~/utils/formatDate";

export default function BlogItemComponent({
  blogPost,
}: {
  blogPost: BlogPost;
}) {
  const navigate = useNavigate();
  const scrollYRefSmall = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressSmall } = useScroll({
    container: scrollYRefSmall,
  });
  const scrollYRefLarge = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgressLarge } = useScroll({
    container: scrollYRefLarge,
  });
  const paragraphTextSize =
    "text-[2vh] sm:text-[2.2vh] lg:text-[2.1vh] xl:text-[2.3vh]";
  useEscapeKey(() => navigate("/dark-violet-reboot/blog"));

  return (
    <FlexFull className="bg-[url('https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/aurora.png?quality=60')] bg-center bg-cover">
      <VStackFull
        className="relative bg-gradient-to-br from-cyan-900/90 via-indigo-900/90 to-cyan-900/90 p-[0.5vh] insetShadowXl text-slate-100 pt-[6vh] border-900-md"
        style={{ height: "90svh" }}
      >
        {/* HEADER  */}
        <VStackFull className="absolute top-0 left-0 h-[6vh] bg-violet-800/80 border-b-970-md rounded-b-none">
          <HStackFull className="justify-between px-[1vh] py-[0.5vh] h-full items-center">
            <Flex className="w-93% h-full items-center">
              <Text className="text-fuchsia-100 text-[1.8vh] sm:text-[2vh] leading-[2.3vh] md:text-[2.7vh] md:leading-[3vh] leading-tighter textShadow">
                {blogPost.title}
              </Text>
            </Flex>
            <Flex className="h-full w-7% justify-end z-10">
              <NavIconButton icon={CloseIcon} to="/dark-violet-reboot/blog" />
            </Flex>
          </HStackFull>
          <motion.div
            className={`h-[0.6vh] rounded-l-none w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500  absolute bottom-0 left-0 lg:hidden`}
            style={{ scaleX: scrollYProgressSmall, transformOrigin: "left" }}
          />
        </VStackFull>

        {/* FOOTER  */}
        <CenterHorizontalFull className="absolute bottom-0 left-0 h-[4vh] p-[1vh] items-center bg-slate-900/60 border-t-970-md">
          <Box className="z-10">
            <NavLinkButton
              iconLeft={CloseIcon}
              to="/dark-violet-reboot/blog"
              buttonText="close"
              type="smallNormal"
            />
          </Box>
        </CenterHorizontalFull>

        {/* CONTENT SMALL */}
        <FlexFull className="flex lg:hidden overflow-hidden">
          <FlexFull
            ref={scrollYRefSmall}
            className="hide-scrollbar max-h-[79.5vh] overflow-y-auto flex-col z-10 "
          >
            {/* IMAGE  */}
            <VStackFull className="h-fit py-[1vh]" gap="gap-[2vh]">
              <VStackFull gap="gap-[2vh]">
                <Box className="h-[80vw] w-[80vw] sm:h-[70vw] sm:w-[70vw] md:h-[50vw] md:w-[50vw] border-970-md shadowBroadNormal">
                  <Image
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="h-full w-full"
                  />
                </Box>
                <VStackFull className="px-[1vh] sm:px-[2vh] md:px-[3vh]">
                  <HStackFull className="justify-between px-[1vh] text-[2.3vh] sm:text-[2.5vh] text-cyan-300 textShadow sm:w-80% md:w-70%">
                    <Text>{blogPost.author}</Text>{" "}
                    <Text>
                      {" "}
                      <FormatDate
                        inputDate={blogPost.date}
                        format="text"
                        dateOnly
                      />
                    </Text>
                  </HStackFull>
                  <VStackFull
                    align="items-start"
                    className="text-left text-[2vh]"
                    gap="gap-[0px]"
                  >
                    <Text
                      className={`text-fuchsia-300 textShadow ${paragraphTextSize}`}
                    >
                      Summary:
                    </Text>
                    <Text className={`${paragraphTextSize}`}>
                      {blogPost.summary}
                    </Text>
                  </VStackFull>
                  {blogPost.tags.length > 0 ? (
                    <Wrap className="justified-center gap-[1vh] py-[1vh]">
                      {blogPost.tags.map((tag) => (
                        <Text
                          key={tag}
                          className={`${darkGradient} text-cyan-300 px-[1vh] border-970-md shadowBroadNormal`}
                        >
                          {tag}
                        </Text>
                      ))}
                    </Wrap>
                  ) : (
                    <> </>
                  )}
                </VStackFull>
              </VStackFull>
              <VStackFull
                className="px-[1vh] sm:px-[2vh] md:px-[3vh] "
                gap="gap-[2vh]"
              >
                {blogPost.paragraphs.map((paragraph, index) => (
                  <CenterHorizontalFull
                    className={paragraphTextSize}
                    key={index}
                  >
                    <Text>{paragraph}</Text>
                  </CenterHorizontalFull>
                ))}
              </VStackFull>
            </VStackFull>
          </FlexFull>
        </FlexFull>

        {/* CONTENT LARGE */}
        <FlexFull className="hidden lg:flex">
          <FlexFull className="max-h-[79.8vh] z-10">
            <HStackFull className="h-full" gap="">
              <VStack className="w-[40vw] xl:w-[45vw] xxl:w-[50vw] p-[1vh] h-full flex-shrink-0">
                {/* INFORMATION  */}
                <VStackFull className="px-[1vh] sm:px-[2vh] md:px-[3vh] lg:p-[0.5vh]">
                  <FlexFull className="px-[1vh] text-[2.2vh] text-cyan-300 textShadow flex-col text-center justify-center xl:flex-row xl:justify-evenly xl:text-[2.5vh] xxl:text-[2.7vh]">
                    <Text>{blogPost.author}</Text>{" "}
                    <Text>
                      {" "}
                      <FormatDate
                        inputDate={blogPost.date}
                        format="text"
                        dateOnly
                      />
                    </Text>
                  </FlexFull>

                  {blogPost.tags.length > 0 ? (
                    <Wrap className="justified-center gap-[1vh] py-[1vh]">
                      {blogPost.tags.map((tag) => (
                        <Text
                          key={tag}
                          className={`${darkGradient} text-cyan-300 px-[1vh] border-970-md shadowBroadNormal`}
                        >
                          {tag}
                        </Text>
                      ))}
                    </Wrap>
                  ) : (
                    <> </>
                  )}
                </VStackFull>

                {/* IMAGE  */}
                <CenterHorizontalFull className="h-fit">
                  <Center className="w-[30vw] h-[30vw] xl:w-[28vw] xl:h-[28vw] xxl:w-[23vw] xxl:h-[23vw] flex-shrink-0 border-970-md shadowBroadNormal">
                    <Image
                      src={blogPost.image}
                      alt={blogPost.title}
                      className="h-full w-full"
                    />
                  </Center>
                </CenterHorizontalFull>
                <VStackFull
                  align="items-start"
                  className="text-left text-[2vh]"
                  gap="gap-[0px]"
                >
                  <Text
                    className={`text-fuchsia-300 textShadow ${paragraphTextSize}`}
                  >
                    Summary:
                  </Text>
                  <Text className={`${paragraphTextSize}`}>
                    {blogPost.summary}
                  </Text>
                </VStackFull>
              </VStack>
              <FlexFull className="p-[1vh] xl:p-[1.5vh] xxl:p-[2vh]">
                <VStackFull
                  className="insetShadowXl bg-gray-900/40"
                  gap="gap-[0px]"
                >
                  <motion.div
                    className={`h-[0.8vh] rounded-bl-none w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 `}
                    style={{
                      scaleX: scrollYProgressLarge,
                      transformOrigin: "left",
                    }}
                  />
                  <FlexFull
                    className="h-full overflow-y-scroll hide-scrollbar"
                    ref={scrollYRefLarge}
                  >
                    <VStackFull
                      className="lg:px-[1.5vh] py-[1vh] h-fit"
                      gap="gap-[2vh]"
                    >
                      {blogPost.paragraphs.map((paragraph, index) => (
                        <CenterHorizontalFull
                          className={paragraphTextSize}
                          key={index}
                        >
                          <Text>{paragraph}</Text>
                        </CenterHorizontalFull>
                      ))}
                    </VStackFull>
                  </FlexFull>
                </VStackFull>
              </FlexFull>
            </HStackFull>
          </FlexFull>
        </FlexFull>
      </VStackFull>
    </FlexFull>
  );
}
