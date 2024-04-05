import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function ConsciousnessLayout() {
  return (
    <LayoutContainer className="bg-gray-900 bg-gradient-to-b from-purple-700/30 via-indigo-700/30 to-teal-700/30">
      <Outlet />
    </LayoutContainer>
  );
}
