import React from "react";
import "./userPanel.css";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import SideBarItem from "@/components/ui/SideBarItem/SideBarItem";
import { userPanelOptions } from "@/utils/constants";
import { UserPanelOpType } from "@/types/consts.t";
import LogOutBtn from "@/components/ui/button/LogOutBtn";
import { PowerIcon } from "@heroicons/react/24/outline";
import StoreProvider from "@/context/StoreProvider";
import { usePathname } from "next/navigation";
import { SetState } from "@/types/global.t";
function UserPanel_SideBar({ sm,close }: { sm?: boolean,close?:SetState<boolean> }) {
  const path = usePathname();
  return (
    <aside className={`${sm ? "" : "user__sidebar"}`}>
      <div className="logo_wrapper">
        <LogoLink
          isIcon={true}
          className="flex items-center gap-x-1.5 md:gap-x-2.5"
        />
      </div>
      {/* <!-- Dashboard Links --> */}
      <div className="space-y-3 text-zinc-700 dark:text-white">
        {userPanelOptions.map((item: UserPanelOpType, index: number) => {
          return (
            <SideBarItem
              key={index}
              variant={item.variant.casual}
              Icon={() => <item.Icon />}
              title={item.title}
              target={item.target}
              onClick={()=>close && close(false) }
            className={`${path as string === item.target as string && "bg-baseColor"}`}
            />
          );
        })}
      </div>

      {/* <!-- Logout Link --> */}
      <div
        className="mt-2 pt-2 border-t border-t-neutral-200
           dark:border-t-white/5"
      >
        <StoreProvider>
          <LogOutBtn
            type="button"
            variant="casual"
            Icon={() => <PowerIcon className="w-6 h-6" />}
          />
        </StoreProvider>
      </div>
    </aside>
  );
}

export default UserPanel_SideBar;
