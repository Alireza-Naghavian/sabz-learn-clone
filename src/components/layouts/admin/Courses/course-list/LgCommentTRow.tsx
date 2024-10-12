import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import {
  useChangeCommentStatusMutation
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
import EditModal from "../../modals/EditModal";
import SelectModal from "../../modals/SelectModal";
import ReplyCommentForm from "./ReplyCommentForm";

function LgCommentTRow({
  _id,
  adminReplies,
  body,
  createdAt,
  course,
  creator,
  index,
  isAnswer,
  mainCommendID,
  score,
  userReplies,
}: CommentData & { index: number }) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const { showAlert } = useAlert();

  //  req to server
  const [changeStatus, { isLoading }] = useChangeCommentStatusMutation();
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
  return (
    <Table.Row
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td
        className={`lg:block hidden  px-4 py-1 font-DanaBold rounded-lg ${
          isAnswer === 1 ? "bg-baseColor text-white" : "bg-secondary text-white"
        } `}
      >
        {index}
      </td>
      <td>{creator.username}</td>
      <td className="lg:block hidden">{course}</td>
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
      <TrashIcon className=" text-red-500 size-6 cursor-pointer" />
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
          identifier={_id!}
          setIsEditOpen={() => setIsReplyOpen(false)}
        />
      </EditModal>
    </Table.Row>
  );
}

export default LgCommentTRow;
