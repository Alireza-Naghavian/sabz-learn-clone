"use client";
import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import {
  useRemoveCodeMutation
} from "@/services/offer-codes/offerSlice";
import { OfferTableData } from "@/types/services/offercode.t";
import { TrashIcon } from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import DeleteModal from "../modals/DeleteModal";
function LgOfferTRow({
  code,
  course,
  index,
  max,
  percent,
  _id,
  uses,
  createdAt,
}: OfferTableData & { index: number }) {
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
  console.log(index);
  return (
    <Table.Row
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker 
     even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td>{index}</td>
      <td>{code}</td>
      <td>{percent} درصد</td>
      <td>{course.name}</td>
      <td>{uses} دفعه</td>
      <td>{max - uses} دفعه</td>
      <td>{new Date(createdAt).toLocaleDateString("fa-IR")}</td>
      <td>
        <TrashIcon
          onClick={() => open()}
          className="size-6 cursor-pointer text-red-500"
        />
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

export default LgOfferTRow;
