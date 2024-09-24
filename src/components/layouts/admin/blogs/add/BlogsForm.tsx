"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import dynamic from "next/dynamic";
const TextEditor = dynamic(
  () => import("@/components/utils-components/textEditor/TextEditor"),
  {
    ssr: false,
  }
);
function BlogsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [longDesc, setLongDes] = useState("");
  return (
    <HeaderAdminLayout title="افزودن مقاله جدید">
      <form
        autoComplete="on"
        className="flex flex-col gap-y-6 
          relative py-6 container"
      >
        <div className={`${styles.input_group}`}>
          <MainTextField
            register={register}
            name="title"
            id="title"
            errors={errors}
            placeHolder="عنوان مقاله ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
          <MainTextField
            register={register}
            name="cover"
            id="cover"
            errors={errors}
            placeHolder="کاور مقاله ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
        </div>
        <div className={`${styles.input_group}`}>
          <TextAriaField
            register={register}
            name="shortDesc"
            id="shortDesc"
            variant="freeMode"
            label="توضیحات کوتاه"
            placeHolder="یک توضیح کوتاه راجب مقاله ..."
            required
            errors={errors}
            type="text"
          />
        </div>
        <div className="flex w-full mt-2 child:w-full">
          <TextEditor onChange={setLongDes} value={longDesc} />
        </div>
        <PrimaryBtn
          variant="fill"
          size="xxl"
          type="submit"
          className="mr-auto w-full md:w-[140px] rounded-xl px-6 py-2">
          افزودن
        </PrimaryBtn>
      </form>
    </HeaderAdminLayout>
  );
}

export default BlogsForm;
