import React from "react";
import "./course.css";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import CourseBanner from "./CourseBanner";
import { TomanIcon } from "@/utils/Icons";
import CountDowntimer from "@/components/ui/CountDowntimer/CountDowntimer";
function CourseHeader() {
  return (
    <section className="courseHeader__wrapper">
      <div className="flex flex-col justify-between h-full order-2 lg:order-1">
        <div className="">
          <h1 className="font-DanaMedium text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4.5">
            آموزش Next.js بصورت پروژه محور
          </h1>
          <p className="sm:text-lg line-clamp-4 sm:line-clamp-3">
            نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از
            مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد. نکست
            رو میشه مکمل ری‌اکت دونست. یعنی هر چی که ری‌اکت داره نکست هم داره،
            بعلاوه چند قابلیت مهم و کاربردی دیگه. عمدتا از نکست با هدف بهبود
            سئوی اپلیکیشن های ری‌اکتی استفاده میشه و بعنوان توسعه‌ دهنده ری‌اکت،
            باید نکست رو بخوبی بلد باشین. تو این دوره فریمورک محبوب نکست رو
            بصورت پروژه محور و عملی یاد می‌گیرین.
          </p>
        </div>

        {/* buy course ? */}
        <div className="space-y-4 lg:space-y-8 mt-4  md:mt-16">
          {/* <AcessBox/> */}
          <BuyBtn isOffer />
        </div>
      </div>
      <CourseBanner />
    </section>
  );
}

// buy this course ?
const AcessBox = () => {
  return (
    <div
      className="flex justify-center items-center lg:justify-between
     flex-wrap-reverse gap-y-4 gap-x-8 lg:gap-x-6"
    >
      <div className="flex items-end gap-x-1">
        <UserIcon className="size-8" />
        <p className="font-DanaMedium text-lg">شمادانشجوی دوره هستید</p>
      </div>
      <PrimaryBtn
        size="xxl"
        variant="fill"
        type="button"
        className=" text-lg font-DanaMedium 
        flex items-center px-6  lg:w-56"
      >
        <BookOpenIcon className="size-6" />
        <a href="#sessions" className="mt-1">
          مشاهده دوره
        </a>
      </PrimaryBtn>
    </div>
  );
};

// have buy first
const BuyBtn = ({ isOffer }: { isOffer: boolean }) => {
  return (
    <>
      {/* countDown ? */}
      <CountDowntimer date={new Date("dec 25, 2024 16:37:52")} percent={50} />
      <div
        className="flex justify-center xl:items-center
      lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6"
      >
        <PrimaryBtn
          type="button"
          variant="fill"
          size="xl"
          className="flex text-lg items-center px-4 !py-2"
        >
          <AcademicCapIcon className="size-6" />
          افزودن به سبد خرید
        </PrimaryBtn>
        <div className="flex items-end gap-x-2.5">
          {/* offer ? */}
          {isOffer && (
            <span className="text-slate-500 dark:text-white/70 text-xl line-through">
              720,000
            </span>
          )}
          {/* price*/}
          <span className="font-DanaBold text-2xl flex items-center gap-x-1 ">
            <span>360,000</span>
            <TomanIcon className="size-6" />
          </span>
        </div>
      </div>
    </>
  );
};
export default CourseHeader;
