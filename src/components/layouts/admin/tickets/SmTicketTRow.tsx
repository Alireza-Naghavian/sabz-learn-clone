import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import {
  useChangeStatusMutation,
  useRemoveTicketMutation,
} from "@/services/tickets&depts/ticketApiSlice";
import { TicketTableData } from "@/types/services/tickets.t";
import { ticketOptions, ticketStatus } from "@/utils/constants";
import { PencilSquareIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useState } from "react";
import DeleteModal from "../modals/DeleteModal";
import SelectModal from "../modals/SelectModal";
import ReplyModal from "./ReplyModal";
import EditModal from "../modals/EditModal";

function SmTicketTRow({
  _id,
  departmentID,
  title,
  isAnswer,
  isOpen,
  isPending,
  user,
}: TicketTableData) {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isOpenTicket, setIsOpenTicket] = useState<boolean>(isOpen);
  const [changeStatus, { isLoading: isChanging }] = useChangeStatusMutation();
  const [removeTicket, { isLoading: isremoveLoading }] =
    useRemoveTicketMutation();
  const { showAlert } = useAlert();
  const ticketCurrCondition = {
    isPending: isPending as boolean,

    isAnswer: isAnswer as boolean,
    isOpen: isOpen as boolean,
  };
  const ticketCondition = ticketStatus.find((ticketSt) => {
    return (
      (JSON.stringify(ticketSt.cond) as string) ===
      (JSON.stringify(ticketCurrCondition) as string)
    );
  });

  const selectHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (_id === undefined) return;
      const updateTicketCondition = {
        isPending: false,
        isAnswer: true,
        isOpen: isOpenTicket,
        ticketID: _id,
      };
      const result = await changeStatus(updateTicketCondition).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      if (error.message) {
        showAlert("error", error.message);
      } else {
        showAlert("error", "خطا هنگام تغییر وضعیت تیکت");
      }
    } finally {
      setIsSelectOpen(false);
    }
  };

  // remove ticket
  const removeHandler = async () => {
    try {
      const result = await removeTicket({ _id: _id as string }).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      if (error.message) {
        showAlert("error", error.message);
      } else {
        showAlert("error", "خطا هنگام تغییر وضعیت تیکت");
      }
    } finally {
      setIsDeleteOpen(false);
    }
  };
  return (
    <Table.Row
      className="my-4 child:my-auto
      !flex flex-col md:!hidden gap-y-4
      h-full  w-full  
    odd:dark:bg-dark  
    even:dark:bg-gray-900
    odd:bg-gray-400/50
    even:bg-gray-300 px-4 
     py-2 "
      variant="singleHead"
    >
      <td className="flex items-center justify-between w-full  ">
        <span
          className={`font-DanaBold rounded-lg p-1  ${ticketCondition?.className as string} `}
        >
          {user.username}
        </span>
        <span
          className="text-right  flex justify-between items-center
       my-auto gap-x-2  !mb-2">

          <button
           onClick={()=>setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
           w-fit flex justify-center">
             <TrashIcon  className="text-red-500 size-7  cursor-pointer" />
          </button>

          <button
            onClick={() => setIsSelectOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
           w-fit flex justify-center">
          <XCircleIcon
          className="size-7 text-red-500 cursor-pointer"
        />
          </button>
        </span>
      </td>
      <td className="flex flex-col w-full ">
        <span
          className="flex flex-col gap-y-4  child:flex 
              child:justify-between child:items-center child:w-full
               child:text-sm  child:pb-[2px] child:child:pb-[2px]"
        >
          <span className="">
            <span>عنوان:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
            {title}
            </span>
          </span>
          <span className="">
            <span>دپارتمان:</span>
            <span className="text-secondary">
            {departmentID.title}
            </span>
          </span>
          <span className="">
            <span>وضعیت:</span>
            <span className="font-Shabnam_B">
              <span   className={` px-2 py-1  text-white rounded-xl ${
                                  isOpen == false ? "bg-red-500" : "bg-baseColor/75"}`}>
               {isOpen === false ? "بسته شده" : "باز"}
              </span>
            </span>
          </span>
          <span className="">
            <span>مشاهده/پاسخ:</span>
            <button
             onClick={() => setIsReplyOpen(true)}
              className="text-2xl text-blue-500">
              <PencilSquareIcon
              className="size-7 text-secondary cursor-pointer"
                />
            </button>
          </span>
        </span>
      </td>
         {/* answer user ticket */}
         <EditModal
        isOpen={isReplyOpen}
        setIsOpen={() => setIsReplyOpen(false)}
        modalTitle="پاسخ به تیکت"
        className="!w-[100%] !h-[92%]  overflow-y-auto py-2 !top-[2%]"
      >
        <div className="">
          <ReplyModal
            ticketId={_id as string}
            setIsReplyOpen={setIsReplyOpen}
          />
        </div>
      </EditModal>

      {/* change ticket status */}
      <SelectModal
        isLoading={isChanging}
        isOpen={isSelectOpen}
        modalTitle="تغییر وضعیت تیکت"
        onSelectChange={(e) => setIsOpenTicket(e.target.value)}
        options={ticketOptions}
        selectHanlder={selectHandler}
        setIsOpen={() => setIsSelectOpen(false)}
        subjectTitle="باز / بستن تیکت"
        value={String(isOpenTicket)}
      />
      <DeleteModal
        identifier={_id as string}
        isDeleteOpen={isDeleteOpen}
        isLoading={isremoveLoading}
        removeHandler={removeHandler}
        setIsDeleteOpen={() => setIsDeleteOpen(false)}
        subjectTitle="تیکت"
      />
    </Table.Row>
  );
}

export default SmTicketTRow;
