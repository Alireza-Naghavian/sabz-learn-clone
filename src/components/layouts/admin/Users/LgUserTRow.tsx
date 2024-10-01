import Table from "@/components/ui/Table/Table";
import useDisclosure from "@/hooks/useDisclosure";
import { RoleType } from "@/types/consts.t";
import { UserType } from "@/types/services/authapi.t";
import {
  NoSymbolIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ChangeUserRole from "./ChangeUserRole";

function LgUserTRow({
  username,
  role,
  index,
  userCourse,
  _id,
  email,
}: UserType & { index: number }) {
  const [isEditOpen, { open, close }] = useDisclosure();
  const [userRole, setUserRole] = useState<RoleType>({
    label: "",
    value: role,
  });
  return (
    <Table.Row
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker 
       even:dark:bg-gray-900
   odd:bg-gray-300/55
  even:bg-gray-100"
    >
      <td>{index}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{userCourse.length} دوره</td>
      <td>{role === "ADMIN" ? "ادمین" : "کاربر"}</td>
      <td>
        <PencilSquareIcon
          onClick={() => open()}
          className="size-6 text-secondary cursor-pointer"
        />
      </td>
      <td>
        <NoSymbolIcon className="size-6 text-red-500 cursor-pointer" />
      </td>
      <td>
        <TrashIcon className="size-6 text-red-500 cursor-pointer" />
      </td>
      <ChangeUserRole
      _id={_id as string}
        close={close}
        isEditOpen={isEditOpen}
        open={open}
        setUserRole={setUserRole}
        userRole={userRole}
      />
    </Table.Row>
  );
}

export default LgUserTRow;
