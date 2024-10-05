import { IconType } from "./icon.t";

export type UserPanelOpType = {
  target: string;
  title: string;
  Icon: IconType;
  variant: { hoverMode: "hoverMode"; casual: "casual" };
};
export type AdminDropDownType = Pick<UserPanelOpType, "Icon" | "title"|"variant"> & {
  isMenuOpen?: boolean;
  id:string,
  targetLink: string;
  subTargetLink: string;
  subTargetLink_2: string;
  subIcon: IconType;
  subIcon_2: IconType;
  subLabel: string;
  subLabel_2: string;
};
export type RoeadMapType = {
  gr_colors: string;
  target: string;
  Icon: IconType;
  title: string;
};

export type SlogengType = Pick<RoeadMapType, "title" | "Icon"> & {
  subTitle: string;
  Sl_color: string;
  Icon_Color: string;
};

export type SortType = {
  title: string;
  label: string;
};
export type DeptType = { value: string; label: string };

export type OptionType = {label:string,value:string}