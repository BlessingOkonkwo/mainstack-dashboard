import React from "react";
import DashboardAmountDisplay from "../molecules/dashboard-amount-display";

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
  return (
    <div className="space-y-8">
      {summary.map((revenue, idx) => (
        <DashboardAmountDisplay
          key={idx}
          title={revenue.title}
          amount={revenue.amount}
        />
      ))}
    </div>
  );
};

export default RevenueSummary;
