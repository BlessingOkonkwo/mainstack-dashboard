import React from "react";
import TotalTransactionsNumber from "../molecules/total-transactions-number";
import TransactionsActions from "../molecules/transactions-actions";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";

const TransactionsTop = () => {
  const {data} = useGetTransactionsQuery();
  return (
    <div className="w-full flex items-center justify-between">
      <TotalTransactionsNumber transactionsNumber={data?.length} />
      <TransactionsActions />
    </div>
  );
};

export default TransactionsTop;
