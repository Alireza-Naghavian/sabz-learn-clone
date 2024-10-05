import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useRemoveMenusMutation } from "@/services/menu&subMenus/menuApiSlice";
import { MenuTableData } from "@/types/services/menu.t";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";
import DeleteModal from "../../modals/DeleteModal";

function SmMenuTRow({ href, parent, title, _id }: MenuTableData) {
  const [isDeleteOpen, { open, close }] = useDisclosure();
  const { showAlert } = useAlert();
  const [removeMenu, { isLoading }] = useRemoveMenusMutation();
  const removeHandler = async () => {
    try {
      const result = await removeMenu({ _id } as { _id: string }).unwrap();
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
        <span className="font-DanaBold">{title}</span>
        <span
          className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
        >
          <button
            // onClick={() => setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center"
          >
            <TrashIcon
              onClick={() => open()}
              className="text-red-500 cursor-pointer size-6"
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
            <span>لینک:</span>
            <span
              dir="ltr"
              className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1"
            >
              {href.split("")}
            </span>
          </span>
          <span className="">
            <span>منوی اصلی:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
              {!parent ? (
                <CheckCircleIcon className="size-6 text-baseColor" />
              ) : (
                parent?.title
              )}
            </span>
          </span>
          <span className="">
            <span>لینک منوی اصلی:</span>
            <span>
              {!parent ? (
                <CheckCircleIcon className="size-6 text-baseColor" />
              ) : (
                parent.href
              )}
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
          subjectTitle={parent ? "ساب منو" : "منو"}
        />
      )}
    </Table.Row>
  );
}

export default SmMenuTRow;
