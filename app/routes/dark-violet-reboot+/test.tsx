import { useRef } from "react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import { IParallax, Parallax } from "@react-spring/parallax";
import FlowerOfLifeOnScroll from "./components/flowerOfLifeOnScroll";
import CenterFull from "~/components/buildingBlocks/centerFull";
import ShiftingBlogPanel from "./components/shiftingBlogPanel";
import { dummyBlogs } from "./blog+/tempBlogs";
import StickyLabeledSection from "./components/stickyLabeledSection";
import {
  staggerMenuLinkStyles,
  stickyLabelStyles,
} from "./components/styleVariables";
import AnimatedComponent from "~/components/animate-on-scroll/animateOnScroll";
import FlexFull from "~/components/buildingBlocks/flexFull";
import Box from "~/components/buildingBlocks/box";
import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import Flex from "~/components/buildingBlocks/flex";
import HStack from "~/components/buildingBlocks/hStack";
import Text from "~/components/buildingBlocks/text";
import Icon from "~/components/buildingBlocks/icon";
import { PiBookOpenText } from "react-icons/pi";
import VStackFull from "~/components/buildingBlocks/vStackFull";

export default function Test() {
  return (
    <LayoutContainer className="overflow-y-auto text-slate-100">
      <StickyLabeledSection
        labelText="blog"
        labelClassName={stickyLabelStyles}
        spacerHeight="h-[6vh]"
        id="blog"
      >
        <VStackFull className="relative h-full">
          <Box className="absolute top-[1.5vh] right-[1vh]">
            {" "}
            <NavLink to={`/blog`}>
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
          </Box>
          <AnimatedComponent
            animation="zoomIn"
            className="w-full h-screen"
            runOnce={true}
            triggerPercent={0.3}
          >
            <ShiftingBlogPanel blog={dummyBlogs[4] as any} />
          </AnimatedComponent>
        </VStackFull>
      </StickyLabeledSection>
    </LayoutContainer>
  );
}
