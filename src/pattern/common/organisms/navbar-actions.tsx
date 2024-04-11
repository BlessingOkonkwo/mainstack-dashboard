import React from "react";
import NotificationIcon from "../atoms/icons/notification-icon";
import MessageIcon from "../atoms/icons/message-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ProfileInitials from "../atoms/profile-initials";
import MenuIcon from "../atoms/icons/menu-icon";
import { useGetUserQuery } from "@/redux/services/get-user.api-slice";

const NavbarActions = () => {
  const {data} = useGetUserQuery();
  return (
    <div className="flex items-center justify-between gap-2 w-[177px]">
      <NotificationIcon />
      <MessageIcon />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex items-center justify-between gap-2 py-1 pr-3 pl-[5px] w-[81px] rounded-[100px] bg-coolgrey-background">
            <ProfileInitials name={data?.first_name + " " + data?.last_name} />
            <MenuIcon />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarActions;
