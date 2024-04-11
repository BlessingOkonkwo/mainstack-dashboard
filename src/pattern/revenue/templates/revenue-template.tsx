import React from "react";
import RevenueTopSection from "../organisms/revenue-top-section";
import TransactionsTable from "../organisms/transactions-table";

const RevenueTemplate = () => {
  return (
    <div className="flex flex-col items-centr w-full space-y-14">
      <RevenueTopSection />
      <TransactionsTable />
    </div>
  );
};

export default RevenueTemplate;
