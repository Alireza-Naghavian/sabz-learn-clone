"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import StatusBox from "@/components/ui/textField&inputs/StatusBox";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useGetCoursesQuery } from "@/services/course&Categories/courseApiSlice";
import { useCreateSessionMutation } from "@/services/sessions&topics/sesisonSlice";
import { SessionBodyType } from "@/types/services/sessions&Topics.t";
import { RegisterOptions } from "@/types/textFilels.t";
import {
  CurrencyDollarIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useForm } from "react-hook-form";
function SessionForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SessionBodyType>();

  // static states
  const [topic, setTopic] = useState({ label: "", value: "" });
  const [course, setCourse] = useState({ label: "", value: "" });
  const [status, setStatus] = useState("free");
  const { showAlert } = useAlert();
  // select data
  const { data: courses } = useGetCoursesQuery();
  const [createSession, { isLoading }] = useCreateSessionMutation();
  const courseOptions = courses
    ?.map((course) => {
      return { label: course.name, value: course._id };
    })
    .concat({ label: "انتخاب دوره", value: "" })
    .reverse();

  const TopicOptions = courses
    ?.map((courseItem) => {
      return courseItem.topics?.filter((topic) => {
        return topic.course == course?.value;
      });
    })
    .flat()
    .map((item) => ({ label: item?.title, value: item?._id }))
    .concat({ label: "انتخاب تاپیک", value: "" })
    .reverse();

  // create new session
  const createHandler = async (data: SessionBodyType) => {
    try {
      let sessionStatus = status === "free";

      const sessionBody = {
        ...data,
        course: course.value,
        _id: course.value,
        topic: topic.value,
        video: data.video,
        isFree: sessionStatus,
      };
      console.log(sessionBody);
      const result = await createSession(sessionBody).unwrap();
      showAlert("success", result.message);
    } catch (error:any) {
      error?.message.forEach((err:any)=>{
        return showAlert("error",err.message)
      })
    }finally{
      reset();
    }
  };


  const renderTextField = (
    name: keyof SessionBodyType,
    placeholder: string,
    type = "text",
    validattionschema?: RegisterOptions
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
    <HeaderAdminLayout title="افزودن جلسه">
      <form
        onSubmit={handleSubmit(createHandler)}
        className="flex flex-col gap-y-6   relative py-6 container"
        autoComplete="on"
      >
        <div className={`${styles.input_group}`}>
          {renderTextField("title", "عنوان جلسه ...")}
          <Select
            options={courseOptions as { label: string; value: string }[]}
            value={course.value}
            onChange={(e) =>
              setCourse({ value: e.target.value, label: topic.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
          />
        </div>
        <div className={`${styles.input_group}`}>
          <Select
            options={TopicOptions as { label: string; value: string }[]}
            value={topic.value}
            onChange={(e) =>
              setTopic({ value: e.target.value, label: topic.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
          />
          <div className="flex">
            <StatusBox
              register={register}
              name={"isFree"}
              Icon={PlayCircleIcon}
              setStatus={setStatus}
              status={status}
              value="free"
              watch={watch}
              title="رایگان"
              className="child:md:!text-lg child:!text-sm"
              wrapperStyles="rounded-r-xl "
            />
            <StatusBox
              register={register}
              name={"isFree"}
              Icon={CurrencyDollarIcon}
              setStatus={setStatus}
              status={status}
              value="paid"
              watch={watch}
              title="غیر رایگان"
              className="child:md:!text-lg child:!text-sm"
              wrapperStyles="rounded-l-xl "
            />
          </div>
        </div>
        <div className={`${styles.input_group}`}>
          {renderTextField("video", "فایل جلسه ...", "file")}
          {renderTextField("time", "زمان جلسه ...", "text")}
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

export default SessionForm;
