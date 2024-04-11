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

export default function TransactionStatusFilter() {
  const [showSuccessful, setShowSuccessful] = React.useState<Checked>(true);
  const [showPending, setShowPending] = React.useState<Checked>(false);
  const [showFailed, setShowFailed] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="grey" className="font-normal rounded-[12px] !justify-start !w-full">Successful, Pending, Failed</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showSuccessful}
          onCheckedChange={setShowSuccessful}
        >
          Successful
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPending}
          onCheckedChange={setShowPending}
        >
          Pending
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showFailed}
          onCheckedChange={setShowFailed}
        >
          Failed
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
