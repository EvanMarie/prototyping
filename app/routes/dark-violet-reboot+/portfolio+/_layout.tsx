import { Outlet } from "@remix-run/react";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function PortfolioLayout() {
  return (
    <LayoutContainer className="bg-[url('/images/consciousnessBackground.png')] bg-center bg-cover rounded-none ">
      <Outlet />
    </LayoutContainer>
  );
}
