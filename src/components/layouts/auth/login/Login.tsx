"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useLoginMutation } from "@/services/auth/authApiSlice";
import { IconType } from "@/types/icon.t";
import { loginType } from "@/types/services/authapi.t";
import { RegisterOptions } from "@/types/textFilels.t";
import { getFromStorage } from "@/utils/utils";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<loginType>({ mode: "onChange" });
  const { replace } = useRouter();
  const { showAlert } = useAlert();
  const [login, { isLoading }] = useLoginMutation();
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, []);
  const loginHandler: SubmitHandler<loginType> = async (data: loginType) => {
    try {
      const result = await login(data).unwrap();
      showAlert("success", result.message);
      replace("/");
    } catch (error: any) {
      if(error.data){
        error?.data?.message?.forEach((err: any) => {
          return showAlert("error", err.message);
        });
      }else if(error.length){
        error?.message?.forEach((err: any) => {
          return showAlert("error", err.message);
        });
      }else{
        return showAlert("error", error.message);
      }
  
    }
  };
  const renderTextField = (
    name: keyof loginType,
    placeholder: string,
    validattionschema?: RegisterOptions,
    type = "text",
    Icon?: IconType
  ) => (
    <MainTextField
      register={register}
      name={name}
      id={name}
      errors={errors}
      placeHolder={placeholder}
      variant="rounded"
      type={type}
      Icon={Icon}
      validattionschema={validattionschema}
      size="largeSize"
      className="w-full"
    />
  );
  return (
    <div>
      <h4 className="font-DanaBold text-xl mb-4 sm:mb-4.5">ورود</h4>
      <p className="mb-5">
        حساب کاربری ندارید؟ &nbsp;
        <Link href={"/auth/signup"} className="font-DanaBold text-baseColor">
          ثبت نام کنید
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="space-y-5"
        autoComplete="on"
      >
        <div className="relative">
          {renderTextField(
            "identifier",
            "آدرس ایمیل",
            {
              required: { value: true, message: "ایمیل الزامی می باشد" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "ایمیل وارد شده معتبر نمی باشد",
              },
            },
            "email",
            EnvelopeIcon
          )}
        </div>
        <div className="relative">
          {renderTextField(
            "password",
            "رمز عبور",
            {
              required: { value: true, message: "کلمه عبور الزامی می باشد" },
              minLength: { value: 8, message: "حداقل ۸ کاراکتر" },
            },
            "password",
            LockClosedIcon
          )}
        </div>
        <PrimaryBtn
          disabled={!isValid || !Object.keys(dirtyFields).length}
          variant="fill"
          size="xl"
          type="submit"
          className={`w-full transition-all duration-300 ${
            !isValid || !Object.keys(dirtyFields).length
              ? "opacity-50"
              : "opacity-100"
          }`}
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "ورود"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default Login;
