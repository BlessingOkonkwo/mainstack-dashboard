import React, { ReactElement } from "react";
import MainstackLogo from "../atoms/icons/mainstack-logo";
import HomeIcon from "../atoms/icons/home-icon";
import AnalyticsIcon from "../atoms/icons/analytics-icon";
import RevenueIcon from "../atoms/icons/revenue-icon";
import PeopleIcon from "../atoms/icons/people-icon";
import AppsIcon from "../atoms/icons/apps-icon";
import Navlink from "../molecules/navlink";
import NavbarActions from "../organisms/navbar-actions";

const navigation: {
  name: string;
  href: string;
  icon: ReactElement;
}[] = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: <AnalyticsIcon />,
  },
  {
    name: "Revenue",
    href: "/revenue",
    icon: <RevenueIcon />,
  },
  {
    name: "CRM",
    href: "/crm",
    icon: <PeopleIcon />,
  },
  {
    name: "Apps",
    href: "/apps",
    icon: <AppsIcon />,
  },
];

const Topbar = () => {
  return (
    <div className="flex items-center justify-between fixed h-[64px] w-full px-4 z-30 rounded-[100px] bg-white shadow-[0px_2px_4px_0px_#2D3B430D] ">
      <div>
        <MainstackLogo />
      </div>

      <div className="flex items-center gap-5">
        {navigation.map((nav, idx) => (
          <Navlink
            href={nav.href}
            exact={nav.href === "/" ? true : false}
            key={idx}
            label={nav.name}
            icon={nav.icon}
          />
        ))}
      </div>

      <div>
        <NavbarActions />
      </div>
      {/* box-shadow: 0px 2px 4px 0px #2D3B430D;

box-shadow: 0px 2px 6px 0px #2D3B430F; */}

    </div>
  );
};

export default Topbar;
