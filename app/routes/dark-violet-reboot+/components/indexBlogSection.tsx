import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import { labelStyles } from "..";
import StickyLabeledSection from "./stickyLabeledSection";
import CenterFull from "~/components/buildingBlocks/centerFull";
import Flex from "~/components/buildingBlocks/flex";
import ShiftingComponents from "./shiftingComponents";
import Center from "~/components/buildingBlocks/center";
import FlexFull from "~/components/buildingBlocks/flexFull";
import { BlogPost, dummyBlogs } from "./tempBlogs";
import ShiftingBlogPanel from "./shiftingBlogPanel";

export default function IndexBlogSection() {
  const tempBlog = dummyBlogs[0];
  return (
    <StickyLabeledSection
      labelText="blog"
      labelClassName={labelStyles}
      spacerHeight="h-[6vh]"
      id="blog"
    >
      <AnimatedComponent
        animation="zoomIn"
        className="w-full h-screen"
        runOnce={true}
        triggerPercent={0.3}
      >
        {" "}
        <ShiftingBlogPanel blog={tempBlog as BlogPost} />
        {/* <ShiftingComponents
              componentArray={[
                <Center className="bg-violet-400 text-slate-100 h-[40vh] w-[40vh]">
                  One
                </Center>,
                <Center className="bg-fuchsia-400 text-slate-100 h-[40vh] w-[40vh]">
                  Two
                </Center>,
                <Center className="bg-cyan-400 text-slate-100 h-[40vh] w-[40vh]">
                  Three
                </Center>,
              ]}
            /> */}
      </AnimatedComponent>
    </StickyLabeledSection>
  );
}
