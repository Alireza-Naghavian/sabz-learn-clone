import LogoLink from "@/components/ui/logo-link/LogoLink";
import SearchBox from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import { Bars3Icon } from "@heroicons/react/24/outline";
import DesktopMenu from "./DesktopMenu";
import styles from "./navbar.module.css";
import UserDataDropDown from "./UserDataDropDown";
function NavBarLayout() {
  return (
    <header className="bg-white dark:bg-darker">
      <div className={styles.navBar__header_wrapper}>
        {/* mobile navbar icon */}
        <div className={`button-lg only-icon  rounded-full box-center
           bg-gray-100 dark:bg-white/5  lg:hidden` }>
          <div className="">
            <Bars3Icon className="w-6 h-6 text-slate-500 dark:text-white" />
          </div>
        </div>
        {/* navbar section */}
        <nav className="flex items-center h-13">
          {/* app logo */}
          <LogoLink />
          {/* mobile menu */}
          <div className=""></div>
          {/* main menu */}
          <DesktopMenu />
        </nav>
        {/* left side navbar */}
        <div className="flex  gap-x-6 h-13">
          <SearchBox />
          <ThemeToggler />
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
