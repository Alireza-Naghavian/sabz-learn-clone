import LogoLink from "@/components/ui/logo-link/LogoLink";
import SearchBox from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import StoreProvider from "@/context/StoreProvider";
import Bookmark from "./Bookmark";
import DesktopMenu from "./DesktopMenu";
import styles from "./navbar.module.css";
import SideBarMenu from "./SideBarMenu";
import UserDataSection from "./UserDataSection";
import { MenuBodyType } from "@/types/services/menu.t";
function NavBarLayout({menu}:{menu:MenuBodyType[]}) {

  return (
    <header className="bg-white dark:bg-darker">
      <div className={styles.navBar__header_wrapper}>
        {/* mobile navbar icon */}
        <div
          className={` only-icon  rounded-full box-center
           bg-gray-100 dark:bg-white/5  lg:hidden`}
        >
          <SideBarMenu  menu={menu} />
        </div>
        {/* navbar section */}
        <nav className="flex items-center h-13">
          {/* app logo */}
          <LogoLink className="lg:ml-8" />
          {/* mobile menu */}

          {/* main menu */}
          <DesktopMenu menu={menu} />
        </nav>
        {/* left side navbar */}
        <div className="flex  gap-x-6 h-13">
          <SearchBox />
          <ThemeToggler className="!hidden lg:!flex" />
          <Bookmark />
          <StoreProvider>
            <UserDataSection />
          </StoreProvider>
        </div>
      </div>
    </header>
  );
}

export default NavBarLayout;
