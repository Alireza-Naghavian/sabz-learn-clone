"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export const fakeCategory = [
  { value: "", label: "انتخاب  دوره" },
  { value: "back", label: "جی اس" },
  { value: "front", label: "ری اکت" },
  { value: "security", label: "html css" },
];
function TopicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [course, setCourse] = useState({ label: "", value: "" });
  return (
    <HeaderAdminLayout title="افزودن تاپیک">
      <form
        className="flex flex-col gap-y-6   relative py-6 container"
        autoComplete="on"
      >
        <div className="flex xl:flex-row flex-col xl:gap-y-0 gap-y-4 w-full items-center justify-between child:w-full gap-x-4">
          <MainTextField
            register={register}
            name="topicTitle"
            id="topicTitle"
            errors={errors}
            placeHolder="عنوان تاپیک ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
          <Select
            options={fakeCategory}
            value={course.value}
            onChange={(e) =>
              setCourse({ value: e.target.value, label: course.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
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
    </HeaderAdminLayout>
  );
}

export default TopicForm;
