import React from "react";
import AvailableBalance from "../molecules/available-balance";
import RevenueChart from "./revenue-chart";
import { useGetWalletQuery } from "@/redux/services/get-wallet.api-slice";

const ChartSection = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetWalletQuery();
  return (
    <div className="space-y-8">
      <AvailableBalance availableBalance={isLoading ? 0 : data?.balance} />
      <RevenueChart />
    </div>
  );
};

export default ChartSection;
