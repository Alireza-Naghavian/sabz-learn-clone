"use client"
import EmptyResult from '@/components/ui/EmptyResult/EmptyResult'
import Tail_stat_info from '@/components/ui/tail-info/Tail_stat_info'
import TailSkelton from '@/components/ui/TailSkelton/TailSkelton'
import { useUserDataQuery } from '@/services/users/userApiSlice'
import { CreditCardIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { MiniCourseCard } from '../LastSeen'


function MyCourses() {
  const {data,isLoading}= useUserDataQuery();
  const userCourses = data?.userCourse.filter((courses)=>{
    return courses.course
  })

  const userCourseArr = userCourses?.flatMap((course)=>course.course)
  const userPaidCoursesArr = userCourseArr?.filter((paidCourse)=>paidCourse.isFree === false)


  return (
<>
{isLoading ? <TailSkelton count={3}/> :

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
           {
           userCourseArr?.length ===0? <EmptyResult className='col-span-full py-4' title={"هیچ دوره ای توسط شما ثتب نام نشده است"}/>:
           
           userCourseArr?.map((course,index)=>{
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
}
</>
  )
}

export default MyCourses