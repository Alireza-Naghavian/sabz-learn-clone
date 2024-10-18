"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useGetCourseCommentQuery } from "@/services/comments/commentApiSlice";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import "./comments/comment_form.css";
import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";
import TitleHeader from "./TitleHeader";
import { CommentData } from "@/types/services/comment.t";
import { UserType } from "@/types/services/authapi.t";
function CommentBox({courseShortName,courseId}: {
  courseShortName: string;
  courseId: string;
}) {
  const [isBoxOpen, { open, close }] = useDisclosure();
  const { data, isLoading } = useGetMeQuery();
  const [commentId, setcommentId] = useState<string>("");
  const [reply, setReply] = useState(false);
  const [page, setPage] = useState(1);
  const [comment, setComment] = useState<CommentData[]>([]);
  // searchParams

  const { showAlert } = useAlert();
  const { data: commentData, isLoading: isListLoading } =
    useGetCourseCommentQuery({ _id: courseId, limit: 3, page });
  const validCommentData = commentData?.courseComments?.filter(
    (comment) => comment.isAnswer === 1
  );
  useEffect(() => {
    if (commentData) {
      setComment((prevComments) => {
        const newComments = validCommentData?.filter((newComment) => {
          return !prevComments.some(
            (prevCourse) => prevCourse._id === newComment._id
          );
        });
        return [...prevComments, ...newComments!];
      });
    }
  }, [commentData]);


  return (
    <section className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
      <div className="w-full flex items-center justify-between">
        <TitleHeader title="نظرات" className="bg-red-500" />
        <PrimaryBtn
          size="md"
          type="button"
          variant="fill"
          onClick={() => {
            if (!isLoading && data?.user) {
              open();
            } else {
              showAlert("error", "لطفا ثبت نام کنید/وارد شوید");
            }
          }}
        >
          <span className="font-DanaMedium text-base ">ایجاد نظر جدید</span>
          <ChatBubbleBottomCenterTextIcon className="size-5" />
        </PrimaryBtn>
      </div>
      <div
        className={`bg-green-50 text-baseColor dark:bg-baseColor/10
        p-4.5 md:p-5 rounded-lg leading-7 text-sm md:font-DanaBold mb-6 mt-4
        ${isBoxOpen && "hidden"}
        `}
      >
        دانشجوی عزیز؛ سوالات مرتبط به پشتیبانی دوره در قسمت نظرات تایید نخواهد
        شد، لطفا در بخش مشاهده آنلاین هر ویدیو سوالات خود را مطرح کنید.
      </div>
      <CommentForm
        commentId={commentId}
        isReply={reply}
        userData={data?.user as UserType}
        courseShortName={courseShortName}
        isBoxOpen={isBoxOpen}
        close={close}
        setReply={setReply}
      />
      <CommentList
      totalPages ={commentData?.totalPages as number}
      currentPage={commentData?.currentPage as number}

        page={page}
        setPage={setPage}
        setcommentId={setcommentId}
        data={comment!}
        isLoading={isListLoading}
        addReply={reply}
        setReply={setReply}
        open={open}
      />
    </section>
  );
}

export default CommentBox;
