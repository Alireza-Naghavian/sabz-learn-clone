"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useCreateQuestionMutation } from "@/services/sessions&topics/userQuestionsSlice";
import { ExclamationTriangleIcon, UserIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
const TextEditor = dynamic(
  () => import("@/components/utils-components/textEditor/TextEditor"),
  { ssr: false }
);
function Q_box_form({
  sessionID,
  shortName,
}: {
  sessionID: string;
  shortName: string;
}) {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useGetMeQuery();
  const [qBody, setQBody] = useState("");

  // send req to server

const [sendQuestion,{isLoading}] = useCreateQuestionMutation();
const {showAlert} = useAlert();
  const askHanlder = async () => {
    try {
      if(qBody.trim().length ===0) return showAlert("error","متن پرسش الزامی است")
        const result = await sendQuestion({body:qBody,creator:data?.user._id as string,sessionId:sessionID,shortName}).unwrap();
        showAlert("success",result.message)
    } catch (error) {
        console.log(error);
      }finally{
        setQBody("")
      }
  };
  return (
    <form onSubmit={handleSubmit(askHanlder)}>
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
        <div className=" flex w-full mt-2 child:w-full">
          <TextEditor onChange={setQBody} value={qBody} />
        </div>
        <PrimaryBtn
          type="submit"
          variant="outline"
          size="xl"
          className="mt-4 mr-auto w-full sm:w-[150px]"
        >
      {isLoading ? <Loader loadingCondition={isLoading}/>:"ارسال"}
        </PrimaryBtn>
      </div>
    </form>
  );
}

export default Q_box_form;
