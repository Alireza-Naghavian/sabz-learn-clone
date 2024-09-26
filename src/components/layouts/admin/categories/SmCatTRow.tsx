"use client";
import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import { useRemoveCatMutation } from "@/services/course&Categories/courseApiSlice";
import { CatBodytype } from "@/types/services/course&category.t";
import { TrashIcon } from "@heroicons/react/24/outline";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import DeleteModal from "../modals/DeleteModal";

function SmCatTRow({ link, title, _id }: CatBodytype) {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [removeCat, { isLoading }] = useRemoveCatMutation();
  const { showAlert } = useAlert();
  const removeHandler = async () => {
    try {
      const result = await removeCat({ _id } as { _id: string }).unwrap();
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
      setIsDeleteOpen(false);
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
          {title}
          {/* {user?.userName} */}
        </span>
        <span
          className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
        >
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center">
            <TrashIcon className="size-5 text-red-500" />
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
            <span>لینک:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
              {String(link).split("/")}/
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
          setIsDeleteOpen={() => setIsDeleteOpen(false)}
          subjectTitle="دسته بندی"
        />
      )}
    </Table.Row>
  );
}

export default SmCatTRow;
