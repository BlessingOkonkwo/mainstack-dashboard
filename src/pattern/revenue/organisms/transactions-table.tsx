import React from "react";
import TransactionsTop from "./transactions-top";
import TransactionsTableRow from "../molecules/transactions-table-row";
import { Separator } from "@/components/ui/separator";
import { useGetTransactionsQuery } from "@/redux/services/get-transactions.api-slice";
import PulsePlaceholder from "@/pattern/common/atoms/icons/pulse-placeholder-icon";

const transactions = [
  {
    desc: "Psychology of Money",
    status: "Roy Cash",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "Buy me a coffee",
    status: "Jonathan Smart",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "How to build an online brand",
    status: "Delvan Ludacris",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "Cash withdrawal",
    status: "successful",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "Support my outreach",
    status: "Shawn Kane",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "Cash withdrawal",
    status: "pending",
    amount: 600,
    date: "Apr 03, 2022",
  },
  {
    desc: "Learn how to pitch your idea",
    status: "Dujon Jericho",
    amount: 600,
    date: "Apr 03, 2022",
  },
];

const TransactionsTable = () => {
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetTransactionsQuery();
  return (
    <div className="space-y-4">
      <div>
        <TransactionsTop />
      </div>
      <Separator />
      <div className="space-y-[24px]">
        {!isLoading &&
          !isError &&
          isSuccess &&
          data?.map((transaction, idx) => (
            <TransactionsTableRow
              key={idx}
              amount={isLoading ? 0 : transaction?.amount}
              date={transaction.date}
              status={transaction.status}
              desc={transaction.type}
            />
          ))}

        {isLoading && (
          <div className="h-[300px] flex flex-col items-center justify-center">
            <PulsePlaceholder />
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;
