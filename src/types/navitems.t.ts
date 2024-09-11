import { IconType } from "./icon.t";

export type NavItemType = {
  title: string;
  target: string;
  className?: string;
};
export interface SideBarItemType extends NavItemType {
  Icon: IconType ,
  variant:"hoverMode"|"casual"
}
