import { Message, UseFormGetValues, UseFormSetValue, ValidationRule } from "react-hook-form";
import { SetState } from "./global.t";
import { IconType } from "./icon.t";
import React, { ChangeEventHandler } from "react";
import { CourseBodyType } from "./services/course&category.t";
export type TextAriaType = Exclude<TextFieldType, "variant" | "labelVariant"> &
  React.ComponentProps<"textarea"> & {
    variant: "outLine" | "freeMode";
    size?: "medium" | "free";
    required?: boolean;
    validattionschema?: RegisterOptions;
    readOnly?: boolean;
  };

export type RegisterOptions = Partial<{
  required?: Message | ValidationRule<boolean>;
  min?: ValidationRule<number | string>;
  max?: ValidationRule<number | string>;
  maxLength?: ValidationRule<number | string>;
  minLength?: ValidationRule<number | string>;
  pattern?: ValidationRule<RegExp>;
  validate?: Record<string, any>;
}>;
export type TextFieldType = {
  label?: string;
  type: string;
  id: string;
  placeHolder?: string;
  name: string;
  value?: string | number;
  className?: string;
  required?: boolean;
  register: any;
  errors: any;
  readOnly?: boolean;
  wrapperStyle?: string;
} & React.ComponentProps<"input">;
type Size = "mediumSize" | "largeSize";
export type MainTextFieldType = {
  label?: string;
  type: string;
  id: string;
  placeHolder?: string;
  name: string;
  value?: string | number;
  className?: string;
  required?: boolean;
  size: Size;
  variant: "outLine" | "borderFill" | "rounded";
  register: any;
  Icon?:IconType
  errors: any;
  validattionschema?: RegisterOptions;
  onChange?:ChangeEventHandler<HTMLInputElement>
  readOnly?: boolean;
  wrapperStyles?:string
}

export type StatusBoxType<Value,Name> = {
  value: Value;
  title: string;
  watch: any;
  register:any
  name:Name;
  Icon:IconType;
  className?:string
  wrapperStyles?:string,
  setStatus:SetState<string>;
  status:string
  validattionschema?:RegisterOptions
};
