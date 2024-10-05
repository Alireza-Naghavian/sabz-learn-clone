"use client";
import React from "react";
import ContentList from "../../ContentList";
import { useForm } from "react-hook-form";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";

function ChatBox() {
  return (
    <ContentList title="مشکل مورد نظر">
      <div className="space-y-4">
        {/* user chat  */}
        <div
          className="w-11/12 sm:w-2/3
         bg-gray-100 dark:bg-gray-700 text-zinc-700
         dark:text-white p-4 rounded-2xl rounded-tr-sm"
        >
          <h4 className="font-DanaMedium  text-xl mb-1 text-right">
            alirezangh
          </h4>
          <span className="block text-xs font-Dana text-slate-500 dark:text-slate-400 text-right">
            1403/05/24 19:35
          </span>
          <p className="font-DanaMedium mt-4.5">
            سلام من روی هر ویدئویی از جلسات دوره هایی که ثبت نام کردم کلیک میکنم
            ،جلسه لود نمیشه و روی حالت loading گیر میکنه
          </p>
        </div>

        {/* amdin chat */}
        <div
          className="w-11/12 sm:w-2/3 mr-auto bg-sky-500/30 dark:bg-secondary/20
         text-zinc-700 dark:text-white p-4 rounded-2xl rounded-tr-sm"
        >
          <h4 className="font-DanaMedium text-xl mb-1 text-left">Shahram.Kh</h4>
          <span
            className="block text-xs font-Dana text-slate-500 dark:text-slate-400 text-left"
            dir="rtl"
          >
            1403/05/24 20:35
          </span>
          <p className="font-Dana mt-4.5"></p>
          <p>با سلام و احترام</p>
          <p>وقتتون بخیر</p>
          <p>یه مشکل زیر ساختی پیش اومده بزودی رفع میشه</p>
          <p>
            اگه تاخیری در روند یادگیری تون پیش اومده بابت این مورد عذرخواهی
            میکنم
          </p>
          <p></p>
        </div>
        <div className="w-full p-2 py-4 text-center dark:bg-dark bg-gray-300">
            <p className="dark:text-red-400 ">این تیکت به صورت خودکار بسته شد</p>
        </div>
        {/* <ChatForm/> */}
      </div>
    </ContentList>
  );
}

const ChatForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const sendHandler = ()=>{
    try {
        
    } catch (error) {
        
    }
  }

  return (
    <form  className="flex flex-col gap-y-2"  onSubmit={handleSubmit(sendHandler)}>
      <TextAriaField
        register={register}
        name="body"
        id="body"
        label="متن تیکت"
        required={true}
        placeHolder="متن تیکت خود را وارد کنید"
        variant="freeMode"
        validattionschema={{required:"پر کردن این فیلد الزامی است"}}
        type="text"
        errors={errors}
      />
      <div className="mt-2">
        <PrimaryBtn
          type="submit"
          className="mr-auto !rounded-lg "
          variant="fill"
          size="lg"
        >
          ارسال
        </PrimaryBtn>
      </div>
    </form>
  );
};
export default ChatBox;
