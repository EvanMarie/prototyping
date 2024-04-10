import FlexFull from "~/components/buildingBlocks/flexFull";
import { BlogPost } from "./tempBlogs";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Text from "~/components/buildingBlocks/text";
import FormatDate from "~/utils/formatDate";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function ShiftingBlogPanel({ blog }: { blog: BlogPost }) {
  return (
    <FlexFull
      className="p-[1vh] h-full items-center"
      style={{ maxHeight: "100svh" }}
    >
      <FlexFull className="p-[1vh] flex-col items-center lg:flex-row gap-[2vh] bg-cyan-900/60 bg-gradient-to-b from-indigo-900-75 to-purple-900-75 border-970-md shadowBroadNormal">
        <VStackFull gap="gap-[1vh]">
          <Text className="text-cyan-300 sm:text-[2vh] textShadow">
            {blog.title}
          </Text>
          <VStackFull
            gap="gap-[0px]"
            className="text-slate-100 sm:text-[2vh] textShadow "
          >
            <Text>{blog.author}</Text>
            <Text>
              <FormatDate inputDate={blog.date} format="text" dateOnly />
            </Text>
            {blog.tags.length > 0 ? (
              <HStackFull gap="gap-[1vh]" className="justify-center">
                {blog.tags.map((tag) => (
                  <Text key={tag} className="text-cyan-300">
                    {tag}
                  </Text>
                ))}
              </HStackFull>
            ) : (
              <> </>
            )}
          </VStackFull>
          {blog.image && (
            <CenterHorizontalFull className="">
              <Box className="w-[70vw] h-[70vw] border-970-md shadowBroadNormal">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full"
                />
              </Box>
            </CenterHorizontalFull>
          )}
        </VStackFull>
        <FlexFull className="px-[1vh]">
          <Text noOfLines={10}>{blog.paragraphs[0]}</Text>
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
