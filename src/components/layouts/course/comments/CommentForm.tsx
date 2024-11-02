import React from "react";
import "./comment_form.css";
import { UserIcon } from "@heroicons/react/16/solid";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import { useForm } from "react-hook-form";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { CommentBodyType } from "@/types/services/comment.t";
import {
  useAnswerCommentMutation,
  useCreateCommentMutation,
} from "@/services/comments/commentApiSlice";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import { UserType } from "@/types/services/authapi.t";
import { SetState } from "@/types/global.t";
type CommentFormType = {
  isBoxOpen: boolean;
  close: () => void;
  courseShortName: string;
  userData: UserType;
  isReply: boolean;
  commentId: string;
  setReply: SetState<boolean>;
};
function CommentForm({
  isBoxOpen,
  close,
  courseShortName,
  userData,
  isReply,
  commentId,
  setReply,
}: CommentFormType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentBodyType>();
  const { showAlert } = useAlert();
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const [answerComment, { isLoading: isAsnwerLoading }] =
    useAnswerCommentMutation();
  const createHandler = async (data: CommentBodyType) => {
    try {
      let result;
      if (isReply === true) {
        result = await answerComment({
          _id: commentId,
          body: data.body,
          creator: userData?._id as string,
        }).unwrap();
      } else {
        result = await createComment({
          body: data.body,
          courseShortName,
        }).unwrap();
      }
      showAlert("success", result.message);
    } catch (error: any) {
      error?.message.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    } finally {
      reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(createHandler)}
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
          <span className="font-DanaMedium">
            {userData?.username || "کاربر سبز لرن"}
          </span>
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
          validattionschema={{
            required: "لطفا ابتدا متن کامنت را وارد کنید",
            minLength: {
              value: 4,
              message: "حداقل متن کامنت باید ۴ کاراکتر باشد",
            },
          }}
        />
        <div className="flex w-full gap-x-4 justify-end mt-4.5 sm:mt-6">
          <PrimaryBtn
            variant="outline"
            size="xl"
            type="button"
            role="button"
            className="sm:grow-0 w-24 h-[52px] sm:w-36"
            onClick={(e) => {
              close();
              e.preventDefault();
              if (isReply) {
                setReply(false);
              }
            }}
          >
            لغو
          </PrimaryBtn>
          <PrimaryBtn
            variant="fill"
            size="xl"
            type="submit"
            className="sm:grow-0 w-24 h-[52px] sm:w-36"
          >
            {isLoading || isAsnwerLoading ? (
              <Loader loadingCondition={isLoading || isAsnwerLoading} />
            ) : (
              "ارسال"
            )}
          </PrimaryBtn>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
