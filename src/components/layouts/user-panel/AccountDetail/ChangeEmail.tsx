import PrimaryBtn from '@/components/ui/button/PrimaryBtn'
import MainTextField from '@/components/ui/textField&inputs/MainTextField'
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import React from 'react'
import { useForm } from 'react-hook-form';

function ChangeEmail() {
    const {
        register,
        formState: { errors },
      } = useForm();
  return (
    <div className="xl:col-span-2 bg-white dark:bg-gray-800 p-4.5 rounded-2xl">
    <div className="pb-4.5 border-b border-b-gray-200 dark:border-b-slate-500">
      <span className="font-DanaMedium  md:text-xl text-zinc-700 dark:text-white">
        جزییات حساب کاربری
      </span>
    </div>
    <form className="p-3.5 pt-8">
      <div className="relative mb-11">
        <ResponsiveImage
          alt="user"
          className="w-32 md:w-44  h-32 md:h-44 rounded-full"
          imageStyles="rounded-full  !w-full !h-full !object-cover"
          src={"/images/user_sample.png"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 w-full">
        <div>
          <MainTextField
            register={register}
            name="userName"
            id="userName"
            variant="rounded"
            readOnly={true}
            label="نام کاربری"
            required={false}
            value={"alirezangh"}
            type="text"
            errors={errors}
            size="mediumSize"
          />
        </div>
        <div>
          <MainTextField
            register={register}
            name="email"
            id="email"
            variant="rounded"
            label="ایمیل"
            type="email"
            errors={errors}
            size="mediumSize"
          />
        </div>
      </div>
      <div className="mt-6">
        <PrimaryBtn
          type="submit"
          variant="fill"
          size="xl"
          className="!rounded-lg mr-auto"
        >
          ثبت اطلاعات
        </PrimaryBtn>
      </div>
    </form>
  </div>
  )
}

export default ChangeEmail