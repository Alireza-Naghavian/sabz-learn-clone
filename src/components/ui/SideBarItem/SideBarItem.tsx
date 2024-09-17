import { SideBarItemType } from "@/types/navitems.t";
import { cva } from "class-variance-authority";
import Link from "next/link";
const sideBarStyle = cva(`flex items-center rounded-lg`, {
  variants: {
    variant: {
      hoverMode:
        "hover:text-white hover:bg-green-500 px-2.5 h-12 gap-x-2.5   transition-colors ",
      casual: " gap-x-2.5 h-12 px-3",
    },
  },
  defaultVariants: {
    variant: "hoverMode",
  },
});
function SideBarItem({ Icon, target, title, className,variant }: SideBarItemType) {
  return (
    <Link
      className={sideBarStyle({variant,className})}
      href={target}
    >
        <span className="h-6 w-6">
        <Icon />
      </span>
      <span className="flex items-center gap-x-2">{title}</span>
    
    </Link>
  );
}

export default SideBarItem;
