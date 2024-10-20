"use client"
import PrimaryBtn from '@/components/ui/button/PrimaryBtn'
import Tail_Info from '@/components/ui/tail-info/Tail_Info'
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import { useGetCourseQuery } from '@/services/course&Categories/courseApiSlice'
import { StarIcon, UserGroupIcon } from '@heroicons/react/24/solid'

function CourseSideBar({shortName,completionPercentage}:{shortName:string,completionPercentage:number}) {
    const {data:courseData,isFetching}= useGetCourseQuery({shortName});
  return (
    <div className="bg-white dark:bg-darker rounded-2xl p-4.5  sm:p-5">
    <div className="flex gap-x-4">
    {isFetching ?     <Tail_Info
        variant="sideInfo"
        Icon={UserGroupIcon}
        subTitle="دانشجو" 
        title={"درحال بارگزاری..."}
      />:
      <Tail_Info
      variant="sideInfo"
      Icon={UserGroupIcon}
      subTitle="دانشجو" 
      title={courseData?.registers?.toString() as string}
    />
      }
      <Tail_Info
        variant="sideInfo"
        Icon={StarIcon}
        IconColor="text-amber-500"
        subTitle="رضایت"
        title="۵.۰"
      />
    </div>
    <div className="mt-3.5 sm:mt-5">
      <div className="flex items-center justify-between font-DanaBold text-sm sm:text-base mb-3">
        <span>درصد تکمیل دوره</span>
        <span>{completionPercentage}%</span>
      </div>
      <div className="w-full bg-dark h-[.625rem] rounded-4xl overflow-hidden">
        <div
          style={{ width: `${completionPercentage}%` }}
          className="bg-baseColor h-full rounded-4xl"
        ></div>
      </div>
    </div>
    <div className="bg-white dark:bg-darker rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
      <ResponsiveImage
        src={"/images/user_sample.png"}
        alt="teacher"
        sizes=""
        className="w-24 h-24 box-center mx-auto"
        imageStyles="!relative !block mb-4 mx-auto !object-cover rounded-full"
      />
      <span className="font-DanaBold text-lg mb-2">
        {/* {courseData?.creator}| مدرس دوره */}
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
  )
}

export default CourseSideBar