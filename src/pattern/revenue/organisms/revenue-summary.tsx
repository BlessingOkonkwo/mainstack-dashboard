import React from "react";
import DashboardAmountDisplay from "../molecules/dashboard-amount-display";
import { useGetWalletQuery } from "@/redux/services/get-wallet.api-slice";

const summary: {
  title: string;
  amount: number;
}[] = [
  {
    title: "Ledger Balance",
    amount: 0,
  },
  {
    title: "Total Payout",
    amount: 55080,
  },
  {
    title: "Total Revenue",
    amount: 175580,
  },
  {
    title: "Pending Payout",
    amount: 0,
  },
];

const RevenueSummary = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetWalletQuery();
  return (
    <div className="space-y-8">
      <DashboardAmountDisplay
        title={"Ledger Balance"}
        loading={isLoading}
        amount={isLoading ? 0 : data?.ledger_balance}
      />
      <DashboardAmountDisplay
        title={"Total Payout"}
        loading={isLoading}
        amount={isLoading ? 0 : data?.total_payout}
      />
      <DashboardAmountDisplay
        title={"Total Revenue"}
        loading={isLoading}
        amount={isLoading ? 0 : data?.total_revenue}
      />
      <DashboardAmountDisplay
        title={"Pending Payout"}
        loading={isLoading}
        amount={isLoading ? 0 : data?.pending_payout}
      />
    </div>
  );
};

export default RevenueSummary;
