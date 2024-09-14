import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function BlogCard() {
  return (
    <div
      className=" flex flex-col bg-white
     dark:bg-darker border
      border-neutral-100 dark:border-none 
      overflow-hidden rounded-2xl"
    >
      <div className="  relative h-[182px] overflow-hidden">
        <ResponsiveImage
        className="blog__banner "
          imageStyles="!relative    !block !w-full !h-full !object-cover"
          src={"/images/blogSample.jpg"}
          alt=""
        />
      </div>
      <div className="flex-grow px-5 py-3">
        <h3 className="font-DanaBold line-clamp-2 mb-3">
          <Link href={""}>پایتون مناسب چه کسانی است ؟</Link>
        </h3>
        <p className="text-sm line-clamp-4 text-gray-900/70 dark:text-white/70">
          پایتون، زبانی که شاید نامش را زیاد شنیده باشید، یکی از پرطرفدارترین
          زبان‌های برنامه‌نویسی در دنیای فناوری است. اما چه چیزی این زبان را از
          دیگران متمایز می‌کند؟ چرا افراد…
        </p>
      </div>
      <div className="px-5 pb-5">
        <div
          className="flex justify-between items-center text-slate-500
         dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70
          dark:border-b-white/10"
        >
          <div className="flex items-center gap-x-0.5">
            <UserIcon className="size-5" />
            <span>مهدی ایلخانی نسب</span>
          </div>
          <div className="flex items-center gap-x-0.5">
            <CalendarIcon className="size-5" />
            <span>1403/06/22</span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={""}
            className="hover:text-baseColor flex justify-center  gap-x-2 font-DanaMedium transition-colors"
          >
            <span>مشاهده مقاله</span>
            <ArrowLeftCircleIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
