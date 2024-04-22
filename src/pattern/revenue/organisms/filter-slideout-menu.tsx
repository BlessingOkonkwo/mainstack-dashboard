"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { create, show, useModal } from "@ebay/nice-modal-react";
import { Separator } from "@/components/ui/separator";
import TransactionTypeFilter from "@/pattern/common/molecules/filter/transaction-type-filter";
import FilterToggle from "@/pattern/common/atoms/filter-toggle";
// import { DateRangeFilterModal } from "@/pattern/common/organisms/date-range-filter-modal";
import DateInput from "@/pattern/common/molecules/inputs/date-input";
import TransactionStatusFilter from "@/pattern/common/molecules/filter/transaction-status-filter";

interface IListType {
  label: string;
  value: string;
}

const rolesFilterSetting: IListType[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Last 7 days",
    value: "last 7 days",
  },
  {
    label: "This month",
    value: "this month",
  },
  {
    label: "Last 3 months",
    value: "last 3 months",
  },
  {
    label: "This year",
    value: "this year",
  },
  {
    label: "Last year",
    value: "last year",
  },
  {
    label: "All time",
    value: "all time",
  },
];

const FilterSlideOutMenu = create(() => {
  const { resolve, hide, visible } = useModal();

  const handleCloseModal = () => {
    resolve({ resolved: true });
    hide();
  };

  const handleSaveFilterSettings = () => {
    handleCloseModal();
  };

  const [scrollHeight, setScrollHeight] = useState(window.innerHeight - 30);

  useEffect(() => {
    function handleResize() {
      setScrollHeight(window.innerHeight - 30);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sheet open={visible} onOpenChange={handleCloseModal}>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <ScrollArea
          className="w-full h-full pr-3"
          // style={{ height: `${scrollHeight}px` }}
        >
          {/* <div className="relative h-full"> */}
          <SheetHeader className="absolute top-0 right-0 left-0 z-10 bg-white">
            <SheetTitle>Filter</SheetTitle>
          </SheetHeader>

          {/* Content */}
          <div className="space-y-[24px] w-full mt-[40px]">
            <ScrollArea className="w-[395px] whitespace-nowrap p-3">
              <div className="w-full max-w-full flex items-center gap-3 flex-nowrap">
                {rolesFilterSetting.map(({ value, label }) => (
                  <FilterToggle key={value} label={label} value={value} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="h-1.5" />
            </ScrollArea>

            {/* Date Range */}
            <div className="w-full space-y-[12px]">
              <label htmlFor="" className="block text-base font-semibold">
                Date Range
              </label>
              <DateInput />
            </div>

            <div className="w-full space-y-[12px] relative">
              <label htmlFor="" className="block text-base font-semibold">
                Transaction Type
              </label>
              <TransactionTypeFilter />
            </div>

            <div className="w-full space-y-[12px] !mt-20">
              <label htmlFor="" className="block text-base font-semibold">
                Transaction Status
              </label>
              <TransactionStatusFilter />
            </div>
          </div>

          {/* Footer */}
          <div className="w-full mt-[100px] mb-2 flex items-center justify-between gap-3">
            <Button variant="outline" onClick={handleSaveFilterSettings}>
              Clear
            </Button>
            <Button onClick={handleSaveFilterSettings}>Apply</Button>
          </div>
          {/* </div> */}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
});

export default FilterSlideOutMenu;
