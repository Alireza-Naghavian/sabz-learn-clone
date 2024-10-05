/* eslint-disable-next-line padded-blocks */
"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import SimpleCheckBox from "@/components/ui/textField&inputs/SimpleCheckBox";
import StatusBox from "@/components/ui/textField&inputs/StatusBox";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useCreateCourseMutation, useGetAllCatQuery } from "@/services/course&Categories/courseApiSlice";
import { CourseBodyType } from "@/types/services/course&category.t";
import { rareOption, suppurtOptions } from "@/utils/constants";
import { formatPriceNumber } from "@/utils/utils";
import { BookOpenIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./course_form.module.css";
import PriceTextField from "@/components/ui/textField&inputs/PriceTextField";
const TextEditor = dynamic(
  () => import("@/components/utils-components/textEditor/TextEditor"),{ssr: false,}
);
function CourseForm() {
  const {register,reset,handleSubmit,watch,getValues,formState: { errors }} = useForm<CourseBodyType>();
  const { data: categories } = useGetAllCatQuery();
  const {data:userData} = useGetMeQuery();
  const { showAlert } = useAlert();
  const [createCourse,{isLoading}] = useCreateCourseMutation();

    // State for form fields
  const [category, setCategory] = useState(rareOption);
  const [support, setSupport] = useState("");
  const [price, setPrice] = useState<string>("");
  const [longDesc, setLongDes] = useState("");
  const [status,setStatus] = useState("inProgress")

  // generate category options 
  const catOptions = categories?.map((category) => {
    return { label: category.title as string, value: category._id as string };
  }).concat(rareOption).reverse();

    // Handle price change and format it
    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formattedPrice = formatPriceNumber(e.target.value);
      setPrice(formattedPrice);
    };


    // Submit handler for course creation
  const createHandler = async (data: CourseBodyType) => {
    try {
      const {inProgress,preOrder,...filteredData} = data
      const courseBody = {...filteredData,categoryID:category.value
        ,creator:userData?.user._id as string
        ,longDesc
        ,price:Number(price.replace(/,/g,"")) ,
        preReq:getValues("preReq"),
        status:status
      }
        const result = await createCourse(courseBody).unwrap();
        showAlert("success",result.message)
        setCategory(rareOption)
        setSupport("")
        setPrice("")
        setLongDes("")
    } catch (error:any) {
      error?.message.forEach((err:any)=>{
        return showAlert("error",err.message)
      })
    }finally{
      reset();
    }
  };
  const renderTextField = (name: keyof CourseBodyType, placeholder: string, type = "text") => (
    <MainTextField
      register={register}
      name={name}
      id={name}
      errors={errors}
      placeHolder={placeholder}
      variant="rounded"
      type={type}
      size="largeSize"
      className="w-full"
    />
  );
  return (
    <form
      onSubmit={handleSubmit(createHandler)}
      autoComplete="on"
      className="flex flex-col gap-y-6   relative py-6 container"
    >
      {/* input group */}
      <div className={`${styles.input_group}`}>
      {renderTextField("name", "عنوان دوره ...")}
        <Select
          options={catOptions as { label: string; value: string }[]}
          onChange={(e) =>
            setCategory({ value: e.target.value, label: category.label })
          }
          value={category.value}
          className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
        />
      </div>
      {/* input group */}
      <div className={`${styles.input_group}`}>
      {renderTextField("cover", "لینک کاور دوره", "url")}
        <div className="flex">
          <StatusBox
          status={status}
          setStatus={setStatus}
            register={register}
            name="status"
            Icon={ShoppingBagIcon}
            value="preOrder"
            watch={watch}
            title="پیش فروش"
            className="child:md:!text-lg child:!text-sm border-l"
            wrapperStyles="rounded-r-xl "
          />
          <StatusBox
               status={status}
               setStatus={setStatus}
            register={register}
            name="status"
            Icon={BookOpenIcon}
            value="inProgress"
            watch={watch}
            title="درحال برگزاری"
            wrapperStyles="rounded-l-xl "
          />
        </div>
      </div>
      {/* input group */}
      <div className={`${styles.input_group}`}>
      {renderTextField("shortName", "لیبل دوره")}
      {renderTextField("duration", "زمان دوره")}
      </div>
      {/* input group */}
      <div className={`${styles.input_group}`}>
        <PriceTextField
          register={register}
          name="price"
          id="price"
          type="text"
          errors={errors}
          variant="rounded"
          size="largeSize"
          value={price}
          onChange={handlePriceChange}
          className="w-full"
          placeHolder="مبلغ دوره"
        />
        <Select
          options={suppurtOptions}
          onChange={(e) => setSupport(e.target.value)}
          value={support}
          className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
        />
      </div>
       <div className={`${styles.input_group} xl:mt-2`}>
       {renderTextField("preReq", "پیشنیاز دوره")}
        <div className=""/>
      </div>
      {/* input group */}
      <div className={`${styles.input_group} xl:mt-2`}>
        <TextAriaField
          register={register}
          name="description"
          id="description"
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
      <div className="flex w-full mt-2 child:w-full">
        <TextEditor onChange={setLongDes} value={longDesc} />
      </div>

      <PrimaryBtn
        variant="fill"
        size="xxl"
        type="submit"
        role="button"
        className="mr-auto w-full md:w-[140px] rounded-xl px-6 py-2"
      >
        {isLoading ? <Loader loadingCondition={isLoading}/> : "افزودن"}
      </PrimaryBtn>
    </form>
  );
}

export default CourseForm;
