import React from "react";
import "./comment_form.css";
import { UserIcon } from "@heroicons/react/16/solid";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import { useForm } from "react-hook-form";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
type CommentFormType = {
  isBoxOpen: boolean;
  close: () => void;
};
function CommentForm({ isBoxOpen, close }: CommentFormType) {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <form
    id="commentForm"
      className={`${
        isBoxOpen ? "comment-form comment-form-active" : "comment-form "
      }`}
    >
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
          <span className="font-DanaMedium">alirezanghngh123123</span>
          <span className="font-Dana text-sm opacity-70">ثبت نظر جدید</span>
        </div>
      </div>
      <div className="">
        <TextAriaField
          register={register}
          errors={errors}
          name="body"
          id="body"
          type="text"
          variant="freeMode"
          placeHolder="نظر خود را بنویسید ..."
        />
        <div className="flex w-full gap-x-4 justify-end mt-4.5 sm:mt-6">
          <PrimaryBtn variant="outline" size="xl" type="button" role="button"
           className="sm:grow-0 w-24 h-[52px] sm:w-36"
           onClick={(e)=>{
            close()
            e.preventDefault();
           }}
           >
            لغو
          </PrimaryBtn>
          <PrimaryBtn variant="fill" size="xl" type="button"  className="sm:grow-0 w-24 h-[52px] sm:w-36">
            ارسال
          </PrimaryBtn>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
