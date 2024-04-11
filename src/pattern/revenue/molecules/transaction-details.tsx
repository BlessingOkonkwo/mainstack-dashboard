import FailedTransactionArrow from "@/pattern/common/atoms/icons/failed-transaction-arrow";
import SuccessfulTransactionArrow from "@/pattern/common/atoms/icons/successful-transaction-arrow";
import React from "react";

interface IProps {
  desc: string;
  status: string;
}

const TransactionDetails = ({ desc, status }: IProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`capitalize flex items-center justify-center w-[48px] h-[48px] rounded-full ${
          status === "pending" || status === "failed"
            ? "bg-danger-background"
            : "bg-success-background"
        }`}
      >
        {status === "pending" || status === "failed" ? (
          <FailedTransactionArrow />
        ) : (
          <SuccessfulTransactionArrow />
        )}
      </div>

      <div>
        <p className="text-primary font-medium text-base">{desc}</p>
        <p
          className={`capitalize text-sm font-medium text-coolgrey-foreground ${
            status === "successful" && "text-[#0EA163]"
          } ${status === "pending" && "text-pending"} ${
            status === "failed" && "text-danger-foreground"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
};

export default TransactionDetails;
