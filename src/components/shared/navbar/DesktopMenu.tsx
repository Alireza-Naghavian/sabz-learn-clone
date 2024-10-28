import { MenuBodyType } from "@/types/services/menu.t";
import NavBarItem from "./NavBarItem";
function DesktopMenu({ menu }: { menu: MenuBodyType[] }) {
  return (
    <ul className="hidden lg:flex gap-x-6 text-base ">
      {menu?.map((menu, index) => {
        return (
          <NavBarItem
            key={index}
            className="relative group"
            subMenus={menu.submenus}
            target={`/courses/category/${menu.href}`}
            title={menu.title}
          />
        );
      })}
      <div className="">
      <NavBarItem
            className="relative group"
            target={`/blogs`}
            title={"مقالات"}
          />
      </div>
    </ul>
  );
}

export default DesktopMenu;
