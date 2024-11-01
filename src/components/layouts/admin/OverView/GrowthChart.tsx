"use client"
import Chart from '@/components/shared/Chart/Chart';
import TextLoader from '@/components/ui/loader/TextLoader';
import { useGetUsersQuery } from '@/services/users/userApiSlice';
import { CourseUserType } from '@/types/services/course&category.t';
import { Bar } from 'recharts';
import { OverViewType } from './OverView';

function GrowthChart({salesData}:Pick<OverViewType,"salesData">) {
    const {data,isLoading}= useGetUsersQuery();
    const userCourses = data?.map((userCourse)=>{
        return userCourse.userCourse
    }).flat();
    const totalUserPending = salesData.allCreditsSpend.reduce(
        (acc: any, curr: CourseUserType) => acc + curr.price,
        0
      );
      const growthData =userCourses?.reduce((acc:any,curr:any)=>{
       const joinDate = new Date(curr.createdAt).toLocaleDateString("fa-IR")
        if(!acc[joinDate]){
            acc[joinDate]={
                تاریخ:joinDate,
                تعداد_کاربران_جدید :0,
                مجموع_خرید_کاربر:0
            }
        }
        acc[joinDate].تعداد_کاربران_جدید+=1
        acc[joinDate].مجموع_خرید_کاربر +=curr.price
        return acc
      },{})

      const yAxisMax = totalUserPending+ 1_000_000;
      if(isLoading) return <TextLoader loadingCondition={isLoading}/>
      const growthDataValues = Object.values(growthData);
  return (
    <div
      className="w-full bg-secondary/5 px-1 
       flex lg:flex-row flex-col gap-y-5 lg:gap-y-0 items-center sm:items-start overflow-x-hidden
        py-4 "
    >
      <div className="flex flex-col gap-y-4 sm:px-4 justify-start w-[230px]  items-start h-full mt-12">
        <div className="font-DanaBold text-gray-100 rounded-md w-full   bg-baseColor/55 p-2 flex items-start  gap-x-2 ">
          <span className="">تعداد کاربران :</span>
          <span>{salesData.allUsers.toLocaleString("fa-IR")}&nbsp; کاربر</span>
        </div>
        <div className="font-DanaBold text-gray-100  w-full  leading-7 rounded-md bg-baseColor/55 p-2 flex flex-col gap-y-4 items-start  gap-x-2 ">
          <p className="">
            <span className="">درآمد ناخالص:</span>
            <span className="line-clamp-2">
              {totalUserPending.toLocaleString("fa-Ir")} تومان
            </span>
          </p>
        </div>
      </div>
      <Chart mainData={growthDataValues} YDomain={[0, yAxisMax]}>
        <Bar
          dataKey={"تعداد_کاربران_جدید"}
          stroke="#711D1C"
          fill="#0ea5e9"
          width={100}
          height={40}
        />
        <Bar
          dataKey={"مجموع_خرید_کاربر"}
          stroke="#22c55e"
          fill="#22c55e"
          width={100}
          height={40}
        />
      </Chart>
    </div>
  )
}

export default GrowthChart