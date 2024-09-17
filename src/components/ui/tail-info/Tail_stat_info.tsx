import React from "react";
import { Tail_Info_type } from "./Tail_Info";
type Tail_stat_Type = Omit<Tail_Info_type, "subTitle" | "variant"> & {
  title: string;
  supTitle: string;
} & React.ComponentProps<"div">;
function Tail_stat_info({ Icon, supTitle, title, className }: Tail_stat_Type) {
  return (
    <div
      className={`flex items-center gap-x-2.5 
  md:gap-x-4 flex-grow md:flex-grow-0 md:w-60
    p-2 ${className}
    rounded-2xl`}
    >
      <div className="box-center w-14 h-14 md:w-[68px] md:h-[68px] bg-white/20 rounded-2xl">
        <Icon className="w-8 h-8 md:w-9 md:h-9 text-white" />
      </div>
      <div className="flex flex-col gap-y-1.5 md:gap-y-2 text-white">
        <span className="text-xs">{supTitle}</span>
        <span className="font-DanaBold text-sm md:text-lg">{title}</span>
      </div>
    </div>
  );
}

export default Tail_stat_info;
