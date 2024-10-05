import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useRemoveCodeMutation } from "@/services/offer-codes/offerSlice";
import { OfferTableData } from "@/types/services/offercode.t";
import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import DeleteModal from "../modals/DeleteModal";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function SmOfferTRow({code,course,max,percent,uses,_id}:OfferTableData) {
  const [isDeleteOpen, { open, close }] = useDisclosure();
  const { showAlert } = useAlert();
  const [removeCode, { isLoading }] = useRemoveCodeMutation();
  const removeHandler = async () => {
    try {
      const result = await removeCode({ _id } as { _id: string }).unwrap();
      showAlert("success", result?.message);
  
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
        <span className="font-DanaBold   ">
    {code}
        </span>
        <span
          className="text-right flex justify-between items-center
       my-auto gap-x-2  !mb-2"
        >
          <button
          onClick={() => open()}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
           w-fit flex justify-center"
          >
           <TrashIcon
          className="size-6 cursor-pointer text-red-500"
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
            <span>درصد:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
        {percent}٪
            </span>
          </span>
          <span className="child:text-sm child:text-right">
            <span>دوره:</span>
            <span>
            {course?.name}
            </span>
          </span>
          <span className="">
            <span>استفاده شده:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">
              {uses} دفعه
              </span>
            </span>
          </span>
          <span className="">
            <span>باقی مانده:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">
              {max - uses} دفعه
              </span>
            </span>
          </span>
        </span>
      </td>
      {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          removeHandler={removeHandler}
          isLoading={isLoading}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => close()}
          subjectTitle={"کد تخفیف"}
        />
      )}
    </Table.Row>
  );
}

export default SmOfferTRow;
