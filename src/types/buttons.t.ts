import React, { ChangeEventHandler } from "react";
import { NavItemType } from "./navitems.t";
import { IconType } from "./icon.t";
import { SetState } from "./global.t";
import { CatBodytype } from "./services/course&category.t";
export type SelectType<T> = {
  value: T;
  onChange: ChangeEventHandler<any>;
  className?: string;
  optionClassName?: string;
  selectTitle?: string;
  options: { value: T; label: string }[];
};
export type Size = "md" | "lg" | "xl" | "xxl";
export type Variant = "fill" | "outline";
export type PrimaryBtnType = {
  variant: Variant;
  size: Size;
  Icon?: IconType;
  type?: string;
} & React.ComponentProps<"button">;
export type ButtonProps = {
  size: Size;
  type: string;
} & React.ComponentProps<"button">;

export interface LinkType extends NavItemType {
  Icon?: IconType;
}

export type Btn_sheet_type = {
  setIsOpen: SetState<boolean>;
  isOpen: boolean;
  sort: { label: string; title: string };
  setSort: SetState<{ label: string; title: string }>;
directPath?:string
  categoryName?:string
};
export type Filter_section_type = Pick<
  Btn_sheet_type,
  "isOpen" | "setIsOpen"
> & { qs?: boolean ,categories:CatBodytype[]};
