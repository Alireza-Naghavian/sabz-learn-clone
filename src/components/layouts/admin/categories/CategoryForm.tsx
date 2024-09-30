"use client";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { CatBodytype } from "@/types/services/course&category.t";
import { useAlert } from "@/context/AlertProvider";
import { useAddCatMutation } from "@/services/course&Categories/courseApiSlice";
import Loader from "@/components/ui/loader/Loader";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

function CategoryForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CatBodytype>();
  const { showAlert } = useAlert();
  const [addCategory, { isLoading,isSuccess }] = useAddCatMutation();
  const addCatHandler = async (data: CatBodytype) => {
    try {
      const result = await addCategory({
        link: data.link,
        title: data.title,
      }).unwrap();
      showAlert("success", result.message);
      reset();
    } catch (error:any) {
      error?.message.forEach((err:any)=>{
        return showAlert("error",err.message)
      })
    }
  };
  return (
    <form
      onSubmit={handleSubmit(addCatHandler)}
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
          placeHolder="عنوان دسته بندی ..."
          variant="rounded"
          type="text"
          size="largeSize"
          validattionschema={{
            required: { value: true, message: "پر کردن این فیلد الزامی است" },
            maxLength: { value: 60, message: "حداکثر ۶۰ کاراکتر" },
          }}
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
          validattionschema={{
            required: { value: true, message: "پر کردن این فیلد الزامی است" },
          }}
          size="largeSize"
          className="w-full"
        />
      </div>
      <PrimaryBtn
        variant="fill"
        size="lg"
        disabled={isLoading}
        type="submit"
        className="mr-auto w-full md:w-[100px] rounded-xl px-6 py-2"
      >
        {isLoading ? <Loader loadingCondition={isLoading} /> : "افزودن"}
      </PrimaryBtn>
    </form>
  );
}

export default CategoryForm;
