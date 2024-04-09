import { Outlet } from "@remix-run/react";
import FlexFull from "~/components/buildingBlocks/flexFull";
import LayoutContainer from "~/components/buildingBlocks/layoutContainer";

export default function Resortifi() {
  return (
    <LayoutContainer className="bg-white rounded-none ">
      <LayoutContainer className="rounded-none">
        <Outlet />
      </LayoutContainer>
    </LayoutContainer>
  );
}
