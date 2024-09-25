"use client";
import { useAlert } from "@/context/AlertProvider";
import { useGetMeQuery, useLogoutMutation } from "@/services/auth/authApiSlice";
import { SideBarItemType } from "@/types/navitems.t";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import React from "react";
import Loader from "../loader/Loader";
type LogoutBtnType = Omit<SideBarItemType, "target" | "title"> &
  React.ComponentProps<"button">;
const logoutStyle = cva(`flex items-center rounded-lg`, {
  variants: {
    variant: {
      hoverMode:
        "hover:text-white hover:bg-red-500 px-2.5 h-12  gap-x-2.5 w-full transition-colors   ",
      casual: " gap-x-2.5 h-10 px-3  w-full",
    },
  },
  defaultVariants: {
    variant: "hoverMode",
  },
});
function LogOutBtn({ Icon, variant, className, ...props }: LogoutBtnType) {
  const [logout, { isLoading }] = useLogoutMutation();
  const { replace } = useRouter();
  const {refetch} = useGetMeQuery();
  const { showAlert } = useAlert();
  const logoutHandler = async () => {
    try {
      const result = await logout().unwrap();
      showAlert("success", result.message);
      await refetch();
      replace("/");
    } catch (error) {
      const fetchError = error as FetchBaseQueryError;
      const errorMessage = (fetchError as { message?: string })?.message;
      if (errorMessage) {
        showAlert("error", errorMessage);
      } else {
        showAlert("error", "خطایی رخ داده است");
      }
    }
  };
  return (
    <button
      onClick={logoutHandler}
      disabled={isLoading}
      className={logoutStyle({ variant, className })}
      {...props}
    >
      <Icon />
      <span className="flex items-center gap-x-2">
        {isLoading ? <Loader loadingCondition={isLoading} /> : "خروج"}
      </span>
    </button>
  );
}

export default LogOutBtn;
