import Table from "@/components/ui/Table/Table";
import useDisclosure from "@/hooks/useDisclosure";
import { MenuTableData } from "@/types/services/menu.t";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../../modals/DeleteModal";
import { useAlert } from "@/context/AlertProvider";
import { useRemoveMenusMutation } from "@/services/menu&subMenus/menuApiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function LgMenuTRow({href,index,parent,title,_id,
}: MenuTableData & { index: number }) {
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
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker 
       even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td>{index}</td>
      <td>{title}</td>
      <td dir="ltr">{href.split("")}</td>
      <td>
        {!parent ? (
          <CheckCircleIcon className="size-6 text-baseColor" />
        ) : (
          parent.title
        )}
      </td>
      <td>
        {!parent ? (
          <CheckCircleIcon className="size-6 text-baseColor" />
        ) : (
          parent.href
        )}
      </td>
      <td>
        <TrashIcon
          onClick={() => open()}
          className="text-red-500 cursor-pointer size-6"
        />
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

export default LgMenuTRow;
