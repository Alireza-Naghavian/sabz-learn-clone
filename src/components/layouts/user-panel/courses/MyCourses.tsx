"use client"
import Tail_stat_info from '@/components/ui/tail-info/Tail_stat_info'
import { CreditCardIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { MiniCourseCard } from '../LastSeen'
import { useUserDataQuery } from '@/services/users/userApiSlice'
import TextLoader from '@/components/ui/loader/TextLoader'

function MyCourses() {
  const {data,isLoading}= useUserDataQuery();
  const userCourses = data?.userCourse.filter((courses)=>{
    return courses.course
  })
  const userCourseArr = userCourses?.flatMap((course)=>course.course)
  const userPaidCoursesArr = userCourseArr?.filter((paidCourse)=>paidCourse.isFree === false)

  if(isLoading)return <TextLoader loadingCondition={isLoading}/>
  return (
<>
<div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
<Tail_stat_info
          supTitle="دوره ها ثبت نام شده"
          title={`${userCourseArr?.length} دوره`}
          Icon={CreditCardIcon}
          className="dark:bg-yellow-400 bg-amber-400"
        />
           <Tail_stat_info
          supTitle="دوره های نقدی"
          title={`${userPaidCoursesArr?.length} دوره`}
          Icon={CurrencyDollarIcon}
          className="bg-secondary"
        />
         <Tail_stat_info
          supTitle="دوره های رایگان"
          title={`${Number(userCourseArr?.length  )- Number(userPaidCoursesArr?.length)} دوره`}
          Icon={RocketLaunchIcon}
          className="bg-baseColor"
        />
        {/* course list */}
        <div className="grid  w-full  mt-6 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5">
           {userCourseArr?.map((course,index)=>{
            return(
              <MiniCourseCard key={index}
               name={course.name}
                shortName={course.shortName}
                cover={course.cover}
                _id={course._id}
                />
            )
           })}
        </div>
</div>
</>
  )
}

export default MyCourses