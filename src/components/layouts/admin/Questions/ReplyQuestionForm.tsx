"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import { useAlert } from "@/context/AlertProvider";
import {
  useAsnwerQuestionMutation
} from "@/services/sessions&topics/userQuestionsSlice";
import { SetState } from "@/types/global.t";
import { QuestionSampleType } from "@/types/services/sessions&Topics.t";
import { useForm } from "react-hook-form";
import { QuestionSample } from "../../sessions/Q_box_list";

function ReplyQuestionForm({
  allMessages,
  sessionId,
  setIsReplyOpen,
}: {
  allMessages: QuestionSampleType[];
  sessionId: string;
  setIsReplyOpen: SetState<boolean>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, isValid },
  } = useForm<{ body: string }>({ mode: "onChange" });
  const [answerQuestion, { isLoading }] = useAsnwerQuestionMutation({
    fixedCacheKey: "userQuestions",
  });
  const { showAlert } = useAlert();
  const submitHandler = async (data: { body: string }) => {
    try {
      const result = await answerQuestion({
        body: data.body,
        questionId: allMessages[0]?._id as string,
        sessionId,
      }).unwrap();
      showAlert("success", result.message);
      location.reload();
    } catch (error) {
      return showAlert("error","خطایی هنگام ارسال پاسخ رخ داده است")
    } finally {
      reset();
      setIsReplyOpen(false);
    }
  };
  return (
    <div className="h-[450px] overflow-y-auto flex flex-col gap-y-2">
      {allMessages.map((message) => {
        return (
          <div
            key={message._id}
            className={`flex flex-col  gap-y-4 w-[70%]  px-6 my-4
            ${
              message.creator.role === "ADMIN"
                ? "child:!bg-sky-800 child:text-white"
                : "child:bg-dark"
            }
            `}
          >
            <QuestionSample question={message} />
          </div>
        );
      })}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col  gap-y-4  px-6 my-4"
      >
        <TextAriaField
          name="body"
          id="body"
          label="پاسخ:"
          variant="freeMode"
          register={register}
          placeHolder="پاسخ شما فقط برای کاربر قابل مشاهده خواهد بود"
          validattionschema={{
            minLength: {
              value: 1,
              message: "حداقل ۱ کاراکتر",
            },
          }}
          errors={errors}
          className="border-main_brown w-full"
          type="text"
        />
        <PrimaryBtn
          disabled={!isValid || !Object.keys(dirtyFields).length}
          className={`mt-4 py-3
      ${
        !isValid || !Object.keys(dirtyFields).length
          ? "opacity-50"
          : "opacity-100"
      } 
      `}
          variant="fill"
          size="xxl"
          type="submit"
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "ارسال"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default ReplyQuestionForm;
