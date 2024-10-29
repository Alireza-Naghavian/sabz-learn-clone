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
import { CompaignTableData } from "@/types/services/compaign.t";
import { useAlert } from "@/context/AlertProvider";
import { useApplyCodeMutation } from "@/services/offer-codes/offerSlice";
import Loader from "@/components/ui/loader/Loader";
import { useEffect, useState } from "react";

function CourseRegister({
  menu,
  shortName,
  compaignData
}: {
  menu: MenuBodyType[];
  shortName: string;
  compaignData:CompaignTableData[]
}) {
  const { data, isLoading } = useGetCourseQuery({ shortName });
  const [applyCode,{isLoading:isApplying}]= useApplyCodeMutation();
  const {showAlert}= useAlert();
  const [code,setCode] = useState<number>(0);
  const [currCourseData,setCurrCourseData]= useState(data)
  useEffect(()=>{
    setCurrCourseData((prev)=>{
      return {...prev,discount:code} as SingleCourseData
    })
  },[code])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{code:string}>();
  const applyCodeHandler = async(codeData:{code:string})=>{
try {
  const result = await applyCode({code:codeData.code,course:data?._id as string}).unwrap();
  showAlert("success",result.message)
  setCode(result.data.percent)
} catch (error:any) {
  if(error.message){
    showAlert("error",error.message)
  }else{
    showAlert("error","خطا هنگام اعمال کد تخفیف لطفا بعدا تلاش کنید")
  }
}
  }
  return (
    <ClientLayout compaignData={compaignData} menu={menu}>
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
              <form onSubmit={handleSubmit(applyCodeHandler)} className="flex relative">
                <div className=" relative w-full sm:w-[50%]">
                  <MainTextField
                    name="code"
                    id="code"
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
                    {isApplying ? <Loader loadingCondition={isApplying}/>:"اعمال کد"}
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
              discount={currCourseData?.discount as number}
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
