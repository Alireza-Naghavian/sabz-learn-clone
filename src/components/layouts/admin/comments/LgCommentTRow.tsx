import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import {
  useChangeCommentStatusMutation,
  useRemovecommentMutation,
} from "@/services/comments/commentApiSlice";
import { CommentData } from "@/types/services/comment.t";
import { commentStatus } from "@/utils/constants";
import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState } from "react";
import EditModal from "../modals/EditModal";
import SelectModal from "../modals/SelectModal";
import ReplyCommentForm from "./ReplyCommentForm";
import DeleteModal from "../modals/DeleteModal";

function LgCommentTRow({
  _id,
  body,
  createdAt,
  course,
  creator,
  index,
  answer,
  replyTo
}: CommentData & { index: number,replyTo?:CommentData }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const { showAlert } = useAlert();

  //  req to server
  const [changeStatus, { isLoading }] = useChangeCommentStatusMutation();
  const [removeComment, { isLoading: isRemoveLoading }] =
    useRemovecommentMutation();

    // handlers
  const statusHanlder = async (e: any) => {
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
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td
        className={`lg:block hidden  relative px-4 py-1 font-DanaBold rounded-lg ${
          answer === 1 ? "bg-baseColor text-white" : "bg-secondary text-white"
        } `}
      >
        <span className={`absolute -top-4 -right-6  bg-baseColor size-[22px] pt-1
           transition-all duration-500  rounded-full ${replyTo ? "" : "hidden"}`}>R</span>
        {index}
      </td>
      <td>{creator?.username}</td>
      <td className="lg:block hidden">{course.name}</td>
      <td className="lg:block hidden">
        {new Date(createdAt!).toLocaleDateString("fa-IR")}
      </td>
      <td className="flex items-center gap-x-2 h-full">
        <PencilSquareIcon
          onClick={() => setIsReplyOpen(true)}
          className="text-baseColor size-7 cursor-pointer"
        />
        <span className="h-[80%] relative w-[1px] bg-white  !p-px"></span>
        <CheckCircleIcon
          onClick={() => setIsStatusOpen(true)}
          className="text-cyan-300 size-7 cursor-pointer"
        />
      </td>
      <TrashIcon
        onClick={() => setIsDeleteOpen(true)}
        className=" text-red-500 size-6 cursor-pointer"
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
  );
}

export default LgCommentTRow;
