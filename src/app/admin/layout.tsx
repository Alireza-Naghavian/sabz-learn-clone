"use client";
import SideBar from "@/components/layouts/admin/SideBar/SideBar";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import { ChildrenProps } from "@/types/global.t";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import styles from "@/app/my-account/userpanel.module.css";
import useDisclosure from "@/hooks/useDisclosure";
import Overlay from "@/components/ui/Overlay/Overlay";
import StoreProvider from "@/context/StoreProvider";
import { UserNameSubComp } from "../my-account/layout";
function Layout({ children }: ChildrenProps) {
  const [isMenuOpen, { open, close }] = useDisclosure();
  return (
    <StoreProvider>
      <main
        className="md:bg-white min-h-screen md:dark:bg-gray-800 flex max-w-[1920px]
     md:px-8
     lg:py-7"
      >
        <div className="lg:block hidden lg:w-[20%] ">
          <SideBar />
        </div>
        <section
          className="lg:w-[80%] w-full
        mx-auto bg-gray-100/55 dark:bg-gray-800 lg:dark:bg-dark md:p-10 lg:rounded-4xl"
        >
          <header
            className={`bg-gray-300 dark:bg-darker !p-4 sm:rounded-xl !mb-0 ${styles.header__layout}`}
          >
            <UserNameSubComp className="hidden lg:block font-DanaBold 
              text-2xl text-zinc-700 dark:text-white"/>
            {/* sidebarMenu */}
            <div className="sidebar__open-btn lg:hidden font-DanaMedium text-zinc-700 dark:text-white">
              <div
                className="flex items-center gap-x-2  "
                onClick={() => open()}
              >
                <Bars3BottomRightIcon className="size-6" />
                <span>منوی دسترسی</span>
              </div>
              <div
                className={`lg:hidden bg-white dark:bg-darker
                  sm:w-[calc(100vw-500px)] w-64      overflow-x-hidden overflow-y-auto 
                  fixed top-0 bottom-0 right-0 z-50  transition-all
                   duration-300 transform 
                ${isMenuOpen ? "sm:translate-x-0 " : "translate-x-[40rem]"}
          `}
              >
                <SideBar closeSideBar={close} />
              </div>
            </div>
            <div className="flex gap-x-3.5 md:gap-x-7">
              <ThemeToggler />
            </div>
          </header>
          <div className="px-5 md:px-0 ">{children}</div>
        </section>
        <Overlay onClose={() => close()} openCondition={isMenuOpen} />
      </main>
    </StoreProvider>
  );
}

export default Layout;
