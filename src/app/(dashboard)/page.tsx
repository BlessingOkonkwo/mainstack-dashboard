"use client";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import TransactionsTop from "@/pattern/revenue/organisms/transactions-top";
import DateInput from "@/pattern/common/molecules/inputs/date-input";
import { Calendar } from "@/components/ui/calendarr";
import { useState } from "react";
import { useGetWalletQuery } from "@/redux/services/get-wallet.api-slice";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";
import axios from "axios";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <div>
        <RevenueTemplate />
        {/* <TransactionsTop /> */}
      </div>
    </>
  );
}
