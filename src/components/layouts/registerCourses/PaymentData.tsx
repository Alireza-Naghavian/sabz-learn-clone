"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import { useRegisterCourseMutation } from "@/services/courseRegister/RegisterCourseSlice";
import { TomanIcon } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
function PaymentData({
  price,
  discount,
  courseId,
  shortName,
}: {
  price: number;
  discount: number;
  courseId: string;
  shortName: string;
}) {
  const discountAmount = +(price / discount);
  const { handleSubmit } = useForm();
  const [registerCourse, { isLoading }] = useRegisterCourseMutation({});
  const { showAlert } = useAlert();
  const router = useRouter();
  const PurchaseHanlder = async () => {
    let finalPrice;
    if (discount !== 0) {
      finalPrice = price - discountAmount;
    } else {
      finalPrice = price;
    }
    try {
      const result = await registerCourse({
        _id: courseId as string,
        price: finalPrice as number,
      }).unwrap();

      showAlert("success", result.message);
      router.replace(`/courses/course/${shortName}`, { scroll: true });
    } catch (error) {
      showAlert("error", "خطای غیر منتظره لطفا بعدا تلاش کنید");
    }
  };
  return (
    <div className="bg-white dark:bg-darker py-5 px-4 md:px-6">
      <div
        className="space-y-4 text-slate-500 dark:text-white border-b
     border-b-neutral-200 dark:border-b-white/10 pb-4 mb-4"
      >
        <div className="flex items-center justify-between">
          <span className="font-DanaMedium">مبلغ کل</span>
          <div className="flex items-center gap-x-1">
            <span className="font-DanaMedium">
              {price?.toLocaleString("fa-IR")}
            </span>
            <TomanIcon className="size-5" />
          </div>
        </div>
        <div className="flex items-center justify-between text-red-500">
          <span className="font-DanaMedium">تخفیف</span>
          <div className="flex items-center gap-x-1">
            <div>
              <span className="text-sm">({discount}%)</span>
              <span className="font-DanaBold">
                {discountAmount?.toLocaleString("fa-IR")}
              </span>
            </div>
            <TomanIcon className="size-5" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="font-DanaBold xl:text-lg">مجموع:</span>
        <div className="flex items-center gap-x-1">
          <span className="font-DanaBold text-xl xl:text-2xl ">
            {(price - discountAmount)?.toLocaleString("fa-IR")}
          </span>
          <TomanIcon className="size-5" />
        </div>
      </div>
      <form onSubmit={handleSubmit(PurchaseHanlder)}>
        <PrimaryBtn className="w-full mt-2" variant="fill" size="xxl">
          {isLoading ? <Loader loadingCondition={isLoading} /> : "تکمیل خرید"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default PaymentData;
