import React from "react";

interface IProps {
  transactionsNumber: string | number;
}

const TotalTransactionsNumber = ({ transactionsNumber }: IProps) => {
  return (
    <div className="space-y-">
      <p className="text-2xl font-bold text-primary">
        {transactionsNumber} Transactions
      </p>
      <p className="texxt-sm font-medium text-coolgrey-foreground">Your transactions for the last 7 days</p>
    </div>
  );
};

export default TotalTransactionsNumber;
