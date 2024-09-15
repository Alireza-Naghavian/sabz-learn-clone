"use client";
import { useForm } from "react-hook-form";
import CheckBoxes from "../textField&inputs/CheckBoxes";
import "./aside.css";
import CategorySelector from "./CategorySelector";
import React from "react";
import { ChildrenProps } from "@/types/global.t";
const SideBarFilter: React.FC<Partial<ChildrenProps> & { className: string }> = ({
  className,
  children,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <aside className="lg:sticky top-5 gap-y-5 h-full">
      <form id="archive-filters" className="space-y-5 ">
        {/* <!--toggle box container--> */}
        <div className={`${className}`}>
          <CheckBoxes
            register={register}
            name="free"
            errors={errors}
            required={false}
            id="free"
            label="فقط دوره های رایگان"
            type="checkbox"
          />
          <CheckBoxes
            register={register}
            name="preSell"
            errors={errors}
            required={false}
            id="preSell"
            label="در حال پیش فروش"
            type="checkbox"
          />
          {/* user logged in ? */}
          <CheckBoxes
            register={register}
            wrapperStyle="col-span-2 lg:col-span-1"
            name="userCourse"
            errors={errors}
            required={false}
            id="userCourse"
            label="دوره های خریداری شده"
            type="checkbox"
          />
          <CategorySelector register={register} />
        </div>
        {/* mobile sort */}
        {children}
      </form>
    </aside>
  );
};

export default SideBarFilter;
