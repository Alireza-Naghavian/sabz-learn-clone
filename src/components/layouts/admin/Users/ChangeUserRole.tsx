import React from "react";
import EditModal from "../modals/EditModal";
import Select from "@/components/utils-components/Select/Select";
import { roleOptions } from "@/utils/constants";
import { SetState } from "@/types/global.t";
import { RoleType } from "@/types/consts.t";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { useChangeRoleMutation } from "@/services/users/userApiSlice";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useForm } from "react-hook-form";
type UserRoleType = {
  isEditOpen: boolean;
  open: () => void;
  close: () => void;
  userRole: RoleType;
  setUserRole: SetState<RoleType>;
  _id:string
};
function ChangeUserRole({close,isEditOpen,setUserRole,_id, userRole}: UserRoleType) {
    const {handleSubmit} = useForm();
  const [changeRole, { isLoading }] = useChangeRoleMutation();
  const {showAlert} = useAlert();
  const changeHandler = async () => {
    try {
        const result = await changeRole({value:userRole.value,_id,label:userRole.label}).unwrap();
        showAlert("success",result.message)
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
    <EditModal
      isOpen={isEditOpen}
      modalTitle="تغییر سطح"
      setIsOpen={() => close()}
      className="!h-auto p-2 top-[35%]">
      <form onSubmit={handleSubmit(changeHandler)}>
        <Select
          options={roleOptions}
          className="  !gap-y-0 px-4  !py-3  focus:outline-none "
          value={userRole.value}
          onChange={(e) => {
            setUserRole({ value: e.target.value, label: userRole.label });
          }}
        />
        <PrimaryBtn
          size="lg"
          variant="fill"
          type="submit"
          className="mt-4 !h-11 w-full md:w-fit mr-auto ml-2 !rounded-lg"
        >
       {isLoading ? <Loader loadingCondition={isLoading}/>:"اعمال"}
        </PrimaryBtn>
      </form>
    </EditModal>
  );
}

export default ChangeUserRole;
