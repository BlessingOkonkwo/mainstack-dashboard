import React from "react";
import ChartSection from "./chart-section";
import RevenueSummary from "./revenue-summary";

const RevenueTopSection = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <ChartSection />
      <RevenueSummary />
    </div>
  );
};

export default RevenueTopSection;
