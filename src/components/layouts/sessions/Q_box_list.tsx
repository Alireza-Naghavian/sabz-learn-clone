import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TextLoader from "@/components/ui/loader/TextLoader";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { useGetUserQuestionQuery } from "@/services/sessions&topics/userQuestionsSlice";
import { QuestionSampleType } from "@/types/services/sessions&Topics.t";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

function Q_box_list() {
  const { data, isLoading } = useGetUserQuestionQuery();
  const [sanitizedData, setSanitizedData] = useState<any[]>([]);
  useEffect(() => {
    if (!isLoading && data) {
      const sanitizedQuestions = data?.map((question) => {
        return { ...question, body: DOMPurify.sanitize(question?.body) };
      });
      setSanitizedData(sanitizedQuestions);
    }
  }, [data, isLoading]);
  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
  if (data === undefined || data.length === 0)
    return (
      <div className="mt-5">
        <EmptyResult
          className="py-4 h-[200px]"
          title={"هیچ پرسشی برای  این جلسه ثبت نشده است"}
        />
      </div>
    );
  return (
    <div className="space-y-4.5 sm:space-y-5">
      {sanitizedData.map((question, index) => {
        return (
      <QuestionSample question={question} key={index} />
        );
      })}
    </div>
  );
}


export const QuestionSample = ({question}:{question:QuestionSampleType})=>{

  return(
    <div  className={`p-4.5 md:p-5 w-full flex  rounded-xl flex-col  dark:bg-dark bg-gray-200`}>
    <div
      className="flex items-center justify-between pb-4 mb-4 border-b
    border-b-neutral-200/60 dark:border-white/10"
    >
      <div className={`flex  w-full items-center gap-x-3.5 `}>
        <div
          className="hidden border-b-neutral-200/60 dark:border-white/10
        sm:box-center w-15 h-15 border rounded-full relative"
        >
          <ResponsiveImage
            src={"/images/user_sample.png"}
            alt="user"
            sizes="!relative !w-full !h-full !object-cover rounded-full"
            className="!relative w-12 h-12 block object-cover "
            imageStyles="!relative !w-full !h-full !object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ml-auto gap-1">
          <div className="flex items-center  h-full  gap-x-1 ">
            <span className="inline-block max-w-40 border-l-2 pl-2 truncate">
              {question.creator.username}
            </span>

            <strong
              className={`font-DanaMedium p-1 rounded-xl mr-1 text-sm ${
                question.creator.role === "ADMIN"
                  ? "bg-baseColor"
                  : "bg-secondary"
              }`}
            >
              {/* user role */}
              {question.creator.role === "ADMIN" ? "مدرس" : "کاربر"}
            </strong>
          </div>
          <span className="font-Dana text-sm opacity-70">
            {new Date(question.date).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
    {/* comment body */}
    <p
      className="font-dana text-sm sm:text-base break-words"
      dangerouslySetInnerHTML={{ __html: question.body }}
    >
      {/* {commentData.body} */}
    </p>
  </div>
  )
}
export default Q_box_list;
