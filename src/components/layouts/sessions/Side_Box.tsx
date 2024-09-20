"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ChevronDownIcon,
  ClockIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import TitleHeader from "../course/TitleHeader";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";

function Side_Box() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <aside
      className="col-span-full order-first
     md:order-none md:col-span-5 xl:col-span-4"
    >
      {/* chapters */}
      <div
        className="bg-white dark:bg-darker border 
        dark:border-none border-neutral-100 pl-1.5
         pr-4.5 sm:pr-5 py-4.5 sm:py-5 rounded-xl mt-6 lg:mt-0"
      >
        <TitleHeader
          className="bg-amber-400 "
          Icon={DocumentTextIcon}
          title="سرفصل های دوره"
          IconColor="text-amber-400 "
        />
        <div className="chapters gap-y-4 flex flex-col w-full">
          <Chapter
            id="intro"
            toggle={toggleDropdown}
            isBoxOpen={openDropdown === "intro"}
          />
          <Chapter
            id="req"
            toggle={toggleDropdown}
            isBoxOpen={openDropdown === "req"}
          />
        </div>
      </div>
      {/* info */}
      <div
        className="grid grid-cols-3 
      gap-3.5 mt-6 child:flex child:!flex-col
       child:!items-center child:!justify-center
       child:!text-center
        lg:mt-8"
      >
        <Tail_Info
          subTitle="تکمیل شده"
          title="وضعیت "
          variant="mainInfo"
          Icon={InformationCircleIcon}
        />
        <Tail_Info
          subTitle="۵۸:۳۴"
          title="زمان دوره"
          variant="mainInfo"
          Icon={ClockIcon}
        />
        <Tail_Info
          subTitle="۳۸۹"
          title="جلسات دوره"
          variant="mainInfo"
          Icon={VideoCameraIcon}
        />
      </div>
      <div className="mt-8">
        <div className="bg-white dark:bg-darker rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
          <ResponsiveImage
            src={"/images/user_sample.png"}
            alt="teacher"
            sizes=""
            className="w-24 h-24 box-center mx-auto"
            imageStyles="!relative !block mb-4 mx-auto !object-cover rounded-full"
          />
          <span className="font-DanaBold text-lg mb-2">
            محمد امین سعیدی راد| مدرس دوره
          </span>
          <p className="mt-6"></p>
          <PrimaryBtn
            className="px-6 mx-auto "
            size="xxl"
            variant="outline"
            type="button"
          >
            مشاهده پروفایل من
          </PrimaryBtn>
        </div>
      </div>
    </aside>
  );
}
const Chapter = ({
  toggle,
  id,
  isBoxOpen,
}: {
  id: string;
  toggle: (id: string) => void;
  isBoxOpen: boolean;
}) => {
  return (
    <div className="chapter">
      <div
        onClick={() => toggle(id)}
        className={`${
          isBoxOpen ? "chapter__head chapter__head--active" : "chapter__head"
        }`}
      >
        <span className="font-DanaMedium truncate">معرفی دوره</span>
        <ChevronDownIcon
          className={`shrink-0 size-6 transition-transform ${
            isBoxOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="chapter__lessons">
        <LessonItem
          isComplete
          lessonTarget=""
          time="20:33"
          title="معرفی دوره"
        />
        <LessonItem
          isComplete
          lessonTarget=""
          time="20:33"
          title="پیشنیاز دوره"
        />
      </div>
    </div>
  );
};

type LessonType = {
  lessonTarget: string;
  title: string;
  time: string;
  isComplete: boolean;
};

const LessonItem = ({ lessonTarget, title, time, isComplete }: LessonType) => {
  return (
    <div className="lesson py-4 border-b last:border-none border-gray-500/75">
      <Link
        href={lessonTarget}
        className="block line-clamp-2 dark:!text-white dark:!bg-transparent"
      >
        {title}
      </Link>
      <div className="flex items-center justify-between mt-3 sm:mt-2">
        <div className="status">
          {isComplete ? (
            <CheckIcon
              className=" w-5 h-5 py-px box-center rounded-full
             text-white bg-baseColor"
            />
          ) : (
            <span
              className="w-5 h-5 box-center rounded-full border-2
             border-baseColor"
            ></span>
          )}
        </div>
        <div
          className="min-w-18  box-center px-4 py-2
         text-baseColor rounded-full bg-transparent
         hover:bg-baseColor hover:text-white  border
          border-baseColor
        transition-all duration-300 button-outline"
        >
          {time}
        </div>
      </div>
    </div>
  );
};
export default Side_Box;
