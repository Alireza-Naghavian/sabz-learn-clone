"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import SimpleCheckBox from "@/components/ui/textField&inputs/SimpleCheckBox";
import StatusBox from "@/components/ui/textField&inputs/StatusBox";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import Select from "@/components/utils-components/Select/Select";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./course_form.module.css"
import { suppurtOptions } from "@/utils/constants";
const TextEditor = dynamic(() => import("@/components/utils-components/textEditor/TextEditor"), {
  ssr: false,
});
const fakeCategory = [
  { value: "", label: "انتخاب دسته بندی دوره" },
  { value: "back", label: "بک اند" },
  { value: "front", label: "فرانت اند" },
  { value: "security", label: "امنیت" },
];

function CourseForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [category, setCategory] = useState<{ value: string; label: string }>({
    value: "",
    label: "",
  });
  const [status, setStatus] = useState("inProgress");
  const [support, setSupport] = useState("");
  const [longDesc,setLongDes] = useState("")
  return (
    <form
      autoComplete="on"
      className="flex flex-col gap-y-6   relative py-6 container"
    >
      {/* input group */}
      <div className={`${styles.input_group}`}>
        <MainTextField
          register={register}
          name="title"
          id="title"
          errors={errors}
          placeHolder="عنوان دوره ..."
          variant="rounded"
          type="text"
          size="largeSize"
          className="w-full"
        />
        <Select
          options={fakeCategory}
          onChange={(e) =>
            setCategory({ value: e.target.value, label: category.label })
          }
          value={category.value}
          className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
        />
      </div>
      {/* input group */}
      <div className={`${styles.input_group}`}>
        <MainTextField
          register={register}
          name="cover"
          id="cover"
          type="url"
          errors={errors}
          variant="rounded"
          size="largeSize"
          className="w-full"
          placeHolder="لینک کاور دوره"
        />
        <div className="flex">
          <StatusBox
            register={register}
            name="preOrder"
            Icon={ShoppingBagIcon}
            setStatus={setStatus}
            status={status}
            value="preOrder"
            watch={watch}
            title="پیش فروش"
            className="child:md:!text-lg child:!text-sm"
            wrapperStyles="rounded-r-xl "
          />
          <StatusBox
            register={register}
            name="inProgress"
            Icon={BookOpenIcon}
            setStatus={setStatus}
            status={status}
            value="inProgress"
            watch={watch}
            title="درحال برگزاری"
            wrapperStyles="rounded-l-xl "
          />
        </div>
      </div>
      {/* input group */}
      <div className={`${styles.input_group}`}>
        <MainTextField
          register={register}
          name="price"
          id="price"
          type="text"
          errors={errors}
          variant="rounded"
          size="largeSize"
          className="w-full"
          placeHolder="مبلغ دوره"
        />
        <Select
          options={suppurtOptions}
          onChange={(e) => setCategory(e.target.value)}
          value={support}
          className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
        />
      </div>
      {/* input group */}
      <div className={`${styles.input_group} xl:mt-2`}>
        <TextAriaField
          register={register}
          name="shortDesc"
          id="shortDesc"
          variant="freeMode"
          label="توضیحات کوتاه"
          placeHolder="یک توضیح کوتاه راجب دوره ..."
          required
          errors={errors}
          type="text"
        />

      </div>
      {/* input group */}
      <div className={`${styles.input_group} xl:mt-2`}>
        <div className="w-1/4 flex items-center gap-x-2">
          <SimpleCheckBox
          register={register}
          name="isFree"
          id="isFree"
          errors={errors}
          type="checkbox"
          label="این دوره رایگان است"
          className="child:!text-lg"
          required={false}
          />
        </div>
      </div>
      {/* input group */}
      <div  className="flex w-full mt-2 child:w-full">
        <TextEditor onChange={setLongDes}  value={longDesc}/>
      </div>
      <div className="">

      <PrimaryBtn  variant="fill" size="xxl" type="submit" className="mr-auto w-full md:w-[140px] rounded-xl px-6 py-2">افزودن</PrimaryBtn>
      </div>
    </form>
  );
}

export default CourseForm;
