import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import NavItem from '@/components/ui/navItem/NavItem'
import { NavItemType } from '@/types/navitems.t'

function NavBarItem({target,title,className,subMenus}:NavItemType) {
  return (
    <li className={className}>
    <Link
      href={target}
      className="flex items-center gap-x-1 h-full
     group-hover:text-baseColor transition-colors"
    >
      <span>{title}</span>
      <ChevronDownIcon className="h-4 w-4" />
    </Link>
    <div className={`${styles.navBar__Item_Wrapper} 
    invisible opacity-0 group-hover:visible 
    group-hover:opacity-100`}>
      <div className="flex flex-col gap-y-4 w-64
       bg-white dark:!text-white dark:bg-darker p-5 
       border
        border-neutral-100 dark:border-y
     dark:border-x-0 dark:border-baseColor 
     shadow-sm dark:shadow-none rounded-xl">
      {subMenus?.map((menus,index)=>{
        return    <NavItem key={index} target={`/courses/course${menus.href}`} title={menus.title} />
      })}
      </div>
    </div>
  </li>
  )
}

export default NavBarItem