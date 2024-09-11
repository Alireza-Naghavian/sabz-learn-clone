import NavBarItem from "./NavBarItem";
function DesktopMenu() {
  return (
    <ul className="hidden lg:flex gap-x-6 text-base ">
      <NavBarItem className="relative group"  target="" title="فرانت اند" />
      <NavBarItem className="relative group" target="" title="امنیت" />
      <NavBarItem className="relative group" target="" title="پایتون" />
      <NavBarItem className="relative group" target="" title="پی اچ پی" />
      <NavBarItem className="relative group" target="" title="ارتقای مهارت" />
      <NavBarItem className="relative group" target="" title="مقالات" />
    </ul>
  );
}

export default DesktopMenu;
