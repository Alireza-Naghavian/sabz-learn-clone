import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useRemoveCompaignMutation } from "@/services/compaigns/compaignSlice";
import { CompaignTableData } from "@/types/services/compaign.t";
import { TrashIcon } from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import DeleteModal from "../modals/DeleteModal";

function SmCompaignTRow({
  active,
  discount,
  endDate,
  title,
  _id,
}: CompaignTableData) {
  const { showAlert } = useAlert();
  const [removeCompaign, { isLoading }] = useRemoveCompaignMutation();
  const [isDeleteOpen, { open, close }] = useDisclosure();
  const removeHandler = async () => {
    try {
      const result = await removeCompaign({ _id } as { _id: string }).unwrap();
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
        <span className="font-DanaBold   ">{title}</span>
        <span
          className="text-right flex justify-between items-center
     my-auto gap-x-2  !mb-2"
        >
          <button
            onClick={() => open()}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
         w-fit flex justify-center"
          >
            <TrashIcon className="text-red-500 cursor-pointer size-6" />
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
              ٪{discount}
            </span>
          </span>
          <span className="">
            <span>زمان پایان:</span>
            <span>
              {new Date(endDate).toLocaleDateString("fa-IR", {
                dateStyle: "full",
              })}
            </span>
          </span>
          <span className="">
            <span>وضعیت:</span>
            <span className="font-Shabnam_B">
              <span
                className={`${
                  active ? "bg-baseColor" : "bg-secondary"
                } p-1 rounded-xl`}
              >
                {active ? "درحال برگزاری" : "به اتمام رسیده"}
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
          subjectTitle={"کمپین"}
        />
      )}
    </Table.Row>
  );
}

export default SmCompaignTRow;
