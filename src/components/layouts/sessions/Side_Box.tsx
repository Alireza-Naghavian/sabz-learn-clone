"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  ChevronDownIcon,
  ClockIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  LockClosedIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import TitleHeader from "../course/TitleHeader";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { SessionBodyType, TopicDataType } from "@/types/services/sessions&Topics.t";
import { CourseDataTable } from "@/types/services/course&category.t";
import { usePathname } from "next/navigation";
import { formatTime } from "@/utils/videoData";


function Side_Box({courseSessions,sessionNumb}:{courseSessions:CourseDataTable,sessionNumb:number}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const totalSessionTime = courseSessions.topics?.map((topic)=>{
    return topic.sessions.reduce((acc:any,curr:any)=>{
    const sessionTimes = curr.time.split(":")
    const seconds = Number(sessionTimes[1])
    const minutes = Number(sessionTimes[0]) *60
    const totalSeconds = seconds + minutes
      return acc +totalSeconds
    },0)
  })
    const formatSessionTime = formatTime(totalSessionTime &&totalSessionTime[0])
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
         {courseSessions.topics?.map((topic,index)=>{
          return(
            <Chapter
            key={index}
            id={topic.title}
            toggle={toggleDropdown}
            isBoxOpen={openDropdown === topic.title}
            {...topic}
            courseShortName={courseSessions.shortName}
          />
          )
         })}
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
          subTitle={courseSessions.status === "inProgress" ? "در حال برگزاری":"درحال پیش فروش"}
          title="وضعیت "
          variant="mainInfo"
          Icon={InformationCircleIcon}
        />
        <Tail_Info
          subTitle={`${formatSessionTime} دقیقه`}
          title="زمان دوره"
          variant="mainInfo"
          Icon={ClockIcon}
        />
        <Tail_Info
          subTitle={sessionNumb.toLocaleString("fa-IR")}
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
               {courseSessions.creator.username}| مدرس دوره
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



type chapterType =Partial<TopicDataType>&{
  id: string;
  toggle: (id: string) => void;
  isBoxOpen: boolean;
  courseShortName:string
}
const Chapter = ({
  toggle,
  id,
  isBoxOpen,
  course,sessions,title,courseShortName
}:chapterType ) => {

  return (
    <div className="chapter">
      <div
        onClick={() => toggle(id)}
        className={`${
          isBoxOpen ? "chapter__head chapter__head--active" : "chapter__head"
        }`}
      >
        <span className="font-DanaMedium truncate">{title}</span>
        <ChevronDownIcon
          className={`shrink-0 size-6 transition-transform ${
            isBoxOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div className="chapter__lessons">
        {sessions?.map((session,index)=>{
          const splitter = session.time.split(":")
          console.log(splitter);
          return(
            <LessonItem
            key={index}
            isComplete
            lessonTarget={`/courses/course/session/${courseShortName}/${session._id}`}
            time={session.time}
            title={session.title}
          _id={session._id!}
          isFree={session.isFree}
          />
          )
        })}
      
      </div>
    </div>
  );
};

type LessonType = {
  lessonTarget: string;
  title: string;
  time: string;
  isComplete: boolean;
  _id:string
  isFree:boolean|number
};

const LessonItem = ({ lessonTarget, title, time, isComplete,_id ,isFree}: LessonType) => {
  const path = usePathname();
  const pathId = path.split("/").at(5)

  return (
    <div className="lesson py-4 border-b last:border-none border-gray-500/75">
 {isFree ==1? 
      <Link
      href={_id===pathId ?"" :lessonTarget}
      className={`block line-clamp-2  hover:text-baseColor dark:text-white dark:bg-transparent ${_id == pathId && "!text-baseColor"}`}
    >
      {title}
    </Link>
 :
 <span
 className={`block line-clamp-2  !transition-colors !duration-100 hover:!text-baseColor dark:text-white  ${_id == pathId && "!text-baseColor"}`}
>
 {title}
</span>
 }
      <div className="flex items-center justify-between mt-3 sm:mt-2">
        <div className="status">
          {!isComplete ? (
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
          {isFree ===1 ? 
             <div
             className="min-w-18  box-center px-4 py-2
            text-baseColor rounded-full bg-transparent
            hover:bg-baseColor hover:text-white  border
             border-baseColor
           transition-all duration-300 button-outline"
           >
             {time}
           </div>
          :
          <div
          className="  box-center p-1
         text-red-500 rounded-full bg-transparent
         hover:bg-red-500 hover:text-white  border
          border-red-500
        transition-all duration-300 button-outline"
        >
          <LockClosedIcon className="size-5 "/>
       
        </div>
          }
      </div>
    </div>
  );
};
export default Side_Box;
