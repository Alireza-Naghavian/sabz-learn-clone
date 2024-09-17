import { SelectType } from "@/types/buttons.t";
import "./select.css"
function Select<T extends string | number | boolean>({
  value,
  onChange,
  options,
  className,
  selectTitle,
  optionClassName,
}: SelectType<T>) {
  return (
    <div className="flex flex-col gap-y-2 justify-end ">
      <span className="text-sm  text-right text-dark_shade font-DanaMedium">
        <span className="hidden md:block">{selectTitle}</span>
      </span>
      <select   value={String(value)} onChange={onChange} className={`select ${className}`}>
        {options &&
          options.map((item: any, index: number) => {
            return (
              <>
              <option
                key={index}
                value={item?.value}
                className={`focus:outline-none focus:border-none 
                  rounded-lg bg-dark  ${optionClassName}`}
                  >
                {item.label}
              </option>
                </>
            );
          })}
      </select>
    </div>
  );
}

export default Select;
