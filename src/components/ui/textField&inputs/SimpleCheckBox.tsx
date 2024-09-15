import React, { useState } from "react";
import "./textFieldStyle.css";
import { TextFieldType } from "@/types/textFilels.t";
function SimpleCheckBox({
  className = "",
  type,
  value,
  label,
  name,
  register,
  required = true,
  id,
}: TextFieldType) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <label htmlFor={id} className={`checkbox ${className}`}>
        <input
          className="checkbox__input"
          name={name}
          id={id}
          required={required}
          onInput={() => setChecked((is) => !is)}
          {...register(name)}
          value={value}
          type={type}
        />
        <span
          className={`size-1  px-2 py-2 rounded-sm ${
            checked ? "bg-sky-500" : "dark:bg-white bg-gray-100"
          }`}
        ></span>
        <span className="text-sm font-danaMedium select-none">
          {label}
          {required && <span className="text-red-500">*</span>}
        </span>
      </label>
    </>
  );
}

export default SimpleCheckBox;