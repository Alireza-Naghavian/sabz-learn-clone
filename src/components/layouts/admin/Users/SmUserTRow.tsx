import Table from "@/components/ui/Table/Table";
import useDisclosure from "@/hooks/useDisclosure";
import { OptionType } from "@/types/consts.t";
import { UserType } from "@/types/services/authapi.t";
import { NoSymbolIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ChangeUserRole from "./ChangeUserRole";
import { initailSelectState } from "@/utils/constants";
import BanUser from "./BanUser";

function SmUserTRow({email,username,role,_id,userCourse}: UserType) {
  const [isEditOpen, { open, close }] = useDisclosure();
  const [isBanOpen, setIsBanOpen] = useState(false);
  const [banUser, setBanUser] = useState<OptionType>(initailSelectState);
  const [userRole, setUserRole] = useState<OptionType>({
    label: "",
    value: role,
  });
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
          {username}
            </span>
        <span
          className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
        >
          <button
            // onClick={() => setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center"
          >
             <TrashIcon className="size-6 text-red-500 cursor-pointer" />
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
            <span>ایمیل:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
              {email}
            </span>
          </span>
          <span className="">
            <span>تراکنش ها:</span>
            <span>
            {userCourse.length} دوره
            </span>
          </span>
          <span className="">
            <span>نقش:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">
              {role === "ADMIN" ? "ادمین" : "کاربر"}
              </span>
            </span>
          </span>
          <span className="">
            <span>بن کردن:</span>
            <button
            onClick={()=>setIsBanOpen(true)}
              className="text-2xl text-blue-500"
            >
              <NoSymbolIcon className="size-6 text-red-500 cursor-pointer" />
            </button>
          </span>
          <span className="">
            <span>تغییر سطح:</span>
            <button>
            <PencilSquareIcon
          onClick={() => open()}
          className="size-6 text-secondary cursor-pointer"
        />
            </button>
          </span>
        </span>
      </td>
      <ChangeUserRole
      _id={_id as string}
        close={close}
        isEditOpen={isEditOpen}
        open={open}
        setUserRole={setUserRole}
        userRole={userRole}
      />
          <BanUser
        _id={_id as string}
        banUser={banUser}
        setBanUser={setBanUser}
        isBanOpen={isBanOpen}
        setIsBanOpen={setIsBanOpen}
      />
    </Table.Row>
  );
}

export default SmUserTRow;
