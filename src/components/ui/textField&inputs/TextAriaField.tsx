import { TextAriaType } from "@/types/textFilels.t";
import { cva } from "class-variance-authority";
import React from "react";

const inputGroup = cva(`
   block p-4.5 md:p-4 focus:outline-none w-full text-right
   text-gray-900 dark:text-white placeholder:text-slate-500/70 
   font-DanaMedium  rounded-xl
  `, {
  variants: {
    variant: {
      outLine: "bg-white  ",
      freeMode: "bg-gray-100 dark:bg-dark  ",
    },
    size: {
      medium: "h-[142px]  py-5 px-4 text-base leading-[22px]",
      free: " py-[12px] px-5 text-base leading-6",
    },
  },
  defaultVariants: {
    variant: "outLine",
    size: "medium",
  },
});
function TextAriaField({
  size,
  variant = "outLine",
  type = "text",
  placeHolder,
  name,
  id,
  register,
  errors,
  validattionschema,
  value,
  className,
  readOnly=false
}:TextAriaType) {
  return   <div className="flex flex-col gap-y-2">
  <textarea
    cols={80}
   readOnly={readOnly}
    {...register(name, validattionschema)}
    id={id}
    value={value}
    name={name}
    type={type}
    placeholder={placeHolder}
    className={inputGroup({ variant, size, className })}
  />
  {errors && errors[name] && (
    <span className="text-red-500 block text-sm mt-1">
      {errors[name]?.message}
    </span>
  )}
</div>;
}

export default TextAriaField;
