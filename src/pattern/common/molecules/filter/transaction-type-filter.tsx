"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function TransactionTypeFilter() {
  const [showStoreTransactions, setShowStoreTransactions] =
    React.useState<Checked>(false);
  const [showGetTipped, setShowGetTipped] = React.useState<Checked>(false);
  const [showWithdrawals, setShowWithdrawals] = React.useState<Checked>(false);
  const [showChargebacks, setShowChargebacks] = React.useState<Checked>(false);
  const [showCahsbacks, setShowCashbacks] = React.useState<Checked>(false);
  const [showRefer, setShowRefer] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="grey"
          className="font-normal rounded-[12px] !justify-start !w-full max-w-full block overflow-hidden text-ellipsis absolute"
        >
          Store Transactions, Get Tipped, Withdrawals, Charge Backs, Cash Backs,
          Refer & Earn
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStoreTransactions}
          onCheckedChange={setShowStoreTransactions}
        >
          Store Transactions
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showGetTipped}
          onCheckedChange={setShowGetTipped}
        >
          Get Tipped
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showWithdrawals}
          onCheckedChange={setShowWithdrawals}
        >
          Withdrawals
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showChargebacks}
          onCheckedChange={setShowChargebacks}
        >
          Chargebacks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showCahsbacks}
          onCheckedChange={setShowCashbacks}
        >
          Cashbacks
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showRefer}
          onCheckedChange={setShowRefer}
        >
          Refer & Earn
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
