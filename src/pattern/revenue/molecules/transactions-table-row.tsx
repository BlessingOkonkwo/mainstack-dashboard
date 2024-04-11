import React from "react";
import TransactionDetails from "./transaction-details";
import TransactionAmount from "./transaction-amount";

interface IProps {
  desc: string;
  status: string;
  amount: number;
  date: string;
}

const TransactionsTableRow = ({ amount, status, desc, date }: IProps) => {
  return (
    <div className="flex items-center justify-between">
      <TransactionDetails desc={desc} status={status} />
      <TransactionAmount amount={amount} date={date} />
    </div>
  );
};

export default TransactionsTableRow;
