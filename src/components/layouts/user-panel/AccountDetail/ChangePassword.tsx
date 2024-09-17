import PrimaryBtn from '@/components/ui/button/PrimaryBtn';
import MainTextField from '@/components/ui/textField&inputs/MainTextField';
import React from 'react'
import { useForm } from 'react-hook-form';

function ChangePassword() {
    const {
        register,
        formState: { errors },
      } = useForm();
  return (
    <div className="xl:col-span-1 bg-white dark:bg-gray-800 p-4.5 rounded-2xl">
    <div className="pb-4.5 border-b border-b-gray-200 dark:border-b-slate-500">
        <span className="font-DanaMedium md:text-xl text-zinc-700 dark:text-white">
            تغییر رمز عبور
        </span>
    </div>
    <form className='p-3.5 pt-8'>
        <div className="space-y-5 md:space-y-6">
            <MainTextField
            register={register}
            errors={errors}
            name='currentPass'
            id='currentPass'
            type='password'
            size='largeSize'
            variant='rounded'
            label='رمز عبور فعلی'
            placeHolder='رمز فعلی را وارد کنید'
            required
            />
            <MainTextField
            register={register}
            errors={errors}
            name='newPass'
            id='newPass'
            type='password'
            size='largeSize'
            variant='rounded'
            label='رمز عبور جدید'
            placeHolder='رمز جدید را وارد کنید'
            required
            />
            <div className="mt-4">
                <PrimaryBtn size='xl' variant='fill' type='submit' className='mr-auto rounded-xl'>تغییر رمز</PrimaryBtn>
            </div>
        </div>
    </form>
  </div>
  )
}

export default ChangePassword