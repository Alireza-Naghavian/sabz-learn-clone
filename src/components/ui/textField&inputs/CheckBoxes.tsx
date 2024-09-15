import { TextFieldType } from "@/types/textFilels.t";
import React from "react";
import "./textFieldStyle.css";
function CheckBoxes({
  className = "",
  type,
  value,
  label,
  placeHolder = "",
  name,
  register,
  required = true,
  errors,
  id,
  readOnly = false,
  wrapperStyle
}: TextFieldType) {
  return (
    <div
      className={`px-7 h-[68px] shadow-light dark:shadow-none bg-white
    dark:bg-darker dark:border border-gray-700 rounded-2xl ${wrapperStyle}`}
    >
      <div className="flex items-center justify-between h-full">
        <span className="text-base font-DanaMedium text-zinc-700 dark:text-white select-none">
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
        <label className="toggle">
          <input
            className={`toggle_input check-sort-input freeInp ${className}`}
            type={type}
            id={id}
            readOnly={readOnly}
            name={name}
            value={value}
            placeholder={placeHolder}
            {...register(name)}
          />
          {errors && errors[name] && (
            <span className="text-red-500 block text-sm mt-1">
              {errors[name]?.message}
            </span>
          )}
          <span className="toggle_marker dark:bg-[#1c1c28] bg-[#e5e7eb]"></span>
        </label>
      </div>
    </div>
  );
}

export default CheckBoxes;
