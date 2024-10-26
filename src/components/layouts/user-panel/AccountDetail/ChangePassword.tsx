import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useChangePasswordMutation } from "@/services/users/userApiSlice";
import { useForm } from "react-hook-form";
export type ChangePassType = {
  lastPassword: string;
  password: string;
};
function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePassType>();

  const [updatePassword, { isLoading }] = useChangePasswordMutation();
  const { showAlert } = useAlert();
  const changeHandler = async (data: ChangePassType) => {
    try {
      const result = await updatePassword(data).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      if (error?.message) {
        showAlert("error", error?.message);
      } else {
        showAlert("error", "خطای هنگام تغییر کلمه عبور");
      }
    } finally {
      reset();
    }
  };
  return (
    <div className="xl:col-span-1 bg-white dark:bg-gray-800 p-4.5 rounded-2xl">
      <div className="pb-4.5 border-b border-b-gray-200 dark:border-b-slate-500">
        <span className="font-DanaMedium md:text-xl text-zinc-700 dark:text-white">
          تغییر رمز عبور
        </span>
      </div>
      <form onSubmit={handleSubmit(changeHandler)} className="p-3.5 pt-8">
        <div className="space-y-5 md:space-y-6">
          <MainTextField
            register={register}
            errors={errors}
            name="lastPassword"
            id="lastPassword"
            type="password"
            size="largeSize"
            variant="rounded"
            label="رمز عبور فعلی"
            placeHolder="رمز فعلی را وارد کنید"
            validattionschema={{ required: "پر کردن این فیلد الزامی است" }}
            required
          />
          <MainTextField
            register={register}
            errors={errors}
            name="password"
            id="password"
            type="password"
            size="largeSize"
            variant="rounded"
            label="رمز عبور جدید"
            validattionschema={{ required: "پر کردن این فیلد الزامی است" }}
            placeHolder="رمز جدید را وارد کنید"
            required
          />
          <div className="mt-4">
            <PrimaryBtn
              size="xl"
              variant="fill"
              type="submit"
              className="mr-auto rounded-xl"
            >
              {isLoading ? (
                <Loader loadingCondition={isLoading} />
              ) : (
                "تغییر رمز"
              )}
            </PrimaryBtn>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
