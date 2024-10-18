import Table from '@/components/ui/Table/Table'
import { useAlert } from '@/context/AlertProvider';
import { useChangeCommentStatusMutation, useRemovecommentMutation } from '@/services/comments/commentApiSlice';
import { CommentData } from '@/types/services/comment.t'
import { CheckCircleIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import React, { useState } from 'react'
import SelectModal from '../modals/SelectModal';
import { commentStatus } from '@/utils/constants';
import EditModal from '../modals/EditModal';
import ReplyCommentForm from './ReplyCommentForm';
import DeleteModal from '../modals/DeleteModal';

function SmCommentTRow({
  _id,
  body,
  createdAt,
  course,
  creator,
  answer,
  replyTo
}: CommentData & {replyTo?:CommentData }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const { showAlert } = useAlert();
  const [changeStatus, { isLoading }] = useChangeCommentStatusMutation();
  const [removeComment, { isLoading: isRemoveLoading }] =
    useRemovecommentMutation();

    // handlers
  const statusHanlder = async (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await changeStatus({ _id, status }).unwrap();
      showAlert("success", result.message);
    } catch (error) {
      const fetchError = error as FetchBaseQueryError;
      const errorMessage = (fetchError as { message?: string })?.message;
      if (errorMessage) {
        showAlert("error", errorMessage);
      } else {
        showAlert("error", "خطایی رخ داده است");
      }
    } finally {
      setIsStatusOpen(false);
    }
  };
  const removeHandler = async () => {
    try {
      const result = await removeComment({ _id }).unwrap();
      showAlert("success", result.message);
    } catch (error) {
      const fetchError = error as FetchBaseQueryError;
      const errorMessage = (fetchError as { message?: string })?.message;
      if (errorMessage) {
        showAlert("error", errorMessage);
      } else {
        showAlert("error", "خطایی رخ داده است");
      }
    }
  };
  return (
    <Table.Row
    className="my-4 child:my-auto
        !flex flex-col md:!hidden gap-y-1
      h-full  w-full  
    odd:dark:bg-dark  even:dark:bg-gray-900
    odd:bg-gray-400/50
    even:bg-gray-300 px-4 
       py-2"
    variant="singleHead"
  >
    <td className="flex items-center justify-between w-full">
      <span
        className={`font-DanaBold !ml-3 px-2 rounded-lg
       text-gray-200 ${  answer === 1 ? "bg-baseColor text-white" : "bg-secondary text-white"}`}
      >
        {creator?.username}
      </span>
      <span className="text-right flex  items-center my-auto gap-x-4  mr-auto !mb-4">
        <button
          onClick={() => setIsDeleteOpen(true)}
          className="  my-auto h-full text-3xl text-red-500   w-fit flex justify-center"
        >
          <TrashIcon
        className=" text-red-500 size-6 cursor-pointer"
      />
        </button>
        <button
          onClick={() => setIsReplyOpen(true)}
          className="  my-auto h-full text-3xl text-blue-500   w-fit flex justify-center"
        >
         <PencilSquareIcon
          className="text-baseColor size-7 cursor-pointer"
        />
        </button>
      </span>
    </td>
    <td className="flex flex-col w-full ">
      <span
        className="flex flex-col gap-y-2 child:pt-1  child:flex 
              child:justify-between child:items-center child:w-full
               child:text-sm  child:pb-[2px]  child:child:pb-[2px]"
      >
        <span className="font-DanaBold">
          <span>دوره:</span>
        {course.name}
        </span>
        <span className="font-DanaBold">
          <span>تاریخ ثبت:</span>
          <span className="">
            {new Date(createdAt).toLocaleDateString("fa-Ir")}
          </span>
        </span>
        <span className="font-DanaBold">
          <span>پاسخ / تایید:</span>
          <div className="flex items-center gap-x-4">
            <button
               onClick={() => setIsStatusOpen(true)}
              className="text-2xl text-blue-500"
            >
                <CheckCircleIcon
          className="text-cyan-300 size-7 cursor-pointer"
        />
            </button>
          </div>
        </span>
      </span>
    </td>
    <SelectModal
      isLoading={isLoading}
      isOpen={isStatusOpen}
      setIsOpen={() => setIsStatusOpen(false)}
      modalTitle="تعیین وضعیت کامنت"
      options={commentStatus}
      subjectTitle="تایید/ رد"
      onSelectChange={(e) => setStatus(e.target.value)}
      value={status}
      selectHanlder={statusHanlder}
    />
    {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => setIsDeleteOpen(false)}
          isLoading={isRemoveLoading}
          removeHandler={removeHandler}
          subjectTitle="کامنت"
        />
      )}
      <SelectModal
        isLoading={isLoading}
        isOpen={isStatusOpen}
        setIsOpen={() => setIsStatusOpen(false)}
        modalTitle="تعیین وضعیت کامنت"
        options={commentStatus}
        subjectTitle=""
        onSelectChange={(e) => setStatus(e.target.value)}
        value={status}
        selectHanlder={statusHanlder}
      />
      <EditModal
        className="!h-auto"
        modalTitle="ارسال پاسخ"
        isOpen={isReplyOpen}
        setIsOpen={() => setIsReplyOpen(false)}
      >
        <ReplyCommentForm
          userCommentBody={body}
          replyTo={replyTo!}
          identifier={_id!}
          setIsEditOpen={() => setIsReplyOpen(false)}
        />
      </EditModal>
  </Table.Row>
  )
}

export default SmCommentTRow