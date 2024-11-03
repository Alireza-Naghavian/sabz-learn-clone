"use client";
import React, { useEffect, useState } from "react";
const initTime = {
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
};
type CountDownType = {
  day: number;
  hour: number;
  minute: number;
  second: number;
};
interface Props {
  percent: number;
  date: Date;
}
function CountDowntimer({ percent, date }: Props) {
  const [time, setTime] = useState<CountDownType>(initTime);
  const CountDowDate = date.getTime();
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = CountDowDate - now;
      // calc date vars
      const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setTime({ day, hour, minute, second });
      if (timeLeft < 0) {
        clearInterval(timer);
        setTime(initTime);
      }
    }, 1000);
  }, [CountDowDate]);
  return (
    <div
      className="flex flex-col sm:flex-row w-full
    lg:flex-col xl:flex-row gap-y-4 gap-x-5 
     xl:justify-between justify-center  text-center 
    sm:text-right p-4 xl:h-16 bg-gray-100 lg:bg-white
     dark:bg-gray-900 lg:dark:bg-darker rounded-xl"
    >
      <span
        className="font-DanaBold sm:text-xl 
      lg:text-center xl:text-right text-red-500"
      >
        {percent}% پیشنهاد شگفت انگیز
      </span>
      {/* countdown */}
      <div className=" flex items-center justify-center xs:mx-auto sm:mx-0 md:mr-auto  lg:mx-auto xl:mx-0 xl:w-[290px] child:child:text-xl child:pl-2 child:pr-1  child:child:ml-1
       last:child:border-none  child:child:leading-5 child:border-l ">
        <div className="flex sm:flex-row flex-col items-center">
          <span>{time.day}</span>
          روز
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <span>{time.hour}</span>
          ساعت
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <span>{time.minute}</span>
          دقیقه
        </div>
        <div className="flex sm:flex-row flex-col items-center">
          <span className="text-red-500">{time.second}</span>
          ثانیه
        </div>
      </div>
    </div>
  );
}

export default CountDowntimer;
