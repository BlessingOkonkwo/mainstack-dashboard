import React from "react";
import AvailableBalance from "../molecules/available-balance";
import RevenueChart from "./revenue-chart";

const ChartSection = () => {
  return (
    <div className="space-y-8">
      <AvailableBalance availableBalance={120500} />
      <RevenueChart />
    </div>
  );
};

export default ChartSection;
