import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import StickyLabeledSection from "./stickyLabeledSection";
import { dummyBlogs } from "../blog+/tempBlogs";
import ShiftingBlogPanel from "./shiftingBlogPanel";
import { staggerMenuLinkStyles, stickyLabelStyles } from "./styleVariables";
import ShiftingComponents from "./shiftingComponents";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import HStack from "~/components/buildingBlocks/hStack";
import { PiBookOpenText } from "react-icons/pi";
import Icon from "~/components/buildingBlocks/icon";
import Text from "~/components/buildingBlocks/text";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function IndexBlogSection() {
  const blogArray = dummyBlogs.map((blog) => (
    <ShiftingBlogPanel blog={blog as any} key={blog.id} />
  ));
  return (
    <StickyLabeledSection
      labelText="blog"
      labelClassName={stickyLabelStyles}
      spacerHeight="h-[6vh]"
      id="blog"
    >
      <VStackFull className="relative h-full">
        <AnimatedComponent
          animation="fadeIn"
          className="w-full h-screen"
          runOnce={true}
          triggerPercent={0.3}
        >
          <ShiftingComponents
            componentArray={blogArray}
            transitionDuration={2}
            delaySeconds={6}
          />
        </AnimatedComponent>
      </VStackFull>
    </StickyLabeledSection>
  );
}
