import { NavLink, Outlet, useLocation, useParams } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavContainer from "~/components/buildingBlocks/navContainer";
import { shineyGradient } from "../components/styleVariables";
import HStackFull from "~/components/buildingBlocks/hStackFull";
import AnimateInPlaceText from "~/components/specialty/animateInPlaceText";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import HStack from "~/components/buildingBlocks/hStack";
import IconButton from "~/components/buildingBlocks/iconButton";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";
import { HomeIcon } from "styles";
import { TbBooks } from "react-icons/tb";
import Text from "~/components/buildingBlocks/text";

export default function BlogLayout() {
  const id = useParams().id;
  const isBlogId = id ? true : false;
  const isBlogMain = useLocation().pathname.endsWith("blog");

  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none ">
      <LayoutContainer className="bg-gray-900/90 rounded-none backdrop-blur-sm">
        <LayoutContainer className="text-slate-100 relative">
          <NavContainer h="h-[5vh] sm:h-[6vh]" bg={shineyGradient}>
            <HStackFull className="pl-[1vh] h-full items-center justify-between">
              {" "}
              <HStack
                className="w-full items-end"
                gap="gap-[1vh] sm:gap-[2vh] md:gap-[2vh]"
              >
                <NavLink
                  to="/dark-violet-reboot"
                  className="h-full flex items-end "
                >
                  <AnimateInPlaceText
                    isScale
                    text="DarkViolet.ai"
                    textClassName="text-fuchsia-400 text-[3.2vh] leading-[1.8vh] sm:text-[5.5vh] leading-[4.7vh] textShadow "
                    fontStyle="kufam-font"
                  />
                </NavLink>
                <Text className="text-[3vh] sm:text-[3.5vh]">|</Text>
                <Text className="text-[2.7vh] leading-[3.3vh] sm:text-[4vh] sm:leading-[4.8vh]">
                  {" "}
                  blog
                </Text>
              </HStack>
              <HStack className="h-full items-center" gap="gap-[1.5vh]">
                {isBlogId && (
                  <NavIconButton
                    icon={TbBooks}
                    to="/dark-violet-reboot/blog"
                    label="all posts"
                    tooltipPlacement="bottomLeft"
                  />
                )}
                <NavIconButton
                  icon={HomeIcon}
                  to="/dark-violet-reboot"
                  label="home"
                  tooltipPlacement="bottomLeft"
                />
              </HStack>
            </HStackFull>
          </NavContainer>
          <VStackFull
            className="h-[95vh] sm:h-[94vh] fixed top-[6vh]"
            style={{ maxHeight: "96svh" }}
          >
            <Outlet />
          </VStackFull>
        </LayoutContainer>
      </LayoutContainer>
    </LayoutContainer>
  );
}
