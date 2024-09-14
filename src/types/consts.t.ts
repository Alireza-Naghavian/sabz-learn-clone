import { IconType } from "./icon.t";

export type UserPanelOpType = {
  target: string;
  title: string;
  Icon: IconType;
  variant: "hoverMode" | "casual";
};
export type RoeadMapType = {
  gr_colors: string;
  target: string;
  Icon: IconType;
  title: string;
};

export type SlogengType =Pick<RoeadMapType,"title"|"Icon">&{subTitle:string,Sl_color:string,Icon_Color:string}
