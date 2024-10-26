"use client";
import TextLoader from "@/components/ui/loader/TextLoader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useGetCourseQuery } from "@/services/course&Categories/courseApiSlice";
import { SingleCourseData } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { CreditCardIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import ClientLayout from "../ClientLayout/ClientLayout";
import DataCart from "./DataCart";
import PaymentData from "./PaymentData";

function CourseRegister({
  menu,
  shortName,
}: {
  menu: MenuBodyType[];
  shortName: string;
}) {
  const { data, isLoading } = useGetCourseQuery({ shortName });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ClientLayout menu={menu}>
      <section className=" gap-y-5 gap-6 lg:gap-x-7  container mt-20">
        <section className=" grid grid-cols-12 grid-rows-4 gap-y-4 lg:gap-y-5  lg:gap-x-7   ">
          <div className="rounded-2xl lg:row-span-full overflow-hidden col-span-full lg:col-span-8 h-full">
            <div className="flex items-center justify-between px-4 md:px-6 h-16 bg-baseColor text-white">
              <div className="flex items-center gap-x-2">
                <ShoppingBagIcon className="size-7 md:size-8" />
                <span className="md:text-xl font-DanaBold">اطلاعات خرید</span>
              </div>
            </div>
            {/* course data */}
            <div
              className="courses-container bg-white 
                 dark:bg-darker py-6 px-4 md:px-6 sm:divide-y
                  divide-neutral-200 dark:divide-white/10 space-y-7
                   sm:space-y-4 sm:child:pt-4 first-child:pt-0"
            >
              {isLoading ? (
                <TextLoader loadingCondition={isLoading} />
              ) : (
                <DataCart
                  data={data as SingleCourseData}
                  shortName={shortName}
                />
              )}
              <form className="flex relative  ">
                <div className=" relative w-full sm:w-[50%] ">
                  <MainTextField
                    name="discount"
                    id="discount"
                    register={register}
                    variant="rounded"
                    type="text"
                    size="largeSize"
                    errors={errors}
                    className="sm:w-[310px] md:w-[350px] lg:w-[310px] xl:w-[410px] w-full relative"
                    placeHolder="کد تخفیف را وارد کنید"
                  />
                  <button
                    className=" bg-secondary transition-all
                     duration-300 hover:bg-secondary/55 text-sm  
                      px-2 rounded-l-xl  absolute -left-2.5 top-0 bottom-0  "
                  >
                    اعمال کد
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="rounded-2xl lg:row-span-full overflow-hidden col-span-full lg:col-span-4 ">
            <div className="flex  items-center justify-between px-4 md:px-6 h-16 bg-baseColor text-white">
              <div className="flex items-center gap-x-2">
                <CreditCardIcon className="size-7 md:size-8" />
                <span className="md:text-xl font-DanaBold">اطلاعات پرداخت</span>
              </div>
            </div>
            <PaymentData
            courseId={data?._id as string}
              discount={10}
              price={data?.price as number}
              shortName = {data?.shortName as string}
            />
          </div>
        </section>
      </section>
    </ClientLayout>
  );
}

export default CourseRegister;
