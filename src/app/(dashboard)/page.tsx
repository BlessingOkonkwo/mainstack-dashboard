"use client";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import { useState } from "react";

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
