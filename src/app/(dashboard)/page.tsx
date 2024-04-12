"use client";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";

export default function Home() {
  const { data } = useGetUserQuery();

  console.log("user data: ", data);
  return (
    <>
      <div>
        <RevenueTemplate />
      </div>
    </>
  );
}
