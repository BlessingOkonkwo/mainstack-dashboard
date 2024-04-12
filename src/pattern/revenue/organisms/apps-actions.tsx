"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";
import UserData from "@/pattern/revenue/molecules/user-data";
import { ScrollText, Settings, LogOut, ChevronDown } from "lucide-react";
import {
  MdOutlineBugReport,
  MdOutlineCardGiftcard,
  MdOutlineSwitchAccount,
} from "react-icons/md";
import AppsIcon from "@/pattern/common/atoms/icons/apps-icon";
import AppsItem from "../molecules/apps-item";
import SidebarIconOne from "@/pattern/common/atoms/icons/sidebar-icon-one";
import SidebarIconTwo from "@/pattern/common/atoms/icons/sidebar-icon-two";
import SidebarIconThree from "@/pattern/common/atoms/icons/sidebar-icon-three";
import SidebarIconFour from "@/pattern/common/atoms/icons/sidebar-icon-four";
import { Separator } from "@/components/ui/separator";

const AppsActions = () => {
  const { data } = useGetUserQuery();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between gap-2 w-[177px]">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className={`flex items-center gap-4 h-[40px] whitespace-nowrap rounded-[100px] py-2 pr-[18px] pl-[14px] text-base font-semibold ${
            open
              ? "text-white bg-primary"
              : "text-coolgrey-foreground bg-white hover:bg-coolgrey-background"
          } cursor-pointer`}
        >
          <span
          // className={`flex items-center gap-1 rounded-[100px] py-2 pr-[18px] pl-[14px] text-base font-semibold ${
          //   open
          //     ? "text-white bg-primary"
          //     : "text-coolgrey-foreground bg-white hover:bg-coolgrey-background"
          // } cursor-pointer`}
          className="flex items-center gap-2"
          >
            <AppsIcon color={open ? "white" : "#56616b"} />
            Apps
          </span>
          {open ? <Separator orientation="vertical" className="w-[0.5px] text-[#56616b] bg-coolgrey-foreground" /> : null} 
          {open ? (
            <span className="flex items-center gap-2">
              Link in Bio
              <ChevronDown color="white" />
            </span>
          ) : null}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[400px] mr-[20px] py-3 px-2 space-y-4">
          <DropdownMenuItem className="p-3 rounded-xl hover:shadow hover:!bg-white hover:border hover:border-coolgrey-background">
            <AppsItem
              icon={<SidebarIconOne />}
              title="Link in Bio"
              desc="Manage your Link in Bio"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="p-3 rounded-xl hover:shadow hover:!bg-white hover:border hover:border-coolgrey-background">
            <AppsItem
              icon={<SidebarIconTwo />}
              title="Store"
              desc="Manage your Store Activities"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="p-3 rounded-xl hover:shadow hover:!bg-white hover:border hover:border-coolgrey-background">
            <AppsItem
              icon={<SidebarIconThree />}
              title="Media Kit"
              desc="Manage your Media Kit"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="p-3 rounded-xl hover:shadow hover:!bg-white hover:border hover:border-coolgrey-background">
            <AppsItem
              icon={<SidebarIconFour />}
              title="Invoicing"
              desc="Manage your Invoicing"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="p-3 rounded-xl hover:shadow hover:!bg-white hover:border hover:border-coolgrey-background">
            <AppsItem
              icon={<SidebarIconOne />}
              title="Bookings"
              desc="Manage your Bookings"
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AppsActions;
