"use client";
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import Select from "@/components/utils-components/Select/Select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { MenuBodyType } from "@/types/services/menu.t";
import { useAlert } from "@/context/AlertProvider";
import Loader from "@/components/ui/loader/Loader";
import {
  useCreateMenuMutation,
  useGetAllMenusQuery,
} from "@/services/menu&subMenus/menuApiSlice";
function MenuForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<MenuBodyType>();

  // states
  const [menu, setMenu] = useState({ label: "انتخاب منو اصلی", value: "" });
  const { showAlert } = useAlert();
  // reqs from server
  const { data: menus, isLoading: isMenusLoading } = useGetAllMenusQuery();
  const [createMenu, { isLoading }] = useCreateMenuMutation();
  // menus options
  const menuOptions = menus
    ?.map((menu) => {
      if (!isMenusLoading) {
        return { label: menu.title, value: menu._id };
      }
    })
    .concat({ label: "انتخاب منوی اصلی", value: "" })
    .reverse();
  const renderTextField = (
    name: keyof MenuBodyType,
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

  // create handler
  const createHandler = async (data: MenuBodyType) => {
    try {
      const menuBody = {
        ...data,
        parent: menu.value.trim().length ? menu.value : undefined,
      };
      const result = await createMenu(menuBody).unwrap();
      showAlert("success", result.message);
    } catch (error: any) {
      error?.message.forEach((err: any) => {
        return showAlert("error", err.message);
      });
    } finally {
      reset();
    }
  };
  return (
    <HeaderAdminLayout title="افزودن منو جدید">
      <form
        onSubmit={handleSubmit(createHandler)}
        autoComplete="on"
        className="flex flex-col gap-y-6  
        relative py-6 container"
      >
        <div className={`${styles.input_group}`}>
          {renderTextField("title", "عنوان منو ...")}
          {renderTextField("href", "لینک منو ...")}
        </div>
        <div className={`${styles.input_group}`}>
          <Select
            options={menuOptions as { label: string; value: string }[]}
            onChange={(e) =>
              setMenu({ value: e.target.value, label: menu.label })
            }
            value={menu.value}
            className="  !gap-y-0 px-4 
             !py-3 !mt-0 focus:outline-none "
          />
          <div className=""></div>
        </div>
        <PrimaryBtn
          className="mr-auto w-full 
          md:w-[120px] rounded-xl px-6 py-2"
          type="submit"
          variant="fill"
          size="lg"
        >
          {isLoading ? <Loader loadingCondition={isLoading} /> : "افزودن منو"}
        </PrimaryBtn>
      </form>
    </HeaderAdminLayout>
  );
}

export default MenuForm;
