"use client";
import React from "react";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import { SheetDemo } from "./slide-out";
import { ScrollAreaHorizontalDemo } from "./scroll-test";

const RevenuePage = () => {
  return (
    <div className="">
      {/* <RevenueTemplate /> */}
      <SheetDemo />
      <ScrollAreaHorizontalDemo />
    </div>
  );
};

export default RevenuePage;
