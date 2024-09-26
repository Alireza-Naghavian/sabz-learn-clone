"use client";
import Table from "@/components/ui/Table/Table";
import { CatBodytype } from "@/types/services/course&category.t";
import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import DeleteModal from "../modals/DeleteModal";
import { useAlert } from "@/context/AlertProvider";
import { useRemoveCatMutation } from "@/services/course&Categories/courseApiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function LgCatTRow({
  link,
  title,
  index,
  _id,
}: CatBodytype & { index: number }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const { showAlert } = useAlert();
  const [removeCat, { isLoading }] = useRemoveCatMutation();
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
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{String(link).split("/").reverse()}/</td>
      <td>
        <TrashIcon
          onClick={() => setIsDeleteOpen(true)}
          className="size-5 text-red-500 cursor-pointer"
        />
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

export default LgCatTRow;
