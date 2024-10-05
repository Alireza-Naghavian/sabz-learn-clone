"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useAddCatMutation } from "@/services/course&Categories/courseApiSlice";
import { CatBodytype } from "@/types/services/course&category.t";
import { RegisterOptions } from "@/types/textFilels.t";
import { useForm } from "react-hook-form";
function CategoryForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CatBodytype>();
  const { showAlert } = useAlert();
  const [addCategory, { isLoading }] = useAddCatMutation();
  const addCatHandler = async (data: CatBodytype) => {
    try {
      const result = await addCategory({
        link: data.link,
        title: data.title,
      }).unwrap();
      showAlert("success", result.message);
      reset();
    } catch (error: any) {
      error?.message.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    }
  };
  const renderTextField = (
    name: keyof CatBodytype,
    placeholder: string,
    validattionschema?: RegisterOptions,
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
      validattionschema={validattionschema}
      size="largeSize"
      className="w-full"
      wrapperStyles="flex flex-col xl:h-[55px]"
    />
  );
  return (
    <form
      onSubmit={handleSubmit(addCatHandler)}
      autoComplete="on"
      className="flex flex-col gap-y-6 
      relative py-6 container"
    >
      <div className={`${styles.input_group}`}>
        {renderTextField("title", "عنوان دسته بندی ...", {
          required: { value: true, message: "پر کردن این فیلد الزامی است" },
          maxLength: { value: 60, message: "حداکثر ۶۰ کاراکتر" },
        })}
        {renderTextField("link", "لینک دسته بندی ...", {
          required: { value: true, message: "پر کردن این فیلد الزامی است" },
        })}
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
