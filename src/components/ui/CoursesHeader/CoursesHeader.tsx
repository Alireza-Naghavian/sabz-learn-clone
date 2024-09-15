import React from "react";
type HeaderType = {
  qs: boolean;
  coursesAmount: number;
  mainTitle: string;
};
function CoursesHeader({ qs, coursesAmount, mainTitle }: HeaderType) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-y-2 items-center 
  justify-between mb-8 lg:mb-15"
    >
      <div className="flex gap-2.5 items-center">
        <span className="hidden sm:inline-block w-4 h-4 bg-amber-400 rounded-sm"></span>
        <h2 className="text-center font-DanaBold text-2xl lg:text-3xl">
          {qs && <span>جستجو:</span>}
          <span>{mainTitle}</span>
        </h2>
      </div>
      <span className="sm:text-xl flex gap-x-1 font-DanaMedium text-slate-500">
        <span>{coursesAmount}</span>
        <span>عنوان آموزشی</span>
      </span>
    </div>
  );
}

export default CoursesHeader;
