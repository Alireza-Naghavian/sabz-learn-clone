"use client";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { ChildrenProps } from "@/types/global.t";
import { CatBodytype,FilterCourseType,} from "@/types/services/course&category.t";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CheckBoxes from "../textField&inputs/CheckBoxes";
import "./aside.css";
import CategorySelector from "./CategorySelector";
const SideBarFilter: React.FC<
  Partial<ChildrenProps> & {
    className: string;
    qs?: boolean;
    categories: CatBodytype[];
  }
> = ({ className, children, qs = true, categories }) => {
  const {
    register,
    formState: { errors },
  } = useForm<FilterCourseType>();
  const path = usePathname();
  const { data, isLoading } = useGetMeQuery();
  const initCoursePath = path.split("/").at(1);
  const [isFree, setIsFree] = useState(false);
  const [preOrder, setPreOrder] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearchParams = new URLSearchParams(searchParams.toString());
  
  const filterOptions = (option: string, value: boolean) => {
    urlSearchParams.set(option, value ? "true" : "");
    router.replace(`/courses/?${urlSearchParams.toString()}`, {
      scroll: false,
    });
  };
  const handleFreeChange = () => {
    const newIsFree = !isFree;
    setIsFree(newIsFree);
    filterOptions("isFree", newIsFree);
  };
  const handlePreOrderChange = () => {
    const newPreOrder = !preOrder;
    setPreOrder(newPreOrder);
    filterOptions("preOrder", newPreOrder);
  };
  return (
    <aside className="lg:sticky top-5 gap-y-5 h-full">
      <form id="archive-filters" className="space-y-5 ">
        {/* <!--toggle box container--> */}
        <div className={`${className}`}>
          <CheckBoxes
            name="isFree"
            errors={errors}
            required={false}
            id="isFree"
            label="فقط دوره های رایگان"
            type="checkbox"
            checked={isFree}
            onChange={handleFreeChange}
          />
          <CheckBoxes
            checked={preOrder}
            onChange={handlePreOrderChange}
            name="preOrder"
            errors={errors}
            required={false}
            id="preOrder"
            label="در حال پیش فروش"
            type="checkbox"
          />
          {/* user logged in ? */}
          {!isLoading && data?.user !== null && (
            <CheckBoxes
              wrapperStyle="col-span-2 lg:col-span-1"
              name="userCourse"
              errors={errors}
              required={false}
              id="userCourse"
              label="دوره های خریداری شده"
              type="checkbox"
            />
          )}
          {initCoursePath === "courses" && (
            <CategorySelector categories={categories} register={register} />
          )}
        </div>
        {/* mobile sort */}
        {children}
      </form>
    </aside>
  );
};

export default SideBarFilter;
