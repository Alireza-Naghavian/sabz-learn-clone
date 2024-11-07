"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import dynamic from "next/dynamic";
import { ArticlesBodyType } from "@/types/services/articles.t";
import Select from "@/components/utils-components/Select/Select";
import { useGetAllCatQuery } from "@/services/course&Categories/courseApiSlice";
import { rareOption } from "@/utils/constants";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useCreateArticlesMutation } from "@/services/articles/articlesApiSlice";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import generateAnchor from "@/utils/anchorGenerator";
import SimpleCheckBox from "@/components/ui/textField&inputs/SimpleCheckBox";
const TextEditor = dynamic(
  () => import("@/components/utils-components/textEditor/TextEditor"),
  { ssr: false }
);
function BlogsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ArticlesBodyType>();
  // res from server
  const { data: categories } = useGetAllCatQuery();
  const { data: userData } = useGetMeQuery();
  const { showAlert } = useAlert();
  const [category, setCategory] = useState(rareOption);
  const [longDesc, setLongDes] = useState("");
  // req to server
  const [createArticle, { isLoading }] = useCreateArticlesMutation();
  // cat options
  const catOptions = categories
    ?.map((category) => {
      return { label: category.title as string, value: category._id as string };
    })
    .concat(rareOption)
    .reverse();
  const createHandler = async (data: ArticlesBodyType) => {
    try {
      const aritlceBody = {
        ...data,
        isActiveNotif:data.isActiveNotif,
        creator: userData?.user._id as string,
        categoryID: category.value,
        body: generateAnchor(longDesc),
      };
      const result = await createArticle(aritlceBody).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      if(error.message){
        return showAlert("error", error.message);
      }
      else{
        return showAlert("error","خطا هنگام ایجاد مقاله جدید")
      }
    } finally {
      reset();
      setCategory(rareOption);
      setLongDes("");
    }
  };
  const renderTextField = (
    name: keyof ArticlesBodyType,
    placeholder: string,
    type = "text"
  ) => (
    <MainTextField
      register={register}
      name={name}
      id={name}
      errors={errors}
      placeHolder={placeholder}
      variant="rounded"
      type={type}
      validattionschema={{
        required: { value: true, message: "پر کردن این فیلد الزامی است" },
      }}
      size="largeSize"
      className="w-full"
      wrapperStyles="flex flex-col xl:h-[55px]"
    />
  );
  return (
    <HeaderAdminLayout title="افزودن مقاله جدید">
      <form
        onSubmit={handleSubmit(createHandler)}
        autoComplete="on"
        className="flex flex-col gap-y-6 
          relative py-6 container"
      >
        <div className={`${styles.input_group}`}>
          {renderTextField("title", "عنوان مقاله ...")}
          {renderTextField("cover", "کاور مقاله ...")}
        </div>
        <div className={`${styles.input_group}`}>
          {renderTextField("shortName", "نام مقاله ...")}
          <Select
            options={catOptions as { label: string; value: string }[]}
            onChange={(e) =>
              setCategory({ value: e.target.value, label: category.label })
            }
            value={category.value}
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
          />
        </div>
        <div className={`${styles.input_group}`}>
          <TextAriaField
            register={register}
            name="description"
            id="description"
            variant="freeMode"
            label="توضیحات کوتاه"
            placeHolder="یک توضیح کوتاه راجب مقاله ..."
            required
            validattionschema={{
              required: {
                value: true,
                message: "پر کردن این فیلد الزامی است.",
              },
            }}
            errors={errors}
            type="text"
          />
        </div>
        <SimpleCheckBox
          errors={errors}
          id="checkBox"
          label="اعلان ارسال شود"
          className="child:!textxl"
          name="isActiveNotif"
          register={register}
          type="checkbox"
          required={false}
        />
        <div className="flex w-full mt-2 child:w-full">
          <TextEditor onChange={setLongDes} value={longDesc} />
        </div>
        <PrimaryBtn
          variant="fill"
          size="xxl"
          type="submit"
          className="mr-auto w-full md:w-[140px] rounded-xl px-6 py-2"
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "افزودن"}
        </PrimaryBtn>
      </form>
    </HeaderAdminLayout>
  );
}

export default BlogsForm;
