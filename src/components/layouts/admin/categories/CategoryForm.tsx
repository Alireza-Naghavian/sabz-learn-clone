"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import MainTextField from '@/components/ui/textField&inputs/MainTextField';
import PrimaryBtn from '@/components/ui/button/PrimaryBtn';

function CategoryForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
  return (
    <form      autoComplete="on"
    className="flex flex-col gap-y-6 
      relative py-6 container">
        <div className={`${styles.input_group}`}>
        <MainTextField
            register={register}
            name="title"
            id="title"
            errors={errors}
            placeHolder="عنوان دسته بندی ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
          <MainTextField
            register={register}
            name="link"
            id="link"
            errors={errors}
            placeHolder="لینک دسته بندی ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
        </div>
        <PrimaryBtn
          variant="fill"
          size="lg"
          type="submit"
          className="mr-auto w-full md:w-[100px] rounded-xl px-6 py-2">
          افزودن
        </PrimaryBtn>
      </form>
  )
}

export default CategoryForm