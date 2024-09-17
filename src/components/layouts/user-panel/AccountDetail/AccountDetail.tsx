"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import MainTextField from "@/components/ui/textField&inputs/MainTextField";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import React from "react";
import { useForm } from "react-hook-form";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

function AccountDetail() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
    <ChangeEmail/>
      {/* password box */}
  <ChangePassword/>
    </div>
  );
}

export default AccountDetail;
