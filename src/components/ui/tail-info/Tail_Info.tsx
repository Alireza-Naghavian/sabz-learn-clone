import { IconType } from "@/types/icon.t";
import { cva } from "class-variance-authority";
import React from "react";
import "./Tail_info.css";
export type Tail_Info_type = {
  title: string | number;
  subTitle: string;
  Icon: IconType;
  IconColor?:string
  variant: "mainInfo" | "sideInfo";
} & React.ComponentProps<"div">;
const tail_Style = cva("Tail_Wrapper", {
  variants: {
    variant: {
      mainInfo:
        "gap-y-1 pb-3.5  pt-4   px-4.5  sm:py-3  bg-white dark:bg-darker  ",

      sideInfo:
        "gap-y-2.5 flex-grow pt-3.5 pb-3 sm:px-3.5 bg-gray-100 dark:bg-dark ",
    },
  },
});

function Tail_Info({
  Icon,
  variant,
  className,
  subTitle,
  IconColor="text-green-500",
  title,
  ...props
}: Tail_Info_type) {
  return (
    <div className={tail_Style({ className, variant })} {...props}>
     <Icon className={`w-10 sm:w-11 h-10 sm:h-11 ${IconColor}`}/>
      <div className="space-y-0.5 sm:space-y-1">
        <span className="block font-danaBold text-sm sm:text-base">
          {title}
        </span>
        <span className="block text-sm opacity-70">{subTitle}</span>
      </div>
    </div>
  );
}

export default Tail_Info;
