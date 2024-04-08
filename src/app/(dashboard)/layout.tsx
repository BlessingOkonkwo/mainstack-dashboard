"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Topbar from "@/pattern/common/templates/topbar";
import Sidebar from "@/pattern/common/templates/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "bg-accent w-full min-h-screen h-full flex flex-col items-center"
      )}
    >
      <Topbar />

      <div>
        <main>{children}</main>

        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
