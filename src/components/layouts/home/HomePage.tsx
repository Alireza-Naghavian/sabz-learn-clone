import React from "react";
import ClientLayout from "../ClientLayout/ClientLayout";
import SecondaryBtn from "@/components/ui/button/SecondaryBtn";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function HomePage() {
  return (
    <ClientLayout>
      <section className="lg:mt-12 relative">
        <div className="container ">
          <div
            className="box-center flex-col  lg:flex-row 
                       lg:!justify-between gap-y-10 text-center lg:text-right"
          >
            {/* right header side */}
            <div className="relative w-full mt-8 lg:mt-0 sm:w-auto !order-2 lg:!order-1">
              <h1 className=" font-[800] xs:text-[1.625rem]/[40px]  sm:text-[2.625rem]/[70px] 3xl:text-5xl/normal">
                آکادمی آموزش
                <br />
                برنامه نویسی سبز لرن
              </h1>
              <p className="sm:text-2xl font-danaMedium mt-5 sm:mt-9 lg:max-w-[440px] xl:max-w-[470px]">
                با آکادمی خصوصی سبزلرن،علم برنامه نویسی رو با خیال راحت یاد بگیر
                و پیشرفت کن
              </p>
              <div className="box-center flex-wrap lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
                <SecondaryBtn
                  target="#category"
                  className="button-secondary button-xl rounded-full box-center
                   transition-all duration-300 hover:bg-secondary/75"
                  title="از این مسیر ها شروع کن"
                />
                <Link
                  className="box-center gap-x-2 group font-DanaMedium cursor-pointer"
                  href={"#freeCourses"}
                >
                  <span
                    className="!bg-baseColor px-4 py-4 rounded-full"
                    title=""
                  >
                    <PlayIcon className="w-6 h-6 text-white" />
                  </span>
                  <span className="md:block hidden">دوره های رایگان</span>
                </Link>
              </div>
            </div>

            {/* left header side */}
            <div className="mt-4 md:mt-8 lg:w-px !order-1 lg:!order-2 h-full lg:h-[391px] xl:h-[530px] 3xl:h-[580px]">
              <div className=" hidden dark:inline-block ">
                <Image
                  className="!relative lg:!absolute !left-0 !right-0 
                  lg:!right-auto !top-8 lg:!top-0 !mx-auto 
                  lg:!w-[580px] xl:!w-auto 3xl:!w-[846px]"
                  fill
                  src={"/images/hero_dark.svg"}
                  alt=""
                />
              </div>
              <div className=" inline-block dark:hidden">
                <Image
                  fill
                  src={"/images/hero_light.svg"}
                  className="!relative lg:!absolute left-0 right-0 
                lg:!right-auto !top-8 lg:!top-0 !mx-auto 
                lg:!w-[580px] xl:!w-auto 3xl:!w-[846px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

export default HomePage;
