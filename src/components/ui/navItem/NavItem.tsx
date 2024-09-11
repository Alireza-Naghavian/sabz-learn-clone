import { NavItemType } from "@/types/navitems.t";
import Link from "next/link";
import React from "react";
import styles from "@/components/shared/navbar/navbar.module.css";
function NavItem({ title, target, className }: NavItemType) {
  return (
    <Link
      href={target}
      className={`${styles.navBar__subItem_link} ${className}`}
    >
      {title}
    </Link>
  );
}

export default NavItem;
