import { Button } from "@/components/ui/button";
import { formatAmount } from "@/lib/helpers/format-amount";
import React from "react";

interface IProps {
  availableBalance: number | any;
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
        className="!w-[167px]"
        size="lg"
      >
        Withdraw
      </Button>
    </div>
  );
};

export default AvailableBalance;
