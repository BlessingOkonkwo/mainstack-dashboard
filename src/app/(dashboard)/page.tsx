"use client";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const {data} = useGetUserQuery();

  console.log("user data: ", data);
  return (
    <>
      <div>
        <RevenueTemplate />
        {/* <TransactionsTop /> */}
      </div>
    </>
  );
}
