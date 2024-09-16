import { SideBarItemType } from '@/types/navitems.t';
import { cva } from 'class-variance-authority';
import React from 'react'
type LogoutBtnType =Omit<SideBarItemType,"target"|"title">& React.ComponentProps<"button">
const logoutStyle = cva(`flex items-center rounded-lg`, {
    variants: {
      variant: {
        hoverMode:
          "hover:text-white hover:bg-red-500 px-2.5 h-12  gap-x-2.5 w-full transition-colors   ",
        casual: " gap-x-2.5 h-10 px-3  w-full",
      },
    },
    defaultVariants: {
      variant: "hoverMode",
    },
  });
function LogOutBtn({Icon,variant,className,...props}:LogoutBtnType) {
  return (
  <button className={logoutStyle({variant,className})} {...props}>
    <Icon />
    <span className="flex items-center gap-x-2">خروج</span>
  </button>

  )
}

export default LogOutBtn