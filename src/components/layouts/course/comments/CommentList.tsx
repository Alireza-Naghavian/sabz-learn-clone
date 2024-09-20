"use client"
import Button from "@/components/ui/button/Button";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { ArrowUturnLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

function CommentList({ open }: { open?: () => void }) {
  return (
    <section className="comments_wrap space-y-4.5 sm:space-y-5">
      <Comment isReply={true} className="bg-gray-100 dark:bg-dark" open={open}>
        <div className="mt-4 space-y-4">
          <Comment isReply={false} className="bg-gray-200 dark:bg-darker" />
        </div>
      </Comment>
      <div className="w-full box-center">

     {open &&
      <PrimaryBtn className="px-8" size="xl" variant="fill" type="button">
      <span className="font-DanaMedium">مشاهده بیشتر</span>
      <ChevronDownIcon className="size-6"/>
    </PrimaryBtn>
     }
      </div>
    </section>
  );
}

const Comment = ({
  open,
  children,
  className,
  isReply,
}: {
  open?: () => void;
  children?: React.ReactNode;
  className: string;
  isReply:boolean
}) => {
  return (

    <div className={`p-4.5 md:p-5 ${className} rounded-xl`}>
      <div
        className="flex items-center justify-between pb-4 mb-4 border-b
        border-b-neutral-200/60 dark:border-white/10"
        >
        <div className={`flex  w-full items-center gap-x-3.5 ${isReply && "justify-between"}`}>
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
            <div className="flex items-center   gap-x-1 ">
              <span className="inline-block max-w-40 truncate">
                klfjsdkljfsdlk
              </span>
              <strong className="font-DanaMedium">
                {/* user role */}
                کاربر
              </strong>
            </div>
            <span className="font-Dana text-sm opacity-70">1403/06/21</span>
          </div>
        {
            isReply &&open &&
            <Button
            size="lg"
            type="button"
            onClick={() => {
                if (open) {
                    open();
                }
            }}
            className="mr-auto box-center !px-0 group
            transition-all duration-300   
            hover:!bg-sky-500 border-sky-500 border-2"
            >
            <a href={"#commentForm"} className="w-full h-full box-center px-0">
              <ArrowUturnLeftIcon
                className="size-4 text-sky-500 group-hover:text-white 
                transition-all duration-300"
                />
            </a>
          </Button>
        }
        </div>
      </div>
      {/* comment body */}
      <p className="font-dana text-sm sm:text-base break-words">
        سلام کی دوره به طور کامل بارگذاری میشود ویدیوهاش؟
      </p>
      {/* reply ? */}
      {children}
      
    </div>


  );
};

export default CommentList;
