import { IconType } from '@/types/icon.t';
import React from 'react'
type TitleDesc = {
    Icon?: IconType;
    title: string;
    className: string;
    IconColor?: string;
  };
function TitleHeader({ Icon, title, className, IconColor }: TitleDesc) {
  return (
    <div className="flex items-center gap-x-2 mb-5 sm:mb-6 relative">
      <span
        className={`absolute -right-6 sm:-right-[26px] block 
            w-1.5 h-[34px] md:h-9.5 ${className} rounded-r-sm `}
      ></span>
     {Icon &&  <Icon className={`hidden md:inline-block ${IconColor} size-9`} />}
      <p className="font-DanaBold text-xl md:text-2xl">{title}</p>
    </div>
  )
}

export default TitleHeader