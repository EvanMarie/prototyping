import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";
import { mainGradient } from "./components/styleVariables";

export default function DarkVioletLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none ">
      <LayoutContainer className={`${mainGradient} rounded-none`}>
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
