import LogoLink from "@/components/ui/logo-link/LogoLink";
import SearchBox from "@/components/ui/SearchBox/SearchBox";
import ThemeToggler from "@/components/ui/ThemeToggler/ThemeToggler";
import Bookmark from "./Bookmark";
import DesktopMenu from "./DesktopMenu";
import styles from "./navbar.module.css";
import SideBarMenu from "./SideBarMenu";
import UserDataDropDown from "./UserDataDropDown";
import SecondaryBtn from "@/components/ui/button/SecondaryBtn";
import { UserIcon } from "@heroicons/react/24/outline";
import { UserType } from "@/types/services/authapi.t";
function NavBarLayout({ userData }: { userData: UserType }) {
  console.log(userData);
  return (
    <header className="bg-white dark:bg-darker">
      <div className={styles.navBar__header_wrapper}>
        {/* mobile navbar icon */}
        <div
          className={` only-icon  rounded-full box-center
           bg-gray-100 dark:bg-white/5  lg:hidden`}
        >
          <SideBarMenu />
        </div>
        {/* navbar section */}
        <nav className="flex items-center h-13">
          {/* app logo */}
          <LogoLink className="lg:ml-8" />
          {/* mobile menu */}

          {/* main menu */}
          <DesktopMenu />
        </nav>
        {/* left side navbar */}
        <div className="flex  gap-x-6 h-13">
          <SearchBox />
          <ThemeToggler className="!hidden lg:!flex" />
          <Bookmark />
          {userData ? (
            <UserDataDropDown userData={userData} />
          ) : (
            <SecondaryBtn
              className="hidden lg:flex items-center px-2 rounded-full"
              target="/auth/login"
              title="ورود|عضویت"
              Icon={() => <UserIcon className="h-6 w-6" />}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBarLayout;
