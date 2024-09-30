"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import TextLoader from "@/components/ui/loader/TextLoader";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import SimpleCheckBox from "@/components/ui/textField&inputs/SimpleCheckBox";
import StatusBox from "@/components/ui/textField&inputs/StatusBox";
import TextAriaField from "@/components/ui/textField&inputs/TextAriaField";
import Select from "@/components/utils-components/Select/Select";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import {
    useGetAllCatQuery,
    useGetCourseQuery,
    useUpdateCourseMutation,
} from "@/services/course&Categories/courseApiSlice";
import { SingleCourseData } from "@/types/services/course&category.t";
import { BookOpenIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function EditCourseForm({ shortName ,_id}: { shortName: string,_id:string }) {
  const { data, isLoading: isCourseLoading } = useGetCourseQuery({ shortName });
  const { data: userData } = useGetMeQuery();
  const [updateCourse, { isLoading: isUpdating }] = useUpdateCourseMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SingleCourseData>({
    defaultValues: {
      name: data?.name as string,
      description: data?.description as string,
      shortName: data?.shortName as string,
      categoryID: data?.categoryID._id as {},
      price: data?.price as number,
      status: data?.status as string,
      cover: data?.cover as string,
      discount: data?.discount as number,
      isComplete: data?.isComplete as boolean,
      duration: data?.duration as string,
      isFree: data?.isFree as boolean,
    },
  });
  const { showAlert } = useAlert();
  const [price, setPrice] = useState<string>(
    data?.price?.toString() ||""
  );
  const [status, setStatus] = useState(data?.status as string);
  const { data: categories } = useGetAllCatQuery();
  const {refresh} = useRouter();
  const [category, setCategory] = useState({
    label: data?.categoryID.title,
    value: data?.categoryID._id as string,
  });
  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        description: data.description,
        shortName: data.shortName,
        categoryID: data.categoryID._id as any,
        status: data.status,
        cover: data.cover,
        price: data.price,
        discount: data.discount,
        isComplete: data.isComplete,
        duration: data.duration,
        isFree: data.isFree,
      });
      setPrice(data.price.toString());
      setStatus(data.status);
      setCategory({
        label: data.categoryID.title,
        value: data.categoryID._id as string,
      });
    }
  }, [data, reset]);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawPrice = e.target.value.replace(/[^0-9]/g, '');
    setPrice(rawPrice);

  };
  const catOptions = categories
    ?.map((category) => {
      return { label: category.title as String, value: category._id as string };
    })
    .reverse();
  //   update handler
  const updateHanlder = async (data: SingleCourseData) => {
    try {
      const updateBody: SingleCourseData = {
        ...data,
        _id:_id,
        categoryID:category.value as any,
        creator: userData?.user._id as string,
        price: Number(price),
        status,
      };
      const result = await updateCourse(updateBody).unwrap();
      showAlert("success", result.message);
      refresh();
    } catch (error:any) {
      error?.message.forEach((err:any)=>{
        return showAlert("error",err.message)
      })
    }
  };
  if (isCourseLoading) return <TextLoader loadingCondition={isCourseLoading} />;
  const renderTextField = (name: keyof SingleCourseData, label: string, type = "text", placeholder = "") => (
    <MainTextField
      register={register}
      name={name}
      id={name}
      errors={errors}
      variant="rounded"
      size="largeSize"
      type={type}
      className="w-full"
      placeHolder={placeholder || label}
    />
  );
  return (
    <form
      onSubmit={handleSubmit(updateHanlder)}
      className="flex flex-col gap-y-4 px-6 py-4 max-h-[480px] overflow-y-auto"
    >
     {renderTextField("name", "عنوان دوره")}
      <Select
        options={catOptions as { label: string; value: string }[]}
        onChange={(e) =>
          setCategory({
            value: e.target.value as string,
            label: category.label as string,
          })
        }
        value={category.value !== undefined && category.value}
        className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
      />
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
          className="child:md:!text-base child:!text-sm border-l "
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
      {renderTextField("shortName", "لیبل دوره")}
      {renderTextField("discount", "تخفیف دوره", "number")}
      {renderTextField("duration", "زمان دوره")}
      <MainTextField
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
      />
      <SimpleCheckBox
        register={register}
        name="isFree"
        id="isFree"
        errors={errors}
        type="checkbox"
       
        label="این دوره رایگان است"
        className="child:!text-lg w-fit"
        required={false}
      />
      <SimpleCheckBox
        register={register}
        name="isComplete"
        id="isComplete"
        errors={errors}
        type="checkbox"
       
        label="این دوره تکمیل است "
        className="child:!text-lg w-fit"
        required={false}
      />
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
      <PrimaryBtn
        variant="fill"
        size="xxl"
        type="submit"
        role="button"
        className="mr-auto w-full md:w-[140px] rounded-xl px-6 py-2"
      >
        {isUpdating ? <Loader loadingCondition={isUpdating} /> : "ویرایش"}
      </PrimaryBtn>
    </form>
  );
}

export default EditCourseForm;
