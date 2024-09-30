import Table from "@/components/ui/Table/Table";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { SessionTableData } from "@/types/services/sessions&Topics.t";
import { TrashIcon } from "@heroicons/react/24/solid";
import DeleteModal from "../../modals/DeleteModal";
import { useRemoveSessionMutation } from "@/services/sessions&topics/sesisonSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function LgSessionTRow({
  index,
  course,
  isFree,
  time,
  title,
  _id,
}: { index: number } & SessionTableData) {
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
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td>{index}</td>
      <td className="text-sm">{title}</td>
      <td className="text-sm">{course.name}</td>
      <td>{time}</td>
      <td
        className={`${
          isFree ? "bg-baseColor" : "bg-secondary"
        } p-1.5 rounded-full text-sm`}
      >
        {isFree ? "رایگان" : "غیر رایگان"}
      </td>
      <td>
        <TrashIcon
          onClick={() => open()}
          className="size-5 text-red-500 cursor-pointer"
        />
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

export default LgSessionTRow;
