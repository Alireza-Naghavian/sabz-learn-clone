"use client"
import { ExclamationTriangleIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useForm } from 'react-hook-form';

function Q_box_form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div>
         <div className="flex  gap-x-3.5 mb-4.5 sm:mb-5 mt-4">
        <div
          className="box-center p-1.5 border border-gray-100
         dark:border-dark rounded-full"
        >
          <div
            className="box-center w-11 sm:w-12 h-11 
          sm:h-12 bg-gray-100 dark:bg-dark rounded-full"
          >
            <UserIcon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-500" />
          </div>
        </div>
        {/* user data */}
        <div className="flex flex-col gap-1 ">
          <span className="font-DanaMedium">alirezanghngh123123</span>
          <span className="font-Dana text-sm opacity-70">پرسش  جدید</span>
        </div>
      </div>
      <div className="flex items-center gap-x-2 text-red-500 mb-4">
        <ExclamationTriangleIcon className='size-6 shrink-0 hidden sm:inline-block'/>
        <p className="text-sm md:font-DanaMedium">لطفا قبل از ثبت پرسش بالاتر بخش قوانین ایجاد سوال را مطالعه کنید.</p>
            {/* text editor form */}
      </div>
    </div>
  )
}

export default Q_box_form