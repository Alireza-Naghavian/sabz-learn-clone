import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
type ContentListType = {
  title: string;
  children:React.ReactNode;
  link?: string;
};
function ContentList({ title, link,children }: ContentListType) {
  return (
    <div className="max-h-[600px] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 p-3.5 md:p-4.5 rounded-2xl">
        <div className="flex justify-between items-center 
        pb-3.5 md:pb-4.5 mb-6 md:mb-7
         border-b border-b-gray-200 dark:border-b-gray-700">
    <span className="font-DanaMedium md:text-xl
     text-zinc-700 dark:text-white">{title}</span>

       
        {link && (
          <Link
            href={link}
            className="flex items-center gap-x-2 px-3 py-2 rounded-lg bg-sky-500/10 text-sky-500 dark:bg-secondary/10 dark:text-secondary text-sm"
          >
            همه تیکت ها
            <ArrowLeftIcon className="size-4" />
          </Link>
        )}
          </div>
        <div className="">
            
    {children}
        </div>
      </div>
    </div>
  );
}

type ContentType = {
  target: string;
  title: string;
  status: string;
};
export const ContentItem = ({ target, title, status }: ContentType) => {
  return (
    <div
      className="flex items-center justify-between
         flex-wrap gap-y-3 p-3 hover:bg-gray-100
          dark:hover:bg-gray-700 rounded-xl transition-colors"
    >
      <Link
        href={target}
        className="text-zinc-700 
        dark:text-white w-full sm:max-w-sm sm:truncate"
      >
        {title}
      </Link>
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          1402/10/16
        </span>
        <span
          className="text-xs py-1 px-1.5 text-slate-500
             dark:text-yellow-400 bg-slate-500/10
              dark:bg-yellow-400/10 rounded"
        >
          {status}
        </span>
      </div>
    </div>
  );
};
export default ContentList;
