import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useBanUserMutation } from "@/services/users/userApiSlice";
import { OptionType } from "@/types/consts.t";
import { SetState } from "@/types/global.t";
import { BanStatusOptions } from "@/utils/constants";
import { useForm } from "react-hook-form";
import EditModal from "../modals/EditModal";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
type BanUserType = {
  isBanOpen: boolean;
  setIsBanOpen: SetState<boolean>;
  _id: string;
  banUser: OptionType;
  setBanUser: SetState<OptionType>;
};

function BanUser({
  _id,
  banUser,
  setBanUser,
  isBanOpen,
  setIsBanOpen,
}: BanUserType) {
  const { handleSubmit } = useForm();
  const { showAlert } = useAlert();
  const [ban, { isLoading }] = useBanUserMutation();
  const changeHandler = async () => {
    try {
      const result = await ban({ _id }).unwrap();
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
      setIsBanOpen(false);
    }
  };
  return (
    <EditModal
      isOpen={isBanOpen}
      modalTitle="بن کردن کاربر"
      setIsOpen={() => setIsBanOpen(false)}
      className="!h-auto p-2 top-[35%]"
    >
      <form onSubmit={handleSubmit(changeHandler)}>
        <Select
          options={BanStatusOptions}
          className="  !gap-y-0 px-4  !py-3  focus:outline-none "
          value={banUser.value}
          onChange={(e) => {
            setBanUser({ value: e.target.value, label: banUser.label });
          }}
        />
        <PrimaryBtn
          size="lg"
          variant="fill"
          type="submit"
          className="mt-4 !h-11 w-full md:w-fit mr-auto ml-2 !rounded-lg"
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "اعمال"}
        </PrimaryBtn>
      </form>
    </EditModal>
  );
}

export default BanUser;
