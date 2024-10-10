import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import TitleHeader from "./TitleHeader";
import { CourseDataTable } from "@/types/services/course&category.t";
type RealateCardType = {
  cover: string;
  title: string;
  target: string;
};
function RelateCourse({ relateCourses }: { relateCourses: CourseDataTable[] }) {
  return (
    <section
      className=" hidden lg:block bg-white dark:bg-darker 
     rounded-2xl p-4.5 sm:p-5 mt-8"
    >
      <TitleHeader
        Icon={SparklesIcon}
        IconColor="text-amber-400"
        className="bg-amber-400"
        title="دوره های مرتبط"
      />
      <div className="space-y-4 md:space-y-5">
        {relateCourses.map((course, index) => {
          return (
            <RelateCard
              key={index}
              title={course.name}
              cover={course.cover}
              target={`/courses/course/${course.shortName}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export const RelateCard = ({ cover, title, target }: RealateCardType) => {
  return (
    <div
      className="flex items-center justify-between flex-wrap
         bg-gray-100 dark:bg-dark rounded-lg py-2 pr-2 pl-4"
    >
      <div className="flex items-center gap-x-4 w-4/5">
        <ResponsiveImage
          className="!relative w-24 rounded-md aspect-video"
          imageStyles="!w-full !h-full !object-cover !rounded-md"
          alt={title}
          src={cover}
        />
        <Link href={target} className="font-DanaMedium line-clamp-2">
          {title}
        </Link>
      </div>
      <Link
        href={target}
        className="flex gap-x-1 items-center justify-between sm:justify-normal
       text-sky-500 font-DanaBold text-sm"
      >
        <span>مشاهده</span>
        <ArrowLeftCircleIcon className="size-6 md:size-5" />
      </Link>
    </div>
  );
};
export default RelateCourse;
