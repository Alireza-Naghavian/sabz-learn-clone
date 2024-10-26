"use client";
import { DropDownType } from "@/types/navitems.t";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
const DropDown: React.FC<DropDownType> = ({
  label,
  className,
  Icon,
  children,
  isOpen,
  id,
  toggle,
  close,
}) => {
  return (
    <div className="">
      {/* toggler */}
      <div
        className={`flex ${!Icon ?"justify-between":"px-2.5 h-12 gap-x-2"} items-center
             duration-200 transition-all  ${className}  w-full `}
      >
        {Icon && <Icon className="size-6" /> }
        <Link
          href={id?.includes("/") ? `/courses/category${id}`:""}
          onClick={() => close()}
          className={`block  p-0 
            ${isOpen ? "text-baseColor" : "dark:text-white"}`}
        >
          {label}
        </Link>
        <div
          onClick={() => toggle(id)}
          className={`duration-200 transition-all bg-baseColor/35
         rounded-full px-1.5 py-1.5 box-center mr-auto
        ${isOpen ? "rotate-180 !bg-baseColor  " : "rotate-0"}`}
        >
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>

      <div
        className={`transition-all  flex overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-[240px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DropDown;
