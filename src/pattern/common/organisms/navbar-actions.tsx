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
import UserData from "@/pattern/revenue/molecules/user-data";
import { ScrollText, Settings, LogOut } from "lucide-react";
import {
  MdOutlineBugReport,
  MdOutlineCardGiftcard,
  MdOutlineSwitchAccount,
} from "react-icons/md";
import AppsIcon from "../atoms/icons/apps-icon";

const NavbarActions = () => {
  const { data, isLoading, isSuccess } = useGetUserQuery();
  return (
    <div className="flex items-center justify-between gap-2 w-[177px]">
      <NotificationIcon />
      <MessageIcon />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <span className="flex items-center justify-between gap-2 py-1 pr-3 pl-[5px] w-[81px] rounded-[100px] bg-coolgrey-background">
            <ProfileInitials loading={isLoading} name={data?.first_name + " " + data?.last_name} />
            <MenuIcon />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] mr-[20px] py-3 px-2 space-y-4">
          <DropdownMenuLabel>
            <UserData />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <Settings size={20} />
            </span>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <ScrollText size={20} />
            </span>
            Purchase History
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <MdOutlineCardGiftcard size={20} />
            </span>
            Refer and Earn
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <AppsIcon />
            </span>
            Integrations
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <MdOutlineBugReport size={24} />
            </span>
            Report Bug
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <MdOutlineSwitchAccount size={20} />
            </span>
            Switch Account
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-primary text-base font-semibold">
            <span className="w-[24px]">
              <LogOut size={20} />
            </span>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavbarActions;
