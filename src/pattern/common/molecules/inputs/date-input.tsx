"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendarr";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ChevronDownIcon from "../../atoms/icons/chevron-down-icon";

export default function DateInput() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  return (
    <div className="flex items-center gap-[6px]">
      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"grey"}
              className={cn(
                "w-full justify-between text-left font-normal rounded-[12px]",
                !startDate && "text-muted-foreground"
              )}
            >
              {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"grey"}
              className={cn(
                "w-full justify-between text-left font-normal rounded-[12px]",
                !endDate && "text-muted-foreground"
              )}
            >
              {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
