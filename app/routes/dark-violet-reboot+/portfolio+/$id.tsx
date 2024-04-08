import { CloseIcon, ReturnPathIcon } from "styles";
import Box from "~/components/buildingBlocks/box";
import FlexFull from "~/components/buildingBlocks/flexFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import NavIconButton from "~/components/buildingBlocks/navLinkIconButton";

export default function PortfolioItem() {
  return (
    <LayoutContainer className="md:p-[2vh]">
      <FlexFull className="h-fit bg-gradient-to-br from-violet-400 via-indigo-400 to-fuchsia-400 shadowBroadLooser p-[0.3vh]">
        <FlexFull className="h-fit min-h-[95vh] bg-slate-800 p-[0.5vh] insetShadowXl text-slate-100 relative">
          <Box className="absolute top-[1vh] right-[1vh]">
            <NavIconButton
              icon={CloseIcon}
              to="/dark-violet-reboot/#portfolio"
            />
          </Box>
        </FlexFull>
      </FlexFull>
    </LayoutContainer>
  );
}
