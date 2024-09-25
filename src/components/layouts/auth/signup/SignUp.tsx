"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useSignUpMutation } from "@/services/auth/authApiSlice";
import { useGetMeQuery } from "@/services/auth/useApiSlice";
import { CreateUserType } from "@/types/services/authapi.t";
import { getFromStorage } from "@/utils/darkMode";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserType>();
  const [SignUp, { isLoading }] = useSignUpMutation();
  const { refetch}  = useGetMeQuery()
  const { showAlert } = useAlert();
  const {replace} = useRouter()
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, []);
  const singUpHandler = async (data: CreateUserType) => {
 try {
  const { email, password, username } = data;
  const result =  await SignUp({ email, password, username }).unwrap();
  showAlert("success",result.message);
  refetch();
  replace("/")
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
          <MainTextField
            placeHolder="نام کاربری"
            name="username"
            id="username"
            type="text"
            register={register}
            errors={errors}
            Icon={UserIcon}
            variant="rounded"
            size="largeSize"
            validattionschema={{
              required: { value: true, message: "نام کاربری الزامی می‌باشد" },
            }}
            required={false}
          />
        </div>
        <div className="relative">
          <MainTextField
            placeHolder="آدرس ایمیل"
            name="email"
            id="email"
            className="relative"
            type="email"
            register={register}
            Icon={EnvelopeIcon}
            errors={errors}
            validattionschema={{
              required: { value: true, message: "ایمیل الزامی می باشد" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "ایمیل وارد شده معتبر نمی باشد",
              },
            }}
            variant="rounded"
            size="largeSize"
            required={false}
          />
        </div>
        <div className="relative">
          <MainTextField
            placeHolder="رمز عبور"
            name="password"
            id="password"
            type="password"
            register={register}
            errors={errors}
            variant="rounded"
            Icon={LockClosedIcon}
            size="largeSize"
            validattionschema={{
              required: { value: true, message: "کلمه عبور الزامی می باشد" },
              minLength: { value: 8, message: "حداقل ۸ کاراکتر" },
            }}
            required={false}
          />
        </div>
        <PrimaryBtn
          disabled={isLoading}
          variant="fill"
          size="xl"
          type="submit"
          className="w-full"
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "عضویت"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default SignUp;
