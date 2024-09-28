import { StatusBoxType } from "@/types/textFilels.t";
import React from "react";

function StatusBox({
  value,
  title,
  watch,
  register,
  Icon,
  name,
  className,
  validattionschema,
  status,
  setStatus,
  wrapperStyles
}: StatusBoxType) {
  return (
    <div className={`basis-[50%] h-[50px] 
      overflow-hidden relative ${wrapperStyles}`}>
      <div
       onClick={() => setStatus(value)} 
        className={` absolute transition-all duration-300 inset-0 z-20 ${
          status == value ? "bg-baseColor" : "dark:bg-dark bg-gray-200"
                  }  ${className}`}
      >
        <label
          htmlFor={name}
          className="flex items-center  justify-center gap-y-1 w-full h-full"
        >
          <div className="w-1/2">
          <Icon className=" size-7 sm:size-8  mx-auto" />
          </div>
          <span className="font-DanaBold text-sm  sm:text-lg w-1/2 px-2 text-center">
            {title}
          </span>
        </label>
      </div>
      <input
       checked={watch(name) ===value}
        type="radio"
        name={name}
        id={name}
        value={value}
        {...register(name,validattionschema)}
        className="flex  w-full h-full absolute invisible z-10"
      />
    </div>
  );
}

export default StatusBox;
