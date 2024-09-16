"use client"
import React from "react";
import TitleHeader from "./TitleHeader";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import CommentForm from "./comments/CommentForm";
import useDisclosure from "@/hooks/useDisclosure";
import "./comments/comment_form.css"
import CommentList from "./comments/CommentList";
function CommentBox() {
    const [isBoxOpen,{open,close}] = useDisclosure();
  return (
    <section className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
      <div className="w-full flex items-center justify-between">
        <TitleHeader title="نظرات" className="bg-red-500" />
        <PrimaryBtn size="md" type="button" variant="fill" onClick={()=>open()}>
          <span className="font-DanaMedium text-base ">ایجاد نظر جدید</span>
          <ChatBubbleBottomCenterTextIcon className="size-5" />
        </PrimaryBtn>
      </div>
      <div
        className={`bg-green-50 text-baseColor dark:bg-baseColor/10
        p-4.5 md:p-5 rounded-lg leading-7 text-sm md:font-DanaBold mb-6 mt-4
        ${isBoxOpen && "hidden"}
        `}>
        دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد
        شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
      </div>
       <CommentForm isBoxOpen={isBoxOpen}  close={close}/>
       <CommentList open={open}/>
       
    </section>
  );
}

export default CommentBox;
