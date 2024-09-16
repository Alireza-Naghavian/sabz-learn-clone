import { PrimaryBtnType } from "@/types/buttons.t";
import { cva } from "class-variance-authority";
import React from "react";

const primaryStyle = cva(
  "flex  items-center justify-center select-none rounded-full  transition-all duration-300",
  {
    variants: {
      variant: {
        fill: "bg-baseColor text-white hover:bg-baseColor/75  ",
        outline:
          `border border-baseColor bg-transparent text-baseColor 
          hover:text-white hover:bg-baseColor`,
      },
      size: {
        md: "h-10 gap-x-2 px-3 text-sm leading-5",
        lg: " gap-x-2 h-12 leading-7  text-base px-4  ",
        xl: "h-[50px] gap-x-2 px-4 text-base leading-7",
        xxl: " h-[54px] gap-x-2 text-base leading-7 ",
      },
    },
  }
);

function PrimaryBtn({
  size,
  type,
  variant,
  children,
  className,
  Icon,
  ...props
}: PrimaryBtnType) {
  return (
    <button className={primaryStyle({ size, className, variant })} {...props}>
      {children}
    </button>
  );
}

export default PrimaryBtn;
