"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fakeCategory } from "../sessions/add/TopicForm";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";

function OfferForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [course, setCourse] = useState({ label: "", value: "" });
  return (
    <form
      autoComplete="on"
      className="flex flex-col gap-y-6 
      relative py-6 container"
    >
      <div className={`${styles.input_group}`}>
        <MainTextField
          register={register}
          name="code"
          id="code"
          errors={errors}
          label="کد تخفیف"
          variant="rounded"
          type="text"
          size="largeSize"
        />
        <MainTextField
          register={register}
          name="percent"
          id="percent"
          errors={errors}
          label="درصد تخفیف"
          variant="rounded"
          type="text"
          size="largeSize"
        />
      </div>
      <div className={`${styles.input_group}`}>
        <Select
          options={fakeCategory}
          selectTitle="انتخاب دوره"

          onChange={(e) =>
            setCourse({ value: e.target.value, label: course.label })
          }
          value={course.value}
          className="  !gap-y-0 px-4  !py-3 !mt-1.5 focus:outline-none "
        />
          <MainTextField
          register={register}
          name="exptimes"
          id="exptimes"
          errors={errors}
          label="حداکثر مهلت تخفیف"
          variant="rounded"
          type="text"
          size="largeSize"
        />
      </div>
      <PrimaryBtn  variant="fill" 
      size="lg" type="submit" 
      className="mr-auto w-full md:w-[100px] 
      rounded-xl px-6 py-2">افزودن</PrimaryBtn>
    </form>
  );
}

export default OfferForm;
