"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css"
import MainTextField from '@/components/ui/textField&inputs/MainTextField';
import Select from '@/components/utils-components/Select/Select';
import PrimaryBtn from '@/components/ui/button/PrimaryBtn';

function CompaignForm() {
    const {
        register,
        formState: { errors },
      } = useForm();
      const [categories,setCategories] = useState({value:"",label:""})
  return (
    <form   className="flex flex-col gap-y-6   relative py-6 container"
    autoComplete="on">

    <div className={`${styles.input_group}`}>
    <MainTextField
            register={register}
            name="title"
            id="title"
            errors={errors}
            label='عنوان کمپین'
            placeHolder=" عنوان کمپین مورد نظر ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
          <Select
            options={[]}
            selectTitle='دسته بندی مورد نظر'
            value={categories.value}
            onChange={(e) =>
                setCategories({ value: e.target.value, label: categories.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-1.5 focus:outline-none "
          />
    </div>
    <div className={`${styles.input_group}`}>
    <MainTextField
            register={register}
            name="fixBanner"
            id="fixBanner"
            errors={errors}
            label='بنر فیکس'
            variant="rounded"
            type="file"
            size="largeSize"
            className="w-full"
          />
           <MainTextField
            register={register}
            name="mainBanner"
            id="mainBanner"
            errors={errors}
            label='بنر اصلی'
            variant="rounded"
            type="file"
            size="largeSize"
            className="w-full"
          />
    </div>
    <div className={`${styles.input_group}`}>
    <MainTextField
            register={register}
            name="eventTime"
            id="eventTime"
            errors={errors}
            label='مدت زمان برگزاری'
            variant="rounded"
            type="datetime-local"
            size="largeSize"
            className="w-full"
          />
           <MainTextField
            register={register}
            name="eventpercent"
            id="eventpercent"
            errors={errors}
            label='درصد تخفیف '
            variant="rounded"
            type="number"
            size="largeSize"
            className="w-full"
          />
    </div>
    <PrimaryBtn
          variant="fill"
          size="lg"
          type="submit"
          className="mr-auto w-full md:w-[100px] rounded-xl px-6 py-2"
        >
          افزودن
        </PrimaryBtn>
    </form>
  )
}

export default CompaignForm