"use client";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { ExclamationTriangleIcon, UserIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useState } from "react";
const TextEditor = dynamic(
  () => import("@/components/utils-components/textEditor/TextEditor"), {ssr: false}
);
function Q_box_form() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const { data } = useGetMeQuery();
  const [qBody, setQBody] = useState("");
  return (
    <form>
      <div className="flex  gap-x-3.5 mb-4.5 sm:mb-5 mt-4">
        <div
          className="box-center p-1.5 border border-gray-100
         dark:border-dark rounded-full"
        >
          <div
            className="box-center w-11 sm:w-12 h-11 
          sm:h-12 bg-gray-100 dark:bg-dark rounded-full"
          >
            <UserIcon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
          </div>
        </div>
        {/* user data */}
        <div className="flex flex-col gap-1 ">
          <span className="font-DanaMedium">{data?.user?.username}</span>
          <span className="font-Dana text-sm opacity-70">پرسش جدید</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-x-2 text-red-500 mb-4 ">
     <div className="flex items-center gap-x-2 self-start mb-4 mr-3 ">
     <ExclamationTriangleIcon className="size-6 shrink-0 hidden sm:inline-block" />
        <p className="text-sm md:font-DanaMedium">
          لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید.
        </p>
     </div>
        {/* text editor form */}
      <div className=" child:!px-0">
      <TextEditor  onChange={setQBody} value={qBody} />
      </div>
      </div>
    </form>
  );
}

export default Q_box_form;
