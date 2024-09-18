"use client"
import PrimaryBtn from '@/components/ui/button/PrimaryBtn';
import MainTextField from '@/components/ui/textField&inputs/MainTextField';
import { getFromStorage } from '@/utils/darkMode';
import { EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    if (storedTheme == "dark") {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, []);
  return (
    <div>
      <h4 className="font-DanaBold text-xl mb-4 sm:mb-4.5">عضویت</h4>
      <p className="mb-5">
          قبلا ثبت نام کرده اید ؟ &nbsp;
        <Link href={"/auth/login"} className="font-DanaBold text-baseColor">
            وارد شوید
        </Link>
      </p>
      <form autoComplete='off' className='space-y-5'>
        <div className="relative">
        <MainTextField
            placeHolder="نام کاربری"
            name="userName"
            id="userName"
            type="text"
            register={register}
            errors={errors}
            variant="rounded"
            size="largeSize"
            required={false}
          />
          <UserIcon className="size-5 text-[#64748b] absolute left-3.5 top-[35%] " />
        </div>
        <div className="relative">
        <MainTextField
            placeHolder="آدرس ایمیل"
            name="email"
            id="email"
            type="email"
            register={register}
            errors={errors}
            variant="rounded"
            size="largeSize"
            required={false}
          />
          <EnvelopeIcon className="size-5 text-[#64748b] absolute left-3.5 top-[35%] " />
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
            size="largeSize"
            required={false}
          />
          <LockClosedIcon className="size-5 text-[#64748b] absolute left-3.5 top-[35%] " />
        </div>
        <PrimaryBtn variant="fill" size="xl" type="submit" className="w-full">
          عضویت
        </PrimaryBtn>
      </form>
    </div>
  )
}

export default SignUp