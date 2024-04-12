import React from "react";
import { formatAmount } from "@/lib/helpers/format-amount";
import { formatDate } from "@/lib/helpers/format-date";

interface IProps {
  amount: number;
  date: string;
}

const TransactionAmount = ({ amount, date }: IProps) => {
  return (
    <div>
      <p className="text-base text-primary font-bold">
        {formatAmount({ amount })}
      </p>
      <p className="text-sm font-medium text-coolgrey-foreground">
        {formatDate({ inputDate: date })}
      </p>
    </div>
  );
};

export default TransactionAmount;
