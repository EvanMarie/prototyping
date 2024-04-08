import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function PortfolioLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none ">
      <LayoutContainer className="bg-gray-900/70 bg-gradient-to-b from-violet-800/30 via-indigo-780/30 to-fuchsia-800/30 rounded-none backdrop-blur-sm">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
