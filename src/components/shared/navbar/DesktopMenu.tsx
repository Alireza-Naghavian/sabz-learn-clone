import { MenuBodyType } from "@/types/services/menu.t";
import NavBarItem from "./NavBarItem";
function DesktopMenu({menu}:{menu:MenuBodyType[]}) {
  return (
    <ul className="hidden lg:flex gap-x-6 text-base ">
      {menu?.map((menu,index)=>{
        return  <NavBarItem key={index} className="relative group" subMenus={menu.submenus}  target={menu.href} title={menu.title} />
      })}
    </ul>
  );
}

export default DesktopMenu;
