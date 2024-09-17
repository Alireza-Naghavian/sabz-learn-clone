import DropDown from "@/components/ui/DropDown/DropDown";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import NavItem from "@/components/ui/navItem/NavItem";
import { SearchForm } from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import { useState } from "react";
import styles from "./navbar.module.css";
function MobileMenu({ close }: { close: () => void }) {
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
        <SearchForm
          className="w-full child:w-full child:child:w-full mt-4"
          placeholder="چی میخوای یاد بگیری؟"
        />
      </div>
      <DropDown
        id="frontend"
        close={close}
        isOpen={openDropdown === "frontend" }
        toggle={toggleDropdown}
        className="mt-6"
        label="فرانت اند"
      >
        <ul className="flex flex-col gap-y-4 w-full my-4 ">
          <NavItem onClick={() => close()} target="/" title="آموزش html" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
        </ul>
      </DropDown>
      <DropDown
        id="backend"
        close={close}
        isOpen={openDropdown === "backend" }
        toggle={toggleDropdown}
        className="mt-6"
        label="بک اند"
      >
        <ul className="flex flex-col gap-y-4 w-full  my-4">
          <NavItem onClick={() => close()} target="/" title="آموزش html" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
          <NavItem onClick={() => close()} target="" title="js course" />
        </ul>
      </DropDown>
    </>
  );
}

export default MobileMenu;
