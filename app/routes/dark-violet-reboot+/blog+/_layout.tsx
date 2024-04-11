import { NavLink, Outlet } from "@remix-run/react";
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

export default function BlogLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none ">
      <LayoutContainer className="bg-gray-900/70 bg-gradient-to-b from-violet-800/30 via-indigo-700/30 to-fuchsia-800/30 rounded-none backdrop-blur-sm">
        <LayoutContainer className="text-slate-100 relative">
          <NavContainer h="h-[5vh] sm:h-[6vh]" bg={shineyGradient}>
            <HStackFull className="pl-[1vh] h-full items-end justify-between">
              {" "}
              <NavLink to="/dark-violet-reboot">
                <AnimateInPlaceText
                  isScale
                  text="DarkViolet.ai"
                  textClassName="text-fuchsia-400 text-[4vh] leading-[4vh] sm:text-[5.5vh] leading-[5.5vh] textShadow"
                  fontStyle="kufam-font"
                />
              </NavLink>
              <HStack className="h-full items-center" gap="gap-[1.5vh]">
                <NavIconButton
                  icon={TbBooks}
                  to="/dark-violet-reboot"
                  label="all posts"
                  tooltipPlacement="bottomLeft"
                />
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
