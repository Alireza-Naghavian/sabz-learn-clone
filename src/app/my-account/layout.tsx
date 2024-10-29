"use client";
import UserPanel_SideBar from "@/components/layouts/user-panel/UserPanel_SideBar";
import UserDataDropDown from "@/components/shared/navbar/UserDataDropDown";
import UserNameSubComp from "@/components/shared/UserNameSubComp/UserNameSubComp";
import Overlay from "@/components/ui/Overlay/Overlay";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import StoreProvider from "@/context/StoreProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { ChildrenProps } from "@/types/global.t";
import { UserType } from "@/types/services/authapi.t";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import styles from "./userpanel.module.css";

function Layout({ children }: ChildrenProps) {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <StoreProvider>

    <div className="flex  gap-x-10 2xl:gap-x-14 lg:px-8 xl:px-14 2xl:px-25 lg:py-7">
      <UserPanel_SideBar />
      <section className="w-full max-w-[1432px] mx-auto bg-gray-300/55 dark:bg-darker md:p-10 lg:rounded-4xl">
        <header className={`${styles.header__layout}`}>
          <UserNameSubComp className="hidden md:block font-DanaBold 
        text-2xl text-zinc-700 dark:text-white"/>
          {/* sidebarMenu */}
          <div className="sidebar__open-btn md:hidden font-DanaMedium text-zinc-700 dark:text-white">
            <div className="flex items-center gap-x-2 " onClick={() => setIsMenuOpen(true)}>
              <Bars3BottomRightIcon className="size-6" />
              <span>منوی دسترسی</span>
            </div>
            <div
              className={`lg:hidden bg-white dark:bg-darker
        sm:w-[calc(100vw-400px)] w-64 overflow-y-auto 
        fixed top-0 bottom-0 right-0 z-50 p-4.5 transition-all
         duration-300 transform 
         ${isMenuOpen ? "translate-x-0" : "translate-x-[40rem]"} `}
            >
              <UserPanel_SideBar close={setIsMenuOpen} sm />
            </div>
          </div>
          <StoreProvider>
            <UserDataDropDownSec />
          </StoreProvider>
        </header>
        <div className="px-5 md:px-0">
          <StoreProvider>

     <UserNameSubComp className="md:hidden font-DanaBold text-zinc-700 dark:text-white mb-7"/>
          </StoreProvider>
          {children}
        </div>
      </section>
      <Overlay onClose={() => setIsMenuOpen(false)} openCondition={isMenuOpen} />
    </div>
    </StoreProvider>

  );
}

const UserDataDropDownSec = () => {
  const { data, isLoading } = useGetMeQuery();
  return (
    <div className="flex gap-x-3.5 md:gap-x-7">
      <ThemeToggler />
      <UserDataDropDown
        userData={data?.user as UserType}
        isLoading={isLoading}
      />
    </div>
  );
};
export default Layout;
