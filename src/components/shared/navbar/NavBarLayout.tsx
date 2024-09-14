import LogoLink from "@/components/ui/logo-link/LogoLink";
import SearchBox from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import Bookmark from "./Bookmark";
import DesktopMenu from "./DesktopMenu";
import styles from "./navbar.module.css";
import SideBarMenu from "./SideBarMenu";
import UserDataDropDown from "./UserDataDropDown";
function NavBarLayout() {
  return (
    <header className="bg-white dark:bg-darker">
      <div className={styles.navBar__header_wrapper}>
        {/* mobile navbar icon */}
        <div className={` only-icon  rounded-full box-center
           bg-gray-100 dark:bg-white/5  lg:hidden` }>
         <SideBarMenu/>
        </div>
        {/* navbar section */}
        <nav className="flex items-center h-13">
          {/* app logo */}
          <LogoLink />
          {/* mobile menu */}
        
          {/* main menu */}
          <DesktopMenu />
        </nav>
        {/* left side navbar */}
        <div className="flex  gap-x-6 h-13">
          <SearchBox />
          <ThemeToggler className="!hidden lg:!flex" />
          <Bookmark/>
          <UserDataDropDown />
          {/* <SecondaryBtn
            className="hidden lg:flex"
            target=""
            title="ورود|عضویت"
            Icon={() => <UserIcon />}
          /> */}
        </div>
      </div>
    </header>
  );
}

export default NavBarLayout;
