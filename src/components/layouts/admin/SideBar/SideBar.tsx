"use client"
import LogOutBtn from "@/components/ui/button/LogOutBtn";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import SideBarItem from "@/components/ui/SideBarItem/SideBarItem";
import { AdminDashboardNavItems } from "@/utils/constants";
import { PowerIcon } from "@heroicons/react/24/outline";
import "@/components/layouts/user-panel/userPanel.css"
function SideBar() {
  return (
    <aside className={`
    overflow-x-hidden
      
     z-50  bg-white dark:bg-gray-800 flex
     flex-col xl:p-4.5 p-6
     transition-all lg:transition-none
    `}>
      {/* Logo */}
      <div className="pb-5 mb-7 border-b md:border-none border-b-gray-200 dark:border-b-mainSlate">
          <LogoLink  isIcon  className="ml-8"/>
      </div>
      {/* Navlinks */}
      <div className="space-y-4 text-zinc-700 dark:text-white">
        {AdminDashboardNavItems.map((item: any, index: number) => {
          return (
            <SideBarItem
              key={index}
              variant="hoverMode"
              Icon={item.Icon}
              title={item.title}
              target={item.target}
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
