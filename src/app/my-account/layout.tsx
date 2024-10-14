"use client";
import UserPanel_SideBar from "@/components/layouts/user-panel/UserPanel_SideBar";
import React from "react";
import styles from "./userpanel.module.css";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import UserDataDropDown from "@/components/shared/navbar/UserDataDropDown";
import { ChildrenProps } from "@/types/global.t";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import useDisclosure from "@/hooks/useDisclosure";
import Overlay from "@/components/ui/Overlay/Overlay";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { GetmeType, UserType } from "@/types/services/authapi.t";
import StoreProvider from "@/context/StoreProvider";
import { Metadata } from "next";
export const metadata: Metadata = {
  applicationName: "سبز لرن",
  title: " پنل کاربری - سبز لرن",
  description:"پنل کاربری - سبز لرن",
  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: " پنل کاربری - سبز لرن",
    description:"پنل کاربری - سبز لرن",
  },
};
function layout({ children }: ChildrenProps) {
  const [isMenuOpen, { open, close }] = useDisclosure();

  return (
    <div className="flex  gap-x-10 2xl:gap-x-14 lg:px-8 xl:px-14 2xl:px-25 lg:py-7">
      <UserPanel_SideBar />
      <section className="w-full max-w-[1432px] mx-auto bg-gray-300/55 dark:bg-darker md:p-10 lg:rounded-4xl">
        <header className={`${styles.header__layout}`}>
          <h3
            className="hidden md:block font-DanaBold 
        text-2xl text-zinc-700 dark:text-white"
          >
            علیرضا نقویان عزیز؛ خوش اومدی 🙌
          </h3>
          {/* sidebarMenu */}
          <div className="sidebar__open-btn md:hidden font-DanaMedium text-zinc-700 dark:text-white">
            <div className="flex items-center gap-x-2 " onClick={() => open()}>
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
              <UserPanel_SideBar sm />
            </div>
          </div>
          <StoreProvider>
            <UserDataDropDownSec />
          </StoreProvider>
        </header>
        <div className="px-5 md:px-0">
          <h3 className="md:hidden font-DanaBold text-zinc-700 dark:text-white mb-7">
            علیرضا نقویان عزیز؛ خوش اومدی 🙌
          </h3>
          {children}
        </div>
      </section>
      <Overlay onClose={() => close()} openCondition={isMenuOpen} />
    </div>
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
export default layout;
