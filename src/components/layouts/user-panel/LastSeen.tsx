import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { CourseBodyType } from "@/types/services/course&category.t";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function LastSeen({userCourse}:{userCourse: CourseBodyType[] }) {
    const userCourses = userCourse.map((courses:CourseBodyType)=>{
      return courses
    })
  return (
    <div>
      <div
        className="flex justify-between items-center bg-white
         dark:bg-gray-800 px-3.5 py-2.5 md:p-4.5 mb-4 md:mb-5 
         rounded-2xl"
      >
        <span className="font-DanaMedium md:text-xl text-zinc-700 dark:text-white">
          اخیرا مشاهده شده
        </span>
        <Link
          href={"/my-account/courses"}
          className="flex items-center gap-x-2 px-3 py-2 rounded-lg bg-sky-500/10 text-sky-500 dark:bg-secondary/10 dark:text-secondary text-sm"
        >
          همه دوره ها ثبت نام شده
          <ArrowLeftIcon className="size-4" />
        </Link>
      </div>
      <div className="grid  xs:grid-cols-1 sm:grid-cols-2
      md:grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
        {
        userCourses.length ===0 ? <EmptyResult className="py-2  col-span-full h-[220px]" title={"هیچ دوره ای توسط شما ثبت نام نشده است"}/> 
        :
        
        userCourses?.slice(0,6).map((course:Pick<CourseBodyType,"cover"|"name"|"_id"|"shortName">,index)=>{
          return(
            <React.Fragment key={index as number}>
            <MiniCourseCard name={course.name} shortName={course.shortName} cover={course.cover} _id={course._id} />
            </React.Fragment>
          )
        })}

      </div>
    </div>
  );
}

export const MiniCourseCard = ({cover,name,shortName}:Pick<CourseBodyType,"cover"|"name"|"_id"|"shortName">) => {
  return (
    <div
      className=" flex flex-col overflow-hidden 
       bg-white dark:bg-dark/55 shadow-light 
      dark:shadow-none dark:border dark:border-gray-700
       rounded-2xl"
    >
      <div className="relative h-42">
        <Link className="w-full h-full block" href={`/courses/course/${shortName}`}>
          <ResponsiveImage
            src={cover}
            alt="دوره منتخصص next js"
            className="block  w-full h-full object-cover rounded-2xl"
            imageStyles="!relative !w-full !h-full !object-cover !rounded-2xl"
          />
        </Link>
      </div>
      {/* course body */}
      <div className="px-5 pb-3.5 pt-2.5 flex-grow ">
        <h4
          className="font-DanaMedium h-12 line-clamp-2
             text-zinc-700 dark:text-white mb-2.5"
        >
      <Link href={`/courses/course/${shortName}`}>
    {name}
      </Link>
        </h4>
      </div>
    </div>
  );
};
export default LastSeen;
