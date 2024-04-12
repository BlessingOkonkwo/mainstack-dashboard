"use client";
import RevenueTemplate from "@/pattern/revenue/templates/revenue-template";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import { useState } from "react";
import { Settings, ScrollText, LogOut } from "lucide-react";
import {
  MdOutlineBugReport,
  MdOutlineCardGiftcard,
  MdCardGiftcard,
  MdOutlineSwitchAccount,
} from "react-icons/md";
import AppsIcon from "@/pattern/common/atoms/icons/apps-icon";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const { data } = useGetUserQuery();

  console.log("user data: ", data);
  return (
    <>
      <div>
        {/* <RevenueTemplate /> */}
        {/* <TransactionsTop /> */}
        <Settings strokeWidth={1.5} color="#56616b" size={20} />
        <ScrollText strokeWidth={1.5} color='#56616b' size={20} />
        <MdOutlineCardGiftcard color="#56616b" size={20} className="stroke-custom" />
        <AppsIcon />
        <MdOutlineBugReport size={24} color="#56616b" />
        <MdOutlineSwitchAccount size={20} color="#56616b" />
        <LogOut size={20} color="#56616b" strokeWidth={1.5} />
      </div>
    </>
  );
}
