import React from "react";
import TotalTransactionsNumber from "../molecules/total-transactions-number";
import TransactionsActions from "../molecules/transactions-actions";

const TransactionsTop = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <TotalTransactionsNumber transactionsNumber={24} />
      <TransactionsActions />
    </div>
  );
};

export default TransactionsTop;
