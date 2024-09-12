"use client";
import Button from "@/components/ui/button/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import MobileMenu from "./MobileMenu";
import useDisclosure from "@/hooks/useDisclosure";
import Overlay from "@/components/ui/Overlay/Overlay";
import useScrollLocker from "@/hooks/useScrollLocker";

function SideBarMenu() {
  const [isMenuOpen, { open, close }] = useDisclosure();
  useScrollLocker(isMenuOpen)
  return (
    <>
      <Overlay onClose={() => close()} openCondition={isMenuOpen} />
      <Button
        size="xl"
        type="button"
        onClick={() => open()}
        className="box-center">
        <Bars3Icon className="!w-6 !h-6 text-slate-500 dark:text-white" />
      </Button>
      <div className={`lg:hidden bg-white dark:bg-darker
        sm:w-[calc(100vw-400px)] w-64 overflow-y-auto 
        fixed top-0 bottom-0 right-0 z-50 p-4.5 transition-all
         duration-300 transform 
         ${isMenuOpen ? "translate-x-0" : "translate-x-[40rem]"} `}>
        <MobileMenu  close={close}/>
      </div>
    </>
  );
}

export default SideBarMenu;
