"use client";
import React from "react";
import { OverViewType } from "./OverView";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import { Bar } from "recharts";
import Chart from "@/components/shared/Chart/Chart";
import { CourseUserType } from "@/types/services/course&category.t";

function SalesChart({ mostPopCourses, salesData }: OverViewType) {
  if (salesData === undefined)
    return (
      <div className="mt-5">
        <EmptyResult
          className="py-4"
          title={"اطلاعاتی برای رصد نمودار موجود نیست"}
        />
      </div>
    );
  const SaleUserData = salesData.allCreditsSpend.reduce(
    (acc: any, curr: CourseUserType) => {
      const date = new Date(curr.createdAt).toLocaleDateString("fa-IR");
      if (!acc[date]) {
        acc[date] = { تاریخ: date, فروش: 0, تعداد_ثبتنامی: 0 };
      }
      acc[date].تعداد_ثبتنامی += salesData.allCreditsSpend.filter(
        (userCart) =>
          new Date(userCart.createdAt).getTime() === new Date(curr.createdAt).getTime()
      ).length;
      acc[date].فروش += curr.price;
      return acc;
    },
    {}
  );
  const formattedSalesData = Object.values(SaleUserData);
  const maxSales = Math.max(
    ...formattedSalesData.map((data: any) => data.فروش)
  );

  const YAxisMax = maxSales + 1_000_000;
  return (
    <div
      className="w-full bg-secondary/5 px-2
         flex lg:flex-row flex-col gap-y-5 lg:gap-y-0 items-center sm:items-start overflow-x-hidden
          py-4 "
    >
      <div className="flex flex-col gap-y-4 sm:px-4 justify-start  items-start h-full mt-12">
        <div className="font-DanaBold text-gray-100  leading-7 rounded-md bg-baseColor/55 p-2 flex flex-col gap-y-4 items-start  gap-x-2 ">
          <p className="">
            <span className="">پرفروش ترین دوره:</span>
            <span className="line-clamp-2">{mostPopCourses[0].name}</span>
          </p>
          <p className="">
            <span className="">شناسه:&nbsp;{mostPopCourses[0]._id}</span>
          </p>
          <p className="">
            <span className="">
              تعداد خرید ثبت شده:&nbsp;
              {salesData.allCreditsSpend.length.toLocaleString("fa-IR")} عدد
            </span>
          </p>
        </div>
      </div>
      <Chart mainData={formattedSalesData} YDomain={[0, YAxisMax]}>
        <Bar
          dataKey={"تعداد_ثبتنامی"}
          stroke="#711D1C"
          fill="#0ea5e9"
          width={100}
          height={40}
        />
        <Bar
          dataKey={"فروش"}
          stroke="#22c55e"
          fill="#22c55e"
          width={100}
          height={40}
        />
      </Chart>
    </div>
  );
}

export default SalesChart;
