"use client";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import "./alert.css";
import { createPortal } from "react-dom";
type AlertType = {
  status: "error" | "success" | "";
  title: string;
  startShow: boolean;
};
function Alert({ startShow, status, title }: AlertType) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (!mounted) return null;
  return createPortal(
    <div>
      <div
        className={`${
          startShow ? "translate-x-0" : "translate-x-[-40rem]  !z-[9999]"
        } fixed top-10 left-10 z-[9999999] px-4 transition-all transform flex items-center  justify-between  duration-500   dark:bg-dark
         text-baseColor dark:text-baseColor  bg-gray-200 rounded-xl `}
      >
        <div
          className={` ${
              !startShow ? "top-10 " : "-top-full !z-[99999]"
            }  z-50 mx-auto max-w-md  transition-all duration-500`}
        >
          {status === "error" ? (
              <XMarkIcon className="notification__icon text-red-500 my-4 mx-2 " />
            ) : status === "success" &&(
                <CheckCircleIcon className="notification__icon text-baseColor  my-4 mx-2" />
            )}
        </div>
            <p className=" text-base font-DanaMedium text-right w-full h-full my-4 mx-1 ">{title}</p>
      </div>
    </div>,
    document.body

  );
}

export default Alert;
