"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useGetCoursesQuery } from "@/services/course&Categories/courseApiSlice";
import { useCreateCodeMutation } from "@/services/offer-codes/offerSlice";
import { OptionType } from "@/types/consts.t";
import { OfferCodeBody } from "@/types/services/offercode.t";
import { useState } from "react";
import { useForm } from "react-hook-form";

function OfferForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OfferCodeBody>();
  const [course, setCourse] = useState({ label: "", value: "" });
  const {showAlert} = useAlert()
  const {data,isLoading} = useGetCoursesQuery();
  const [createOffer,{isLoading:isCreateLoading}]= useCreateCodeMutation();
  const coursesOption = data?.map((course)=>{
   if(!isLoading){
    return {label:course.name,value:course._id}
   }
  }).concat({label:"انتخاب دوره",value:""}).reverse();
  const renderTextField = (
    label: string,
    name: keyof OfferCodeBody,
    type = "text"
  ) => (
    <MainTextField
      register={register}
      name={name}
      id={name}
      errors={errors}
      label={label}
      variant="rounded"
      type={type}
      validattionschema={{
        required: { value: true, message: "پر کردن این فیلد الزامی است" },
      }}
      size="largeSize"
      className="w-full"
    />
  );

  const createCodehandler = async(data:OfferCodeBody)=>{
    try {
      const result = await createOffer({...data,course:course.value}).unwrap();
      showAlert("success",result.message)
    } catch (error:any) {
      error?.message.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    }finally{
      reset();
    }
  }
  return (
    <form
    onSubmit={handleSubmit(createCodehandler)}
      autoComplete="on"
      className="flex flex-col gap-y-6
      relative py-6 container"
    >
      <div className={`${styles.input_group}`}>
        {renderTextField("کد تخفیف", "code")}
        {renderTextField("درصد تخفیف", "percent", "number")}
      </div>
      <div className={`${styles.input_group}`}>
        <Select
          options={coursesOption as OptionType[] }
          selectTitle="انتخاب دوره"
          onChange={(e) =>
            setCourse({ value: e.target.value, label: course.label })
          }
          value={course.value}
          className="  !gap-y-0 px-4  !py-3 !mt-1.5 focus:outline-none"
        />
        {renderTextField("حداکثر مهلت تخفیف", "max", "number")}
      </div>
      <PrimaryBtn
        variant="fill"
        size="lg"
        type="submit"
        className="mr-auto w-full md:w-[100px] 
      rounded-xl px-6 py-2"
      >
        {isCreateLoading ? <Loader loadingCondition={isCreateLoading}/>:"افزودن"}
        
      </PrimaryBtn>
    </form>
  );
}

export default OfferForm;
