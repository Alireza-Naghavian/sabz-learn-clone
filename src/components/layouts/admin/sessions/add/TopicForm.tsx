"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useGetCoursesQuery } from "@/services/course&Categories/courseApiSlice";
import { useCreateTopicsMutation } from "@/services/sessions&topics/sesisonSlice";
import { TopicBody } from "@/types/services/sessions&Topics.t";
import { useState } from "react";
import { useForm } from "react-hook-form";
const DefaultCourseValue = { value: "", label: "انتخاب  دوره" };
function TopicForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TopicBody>();
  const { data } = useGetCoursesQuery();
  const courseOptions = data
    ?.map((course) => {
      return { label: course.name, value: course._id };
    })
    .concat({ value: "", label: "انتخاب  دوره" })
    .reverse();

  const [course, setCourse] = useState(DefaultCourseValue);

  const { showAlert } = useAlert();
  const [createTopic, { isLoading }] = useCreateTopicsMutation();
  const createHandler = async (data: TopicBody) => {
    try {
      const result = await createTopic({
        title: data.title,
        course: course.value,
      }).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      error?.message.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    } finally {
      setCourse(DefaultCourseValue);
      reset();
    }
  };
  return (
    <HeaderAdminLayout title="افزودن تاپیک">
      <form
        onSubmit={handleSubmit(createHandler)}
        className="flex flex-col gap-y-6   relative py-6 container"
        autoComplete="on"
      >
        <div className="flex xl:flex-row flex-col xl:gap-y-0 gap-y-4 w-full items-center justify-between child:w-full gap-x-4">
          <MainTextField
            register={register}
            name="title"
            id="title"
            errors={errors}
            placeHolder="عنوان تاپیک ..."
            variant="rounded"
            type="text"
            size="largeSize"
            wrapperStyles="flex flex-col xl:h-[50px]"
            className="w-full "
            validattionschema={{
              required: { value: true, message: "عنوان الزامی است" },
              maxLength: { value: 50, message: "حداکثر ۵۰ کاراکتر" },
            }}
          />
          <Select
            options={courseOptions as { value: string; label: string }[]}
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
          {isLoading ? <Loader loadingCondition={isLoading} /> : "افزودن"}
        </PrimaryBtn>
      </form>
    </HeaderAdminLayout>
  );
}

export default TopicForm;
