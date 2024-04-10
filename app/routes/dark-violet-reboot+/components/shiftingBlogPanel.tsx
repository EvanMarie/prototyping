import FlexFull from "~/components/buildingBlocks/flexFull";
import { BlogPost } from "./tempBlogs";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import Image from "~/components/buildingBlocks/image";
import Box from "~/components/buildingBlocks/box";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import Text from "~/components/buildingBlocks/text";

export default function ShiftingBlogPanel({ blog }: { blog: BlogPost }) {
  return (
    <FlexFull className="p-[1vh]" style={{ maxHeight: "100svh" }}>
      <FlexFull className="p-[1vh] flex-col items-center lg:flex-row gap-[1vh] bg-slate-700/75 border-970-md shadowBroadNormal">
        <Text className="text-cyan-300 sm:text-[2vh] textShadow">
          {blog.title}
        </Text>
        {blog.image && (
          <CenterHorizontalFull className="">
            <Box className="w-[50vw] h-[50vw]">
              <Image
                src={blog.image}
                alt={blog.title}
                className="h-full w-full"
              />
            </Box>
          </CenterHorizontalFull>
        )}
        <h1>Blog</h1>
      </FlexFull>
    </FlexFull>
  );
}
