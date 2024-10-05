"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery, useSignUpMutation } from "@/services/auth/authApiSlice";
import { IconType } from "@/types/icon.t";
import { CreateUserType } from "@/types/services/authapi.t";
import { RegisterOptions } from "@/types/textFilels.t";
import { getFromStorage } from "@/utils/utils";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<CreateUserType>({ mode: "onChange" });
  const [SignUp, { isLoading }] = useSignUpMutation();
  const { refetch } = useGetMeQuery();
  const { showAlert } = useAlert();
  const { replace } = useRouter();
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, []);
  const singUpHandler = async (data: CreateUserType) => {
    try {
      const { email, password, username } = data;
      const result = await SignUp({ email, password, username }).unwrap();
      showAlert("success", result.message);
      await refetch();
      replace("/");
    } catch (error) {
      const fetchError = error as FetchBaseQueryError;
      const errorMessage = (fetchError as { message?: string })?.message;
      if (errorMessage) {
        showAlert("error", errorMessage);
      } else {
        showAlert("error", "خطایی رخ داده است");
      }
    }
  };
  const renderTextField = (
    name: keyof CreateUserType,
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
      <h4 className="font-DanaBold text-xl mb-4 sm:mb-4.5">عضویت</h4>
      <p className="mb-5">
        قبلا ثبت نام کرده اید ؟ &nbsp;
        <Link href={"/auth/login"} className="font-DanaBold text-baseColor">
          وارد شوید
        </Link>
      </p>
      <form
        onSubmit={handleSubmit(singUpHandler)}
        autoComplete="off"
        className="space-y-5"
      >
        <div className="relative">
          {renderTextField(
            "username",
            "نام کاربری",
            {
              required: { value: true, message: "نام کاربری الزامی می‌باشد" },
            },
            "text",
            UserIcon
          )}
        </div>
        <div className="relative">
          {renderTextField(
            "email",
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
          disabled={isLoading || !isValid || !Object.keys(dirtyFields).length}
          variant="fill"
          size="xl"
          type="submit"
          className={`w-full transition-all duration-300 ${
            !isValid || !Object.keys(dirtyFields).length
              ? "opacity-50"
              : "opacity-100"
          }`}
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "عضویت"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default SignUp;
