import { SlogengType } from "@/types/consts.t";
import React from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */

const roadMapStyle = [
  { style: "bg-amber-50 dark:bg-amber-400/20" },
  { style: " bg-sky-50 dark:bg-sky-600/20" },
  { style: " bg-green-50 dark:bg-green-500/20" },
  { style: " bg-red-50 dark:bg-red-500/20 " },
  {
    Icon_Color: "text-amber-400",
    Icon_Color_1: "text-sky-600",
    Icon_Color_2: "text-green-500",
    Icon_Color_3: "text-red-500",
  },
];
/* eslint-enable @typescript-eslint/no-unused-vars */
function Slogens({ Icon, Sl_color, subTitle, title, Icon_Color }: SlogengType) {
  return (
    <div
      className="flex flex-col lg:flex-row items-center p-5 lg:p-6
     bg-white dark:bg-darker border
      border-neutral-100 dark:border-none 
      rounded-2xl"
    >
      <div
        className={`
                flex justify-center lg:justify-end items-center w-[94px] h-13 lg:w-13 
            lg:h-[94px] mb-11 lg:mb-0 lg:ml-11
             ${Sl_color} rounded-full
                `}
      >
        <Icon
          className={`size-13 ${Icon_Color}   translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2`}
        />
      </div>
      <div className={`text-center lg:text-right`}>
        <h4 className="lg:text-lg font-DanaBold">{title}</h4>
        <p className="text-sm lg:text-base mt-3.5 lg:mt-2 opacity-70">
          {subTitle}
        </p>
      </div>
    </div>
  );
}

export default Slogens;
