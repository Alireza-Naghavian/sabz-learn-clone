"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery, useLoginMutation } from "@/services/auth/authApiSlice";
import { loginType } from "@/types/services/authapi.t";
import { getFromStorage } from "@/utils/utils";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>();
  const { replace } = useRouter();
  const { showAlert } = useAlert();
  const [login, { isLoading }] = useLoginMutation();
  const { refetch } = useGetMeQuery();
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, []);
  const loginHandler = async (data: loginType) => {
    try {
      const { identifier, password } = data;
      const result = await login({ identifier, password }).unwrap();
      showAlert("success", result.message);
    await  refetch();
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
          <MainTextField
            placeHolder="آدرس ایمیل"
            name="identifier"
            id="identifier"
            type="email"
            register={register}
            errors={errors}
            variant="rounded"
            Icon={EnvelopeIcon}
            validattionschema={{
              required: { value: true, message: "ایمیل الزامی می باشد" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "ایمیل وارد شده معتبر نمی باشد",
              },
            }}
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
            Icon={LockClosedIcon}
            variant="rounded"
            validattionschema={{
              required: { value: true, message: "کلمه عبور الزامی می باشد" },
              minLength: { value: 8, message: "حداقل ۸ کاراکتر" },
            }}
            size="largeSize"
            required={false}
          />
        </div>

        <PrimaryBtn variant="fill" size="xl" type="submit" className="w-full">
          {isLoading ? <Loader loadingCondition={isLoading} /> : "ورود"}
        </PrimaryBtn>
      </form>
    </div>
  );
}

export default Login;
