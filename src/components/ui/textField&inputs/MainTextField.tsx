import { MainTextFieldType } from "@/types/textFilels.t";
import { cva } from "class-variance-authority";

const inputGroup = cva(" dark:bg-dark dark:text-white text-gray-900 bg-gray-100 focus:outline-none font-Dana w-full text-right", {
  variants: {
    variant: {
      outLine: " border-2 text-gray-900 dark:text-white",
      borderFill: "bg-transparent border-2 border-darker/55 ",
      rounded: "  text-[#777777] rounded-lg",
    },
    size: {
      mediumSize: "h-[42px]  py-5 px-4 text-base leading-[22px]",
      largeSize: "h-[50px] py-[12px] px-5 text-lg leading-6",
    },
  },
  defaultVariants: {
    size: "mediumSize",
    variant: "outLine",
  },
});

function MainTextField({
  className = "",
  type = "text",
  size,
  value,
  label,
  placeHolder = "",
  name,
  id,
  variant = "outLine",
  register,
  required = true,
  validattionschema,
  errors,
  readOnly = false,
}: MainTextFieldType) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={id} className={"relative font-DanaMedium pb-1"}>
        <span className={"font-Shabnam_B"}>{label}</span>

        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...register(name, validattionschema)}
        id={id}
        value={value}
        name={name}
        type={type}
        readOnly={readOnly}
        placeholder={placeHolder}
        className={inputGroup({ variant, className, size })}
      />
      {errors && errors[name] && (
        <span className="text-red-500 block text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default MainTextField;