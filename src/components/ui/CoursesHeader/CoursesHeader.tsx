"use client"
import { useSearchParams } from "next/navigation";
import React from "react";
type HeaderType = {
  qs: boolean;
  totalAmount: number|string;
  mainTitle: string;
};
function CoursesHeader({  totalAmount, mainTitle }: HeaderType) {
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  const search = urlSearchParams.get("search")

  return (
    <div
      className="flex flex-col sm:flex-row gap-y-2 items-center 
  justify-between mb-8 lg:mb-15"
    >
      <div className="flex gap-2.5 items-center">
        <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
        <h2 className="text-center font-DanaBold text-2xl lg:text-3xl">
          {search !==null && <span>جستجو:{search}</span>}
        {search === null &&  <span>{mainTitle}</span>}
        </h2>
      </div>
      <span className="sm:text-xl  font-DanaMedium text-slate-500">
        <span>{totalAmount}</span>
       
      </span>
    </div>
  );
}

export default CoursesHeader;
