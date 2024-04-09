import { Button } from "@/components/ui/button";
import { formatAmount } from "@/lib/helpers/format-amount";
import React from "react";

interface IProps {
  availableBalance: number;
}
const AvailableBalance = ({ availableBalance }: IProps) => {
  return (
    <div className="flex items-center gap-[64px] w-fit">
      <div className="space-y-3">
        <p className="text-sm font-medium text-coolgrey-foreground">
          Available Balance
        </p>
        <p className="text-4xl font-bold text-primary">
          {formatAmount({ amount: availableBalance })}
        </p>
      </div>

      <Button
        onClick={() => {}}
        className="bg-primary text-white text-base font-semibold h-[52px] py-[14px] px-[60px] rounded-[100px]"
      >
        Withdraw
      </Button>
    </div>
  );
};

export default AvailableBalance;
