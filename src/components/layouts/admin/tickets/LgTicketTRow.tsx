import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import {
  useChangeStatusMutation,
  useRemoveTicketMutation,
} from "@/services/tickets&depts/ticketApiSlice";
import { TicketTableData } from "@/types/services/tickets.t";
import { ticketOptions, ticketStatus } from "@/utils/constants";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";
import EditModal from "../modals/EditModal";
import SelectModal from "../modals/SelectModal";
import ReplyModal from "./ReplyModal";
import DeleteModal from "../modals/DeleteModal";

function LgTicketTRow({
  _id,
  departmentID,
  index,
  title,
  isAnswer,
  isOpen,
  isPending,
  user,
}: TicketTableData & { index: number }) {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isOpenTicket, setIsOpenTicket] = useState<boolean>(isOpen);
  const [changeStatus, { isLoading: isChanging }] = useChangeStatusMutation();
  const [removeTicket, { isLoading: isremoveLoading }] =
    useRemoveTicketMutation();
  const { showAlert } = useAlert();
  let ticketCurrCondition = {
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
      variant="singleHead"
      className="!hidden md:!grid p-4  odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td
        className={` p-2 rounded-md font-DanaBold  ${
          ticketCondition?.className as string
        } `}
      >
        {index}
      </td>
      <td>{user.username}</td>
      <td className="line-clamp-2 text-sm">{title}</td>
      <td className="dark:text-secondary text-gray-900">
        {departmentID.title}
      </td>
      <td
        className={` px-2 py-1  text-white rounded-xl ${
          isOpen == false ? "bg-red-500" : "bg-baseColor/75"
        }`}
      >
        {isOpen === false ? "بسته شده" : "باز"}
      </td>
      <td>
        <PencilSquareIcon
          onClick={() => setIsReplyOpen(true)}
          className="size-6 text-secondary cursor-pointer"
        />
      </td>
      <td className="flex items-center gap-x-1 h-full">
        <TrashIcon onClick={()=>setIsDeleteOpen(true)} className="text-red-500 size-6  cursor-pointer" />
        <span className="p-px h-full w-[2px] dark:bg-white "></span>
        <XCircleIcon
          onClick={() => setIsSelectOpen(true)}
          className="size-6 text-red-500 cursor-pointer"
        />
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

export default LgTicketTRow;
