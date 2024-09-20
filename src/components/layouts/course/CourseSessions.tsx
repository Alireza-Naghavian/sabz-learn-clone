"use client";

import useDisclosure from "@/hooks/useDisclosure";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "./course.css";
import TitleHeader from "./TitleHeader";
function CourseSessions() {
  return (
    <div id="sessions" className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
      <TitleHeader
        title="سرفصل ها"
        Icon={AcademicCapIcon}
        IconColor="text-sky-500"
        className="bg-sky-500"
      />
      <div className="space-y-4 md:space-y-5">
        <CourseTopic topicTime={20} topicTitle="معرفی دوره" topiclessons={2} />
        <CourseTopic topicTime={20} topicTitle="معرفی دوره" topiclessons={2} />
      </div>
    </div>
  );
}
type TopicType = {
  topicTitle: string;
  topiclessons: number;
  topicTime: number;
};
export const CourseTopic = ({
  topicTitle,
  topiclessons,
  topicTime,
}: TopicType) => {
  const [isSessionOpen, { toggle }] = useDisclosure();
  return (
    <div className={`topic`}>
      <div
        className={`${
          isSessionOpen ? "topic__head topic__head--active" : "topic__head"
        }`}
        onClick={() => toggle()}>
        <span
          className="topic__title inline-block font-DanaBold 
        lg:line-clamp-3 transition-colors"
        >
          {topicTitle}
        </span>
        <div className="flex items-center gap-x-2.5 shrink-0">
          <div
            className="topic__time flex  items-center
             gap-x-1.5 font-DanaMedium text-sm
             text-slate-500 dark:text-white child:transition-colors" dir="rtl"
          >
            <span className="text-base font-DanaMedium hidden lg:inline">{topicTime}</span>
            {/* seperator */}
            <span
              className="topic__time-dot hidden lg:block size-1 bg-slate-500/50
             dark:bg-white/50 rounded-full"
            ></span>
            {/* seperator */}
            <span className="text-base font-DanaMedium hidden lg:flex">
              lessons &nbsp;
              {topiclessons}
            </span>

            <ChevronDownIcon
              className={`${isSessionOpen ? "rotate-180  ":"rotate-0"}  
               size-6  !transition-all ease-in-out duration-300 font-DanaMedium`}
            />
          </div>
        </div>
      </div>
      <div className={`topic__body transition-all ease-linear duration-300 group ${isSessionOpen ? "h-max" : 'h-0'}`}>
        <SessionItem index={1} sessionTitle="مقدمه و معرفی" />
      </div>
    </div>
  );
};

export const SessionItem = ({
  index,
  sessionTitle,
}: {
  index: number;
  sessionTitle: string;
}) => {
  return (
    <div
      className="flex items-start justify-between gap-x-5 
        gap-y-3 flex-wrap lg:flex-nowrap px-4 py-5 group"
    >
      <div
        className="flex items-start flex-grow gap-x-2.5 
            md:gap-x-3.5 child:transition-colors"
      >
        <div
          className="box-center w-8 h-6 md:h-7 text-sm 
          font-DanaBold bg-white
    dark:bg-white/10 group-hover:bg-baseColor
    group-hover:text-white rounded"
        >
          {index}
        </div>
        <Link
          href={""}
          className="inline-block lg:max-w-3/4
           text-sm md:text-base 
            group-hover:text-baseColor "
        >
          {sessionTitle}
        </Link>
      </div>
      <div
        className="flex items-center 
      gap-x-1.5 mr-auto
       group-hover:text-baseColor
       child:transition-colors"
      >
        <span className="text-sm md:text-base">08:26</span>
        <PlayCircleIcon className="size-7" />
      </div>
    </div>
  );
};
export default CourseSessions;
