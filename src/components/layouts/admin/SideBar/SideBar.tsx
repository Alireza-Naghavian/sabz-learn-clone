"use client";
import LogOutBtn from "@/components/ui/button/LogOutBtn";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import SideBarItem from "@/components/ui/SideBarItem/SideBarItem";
import {
  AdminDashBoardDropDown,
  AdminDashboardNavItems,
} from "@/utils/constants";
import { HomeIcon, PowerIcon } from "@heroicons/react/24/outline";
import "@/components/layouts/user-panel/userPanel.css";
import DropDown from "@/components/ui/DropDown/DropDown";
import useDisclosure from "@/hooks/useDisclosure";
import { useState } from "react";
import { IconType } from "@/types/icon.t";
import { UserPanelOpType } from "@/types/consts.t";
import { usePathname } from "next/navigation";
function SideBar({closeSideBar}:{closeSideBar?:()=>void}) {
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { close }] = useDisclosure();
  const path = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <aside
      className={`
    overflow-x-hidden
      
     z-50  bg-white dark:bg-gray-800 flex
     flex-col xl:p-4.5 p-6
     transition-all lg:transition-none
    `}
    >
      {/* Logo */}
      <div className="pb-5 mb-7 border-b md:border-none border-b-gray-200 dark:border-b-mainSlate">
        <LogoLink isIcon className="ml-8" />
      </div>
      {/* Navlinks */}
      <div className="space-y-4 text-zinc-700 dark:text-white">
        <SideBarItem
          variant="hoverMode"
          Icon={HomeIcon}
          title="نمای کلی"
          target="/admin"
          onClick={()=>closeSideBar&& closeSideBar()}
          className={`${path === "/admin" && "bg-baseColor"}`}
        />
        {AdminDashBoardDropDown.map((item, index: number) => {
          return (
            <DropDown
              toggle={toggleDropdown}
              label={item.title}
              Icon={ item.Icon as IconType}
              isOpen={openDropdown == item.id}
              close={close}
              key={index}
              id={item.id}
            >
              <ul className="flex flex-col gap-y-1 w-full my-2 ">
                <SideBarItem
                  Icon={item.subIcon}
                  title={item.subLabel}
                  target={item.subTargetLink}
                  variant="hoverMode"
                  onClick={()=>closeSideBar&& closeSideBar()}
                  className={`${path === item.subTargetLink && "bg-baseColor"}`}
                />
                <SideBarItem
                  Icon={item.subIcon_2}
                  title={item.subLabel_2}
                  target={item.subTargetLink_2}
                  variant="hoverMode"
                  onClick={()=>closeSideBar&& closeSideBar()}
                  className={`${path === item.subTargetLink_2 && "bg-baseColor"}`}
                />
              </ul>
            </DropDown>
          );
        })}
        {AdminDashboardNavItems.map((item: UserPanelOpType, index: number) => {
          return (
            <SideBarItem
              key={index}
              variant="hoverMode"
              Icon={item.Icon}
              title={item.title}
              target={item.target}
              className={`${path === item.target && "bg-baseColor"}`}
              onClick={()=>closeSideBar&& closeSideBar()}
            />
          );
        })}

        <LogOutBtn
          type="button"
          variant="hoverMode"
          Icon={() => <PowerIcon className="w-6 h-6" />}
        />
      </div>
    </aside>
  );
}

export default SideBar;
