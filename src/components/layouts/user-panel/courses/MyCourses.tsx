import Tail_stat_info from '@/components/ui/tail-info/Tail_stat_info'
import { CreditCardIcon, CurrencyDollarIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { MiniCourseCard } from '../LastSeen'

function MyCourses() {
  return (
<>
<div className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-10 mb-10">
<Tail_stat_info
          supTitle="دوره ها ثبت نام شده"
          title="۱۲ دوره"
          Icon={CreditCardIcon}
          className="dark:bg-yellow-400 bg-amber-400"
        />
           <Tail_stat_info
          supTitle="دوره های نقدی"
          title="3 دوره"
          Icon={CurrencyDollarIcon}
          className="bg-secondary"
        />
         <Tail_stat_info
          supTitle="دوره های رایگان"
          title="۱۲ دوره"
          Icon={RocketLaunchIcon}
          className="bg-baseColor"
        />
        {/* course list */}
        <div className="grid  w-full  mt-6 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-5">
            <MiniCourseCard/>
            <MiniCourseCard/>
            <MiniCourseCard/>
            <MiniCourseCard/>
            <MiniCourseCard/>
        </div>
</div>
</>
  )
}

export default MyCourses