import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function ConsciousnessLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover ">
      <LayoutContainer className="bg-gray-900/80 bg-gradient-to-b from-violet-700/30 via-indigo-700/30 to-teal-700/30">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
