"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import React, { useState } from "react";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import { useForm } from "react-hook-form";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import { fakeCategory } from "../../sessions/add/TopicForm";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
function MenuForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [menu, setMenu] = useState({ label: "", value: "" });
  return (
    <HeaderAdminLayout title="افزودن منو جدید">
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
            placeHolder="عنوان منو ..."
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
            placeHolder="لینک منو ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
        </div>
        <div className={`${styles.input_group}`}>
          <Select
            options={fakeCategory}
            onChange={(e) =>
              setMenu({ value: e.target.value, label: menu.label })
            }
            value={menu.value}
            className="  !gap-y-0 px-4 
             !py-3 !mt-0 focus:outline-none "
          />
          <div className=""></div>
        </div>
        <PrimaryBtn
          className="mr-auto w-full 
          md:w-[120px] rounded-xl px-6 py-2"
          type="submit"
          variant="fill"
          size="lg"
        >
          افزودن منو
        </PrimaryBtn>
      </form>
    </HeaderAdminLayout>
  );
}

export default MenuForm;
