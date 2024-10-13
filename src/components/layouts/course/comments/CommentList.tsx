"use client";
import Button from "@/components/ui/button/Button";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TextLoader from "@/components/ui/loader/TextLoader";
import CoursePaginBtn from "@/components/utils-components/pagination/CoursePaginBtn";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { CommentListType, CommentType } from "@/types/services/comment.t";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function CommentList({
  open,
  setReply,
  data,
  isLoading,
  setcommentId,
  addReply,
  page,
  setPage,
  totalPages,
  currentPage,
}: CommentListType) {
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
          title={"هیچ کامنتی برای  این دوره ثبت نشده است"}
        />
      </div>
    );
  console.log(data);
  return (
    <section className="comments_wrap space-y-4.5 sm:space-y-5">
      {data?.map((comment) => {
        return (
          <Comment
            setReply={setReply}
            commentData={comment}
            key={comment._id}
            isReply={true}
            className="bg-gray-100 dark:bg-dark"
            open={open}
            commentId={comment._id}
            addReply={addReply}
            setcommentId={setcommentId}
          >
            {comment.isAnswer === 1 &&
              comment.userReplies
                .concat(comment.adminReplies)
                .flat()
                .filter((commentData) => commentData.isAnswer === 1)
                .sort((a, b) => {
                  return (
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                  );
                })
                .map((reply, index) => {
                  return (
                    <div key={index} className="mt-4 space-y-4">
                      <Comment
                        setcommentId={setcommentId}
                        setReply={setReply}
                        commentData={reply}
                        isReply={false}
                        commentId={comment._id}
                        addReply={addReply}
                        className="bg-gray-200 dark:bg-darker"
                      />
                    </div>
                  );
                })}
          </Comment>
        );
      })}

      <div className="w-full box-center">
        {totalPages == currentPage && !isLoading ? (
          <div className="text-center dark:text-white text-gray-900 ">
            تمامی کامنت ها نمایش داده شد .
          </div>
        ) : (
          open &&
          data.length > 0 && (
            <CoursePaginBtn
              page={page}
              setPage={setPage}
              isFetching={isLoading}
            />
          )
        )}
      </div>
    </section>
  );
}

const Comment = ({
  open,
  children,
  className,
  isReply,
  commentData,
  setReply,
  setcommentId,
  commentId,
  addReply,
}: CommentType) => {
  return (
    <div className={`p-4.5 md:p-5 ${className} rounded-xl`}>
      <div
        className="flex items-center justify-between pb-4 mb-4 border-b
        border-b-neutral-200/60 dark:border-white/10"
      >
        <div
          className={`flex  w-full items-center gap-x-3.5 ${
            isReply && "justify-between"
          }`}
        >
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
                {commentData.creator.username}
              </span>

              <strong
                className={`font-DanaMedium p-1 rounded-xl mr-1 text-sm
                 ${
                   commentData.creator.role === "ADMIN"
                     ? "bg-baseColor"
                     : "bg-secondary"
                 }`}
              >
                {/* user role */}
                {commentData.creator.role === "ADMIN" ? "مدرس" : "کاربر"}
              </strong>
            </div>
            <span className="font-Dana text-sm opacity-70">
              {new Date(commentData.createdAt).toLocaleDateString("fa-IR")}
            </span>
          </div>
          {isReply && open && (
            <Button
              size="lg"
              type="button"
              onClick={() => {
                if (open) {
                  open();
                  setReply(true);
                }

                const isReply = !addReply;
                setReply(isReply);
                setcommentId(commentId);
              }}
              className="mr-auto box-center !px-0 group
            transition-all duration-300   
            hover:!bg-sky-500 border-sky-500 border-2"
            >
              <a
                href={"#commentForm"}
                className="w-full h-full box-center px-0"
              >
                <ArrowUturnLeftIcon
                  className="size-4 text-sky-500 group-hover:text-white 
                transition-all duration-300"
                />
              </a>
            </Button>
          )}
        </div>
      </div>
      {/* comment body */}
      <p className="font-dana text-sm sm:text-base break-words">
        {commentData.body}
      </p>
      {/* reply ? */}
      {children}
    </div>
  );
};

export default CommentList;
