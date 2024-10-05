"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import { useAlert } from "@/context/AlertProvider";
import { useStartCompaignMutation } from "@/services/compaigns/compaignSlice";
import { CompaignBodyType } from "@/types/services/compaign.t";
import { useForm } from "react-hook-form";
function CompaignForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CompaignBodyType>();
  const { showAlert } = useAlert();
  const [startCompaign, { isLoading }] = useStartCompaignMutation();
  const renderTextField = (
    name: keyof CompaignBodyType,
    label: string,
    type: string,
    placeHolder?: string
  ) => {
    return (
      <MainTextField
        register={register}
        name={name}
        id={name}
        errors={errors}
        label={label}
        placeHolder={placeHolder}
        variant="rounded"
        type={type}
        size="largeSize"
        validattionschema={{ required: "این فیلد نمی تواند خالی باشد" }}
        wrapperStyles="flex flex-col xl:h-[95px]"
        className="w-full"
      />
    );
  };
  const createHanalder = async (data: CompaignBodyType) => {
    try {
      const result = await startCompaign(data).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      console.log(error);
      error?.data?.message?.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    } finally {
      reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(createHanalder)}
      className="flex flex-col gap-y-6   relative py-6 container"
      autoComplete="on"
    >
      <div className={`${styles.input_group}`}>
        {renderTextField(
          "title",
          "عنوان کمپین",
          "text",
          "عنوان کمپین را وارد کنید"
        )}
      </div>
      <div className={`${styles.input_group}`}>
        {renderTextField("fixCover", "بنر فیکس", "file")}
        {renderTextField("mainCover", "بنر اصلی", "file")}
      </div>
      <div className={`${styles.input_group}`}>
        {renderTextField("endDate", "مدت زمان برگزاری", "datetime-local")}
        {renderTextField("percent", "درصد تخفیف ", "number")}
      </div>
      <PrimaryBtn
        variant="fill"
        size="lg"
        type="submit"
        className="mr-auto w-full md:w-[100px]
           rounded-xl px-6 py-2"
      >
        {isLoading ? <Loader loadingCondition={isLoading} /> : "افزودن"}
      </PrimaryBtn>
    </form>
  );
}

export default CompaignForm;
