import React from "react";
import SidebarIconOne from "../atoms/icons/sidebar-icon-one";
import SidebarIconTwo from "../atoms/icons/sidebar-icon-two";
import SidebarIconThree from "../atoms/icons/sidebar-icon-three";
import SidebarIconFour from "../atoms/icons/sidebar-icon-four";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[48px] h-[192px] gap-1 p-1 rounded-[100px] bg-white shadow-[0px_6px_12px_0px_#5C738314]">
      {/* <SidebarIconOne />
      <SidebarIconTwo />
      <SidebarIconThree />
      <SidebarIconFour /> */}

      <Link href="" className="bgimage1 w-6 h-6 mix-blend-luminosity hover:mix-blend-normal"></Link>
      <Link href="" className="bgimage2 w-6 h-6 mix-blend-luminosity hover:mix-blend-normal"></Link>
      <Link href="" className="bgimage3 w-6 h-6 mix-blend-luminosity hover:mix-blend-normal"></Link>
      <Link href="" className="bgimage4 w-6 h-6 mix-blend-luminosity hover:mix-blend-normal"></Link>
    </div>
  );
};

export default Sidebar;
