import DropDown from "@/components/ui/DropDown/DropDown";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import NavItem from "@/components/ui/navItem/NavItem";
import { SearchForm } from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import StoreProvider from "@/context/StoreProvider";
import { MenuBodyType } from "@/types/services/menu.t";
import { Suspense, useState } from "react";
import styles from "./navbar.module.css";
function MobileMenu({
  close,
  menu,
}: {
  close: () => void;
  menu: MenuBodyType[];
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <>
      <div className={styles.navBar__Mobile_wrapper}>
        <LogoLink className="lg:ml-8" />
        <div className="flex gap-x-2 items-center">
          <ThemeToggler className="flex" />
        </div>
      </div>
      {/* drop down menu */}
      <div className="  relative group w-full">
        <StoreProvider>
          <Suspense>
            <SearchForm
              className="w-full child:w-full child:child:w-full mt-4"
              placeholder="چی میخوای یاد بگیری؟"
            />
          </Suspense>
        </StoreProvider>
      </div>
      {menu.map((menu, index) => {
        return (
          <DropDown
            key={index}
            id={menu.href}
            close={close}
            isOpen={openDropdown === menu.href}
            toggle={toggleDropdown}
            className="mt-6"
            label={menu.title}
          >
            <ul className="flex flex-col gap-y-4 w-full my-4 ">
              {menu.submenus.map((submenu) => {
                return (
                  <NavItem
                    key={submenu._id}
                    onClick={() => close()}
                    target={`/courses/course/${submenu.href}`}
                    title={submenu.title}
                  />
                );
              })}
            </ul>
          </DropDown>
        );
      })}
      <div className="relative mt-6">
        <NavItem onClick={() => close()} target={`/blogs`} title={"مقالات"} />
      </div>
    </>
  );
}

export default MobileMenu;
