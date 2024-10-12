"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useAnswerCommentMutation } from "@/services/comments/commentApiSlice";
import { AnswerCommentBodyType } from "@/types/services/comment.t";
import React from "react";
import { useForm } from "react-hook-form";
export type ReplyModalForm = {
  userCommentBody: string;
  setIsEditOpen: () => void;
  identifier: string;
};

function ReplyCommentForm({userCommentBody,identifier, setIsEditOpen}: ReplyModalForm) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isValid },
  } = useForm<AnswerCommentBodyType>({ mode: "onChange" });
  const [answerComment, { isLoading: isAsnwerLoading }] =
    useAnswerCommentMutation();
  const { data: userData } = useGetMeQuery();
  const { showAlert } = useAlert();
  const replyHandler = async (data: AnswerCommentBodyType) => {
    try {
      const result = await answerComment({
        _id: identifier,
        body: data.body,
        creator: userData?.user._id!,
      }).unwrap();
      showAlert("success", result.message);
    } catch (error:any) {
        showAlert("error",error)
    } finally {
      reset();
      setIsEditOpen();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(replyHandler)}
      className="flex flex-col h-[450px] overflow-y-auto gap-y-4  px-6 my-4"
    >
      <TextAriaField
        register={register}
        errors={errors}
        type="text"
        label="کامنت کاربر:"
        variant="freeMode"
        id="userComment"
        name="userComment"
        required={false}
        readOnly={true}
        className="bgdark"
        value={userCommentBody}
      />
      <TextAriaField
        name="body"
        id="body"
        label="پاسخ:"
        variant="freeMode"
        register={register}
        placeHolder="ارسال پاسخ به منزله تایید کامنت کاربر خواهد بود."
        validattionschema={{
          minLength: {
            value: 1,
            message: "حداقل ۱ کاراکتر",
          }
        }}
        errors={errors}
        className="border-main_brown w-full"
        type="text"
      />
      <PrimaryBtn
        disabled={!isValid || !Object.keys(dirtyFields).length}
        className={`
      mt-4
      ${
        !isValid || !Object.keys(dirtyFields).length
          ? "opacity-50"
          : "opacity-100"
      } 
      `}
        variant="fill"
        size="xl"
        type="submit"
      >
        {isAsnwerLoading ? (
          <Loader loadingCondition={isAsnwerLoading} />) : ("ارسال")}
      </PrimaryBtn>
    </form>
  );
}

export default ReplyCommentForm;
