import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useRemoveSessionMutation } from "@/services/sessions&topics/sesisonSlice";
import { SessionTableData } from "@/types/services/sessions&Topics.t";
import { TrashIcon } from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import DeleteModal from "../../modals/DeleteModal";

function SmSessionTRow({ course, isFree, time, title, _id }: SessionTableData) {
  const { showAlert } = useAlert();
  const [isDeleteOpen, { open, close }] = useDisclosure();
  const [removeSession, { isLoading }] = useRemoveSessionMutation();
  const removeHandler = async () => {
    try {
      const result = await removeSession({ _id } as { _id: string }).unwrap();
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
      close();
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
      <td className="flex items-center justify-between w-full  ">
        <span className="font-DanaBold text-baseColor text-sm text-right line-clamp-2">{title}</span>
        <span
          className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
        >
          <button
            // onClick={() => setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center" >
            <TrashIcon onClick={()=>open()} className="size-6 text-red-500 cursor-pointer" />
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
            <span>دوره:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
              {course.name}
            </span>
          </span>
          <span className="">
            <span> رایگان/غیررایگان:</span>
            <span
              className={`${
                isFree ? "bg-baseColor" : "bg-secondary"
              } p-1.5 rounded-full text-sm`}
            >
              {isFree ? "رایگان" : "غیر رایگان"}
            </span>
          </span>
          <span className="">
            <span>زمان:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">{time}</span>
            </span>
          </span>
        </span>
      </td>
      {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => close()}
          removeHandler={removeHandler}
          subjectTitle="جلسه"
          isLoading={isLoading}
        />
      )}
    </Table.Row>
  );
}

export default SmSessionTRow;
