import { IconType } from "./icon.t";

export type NavItemType = {
  title: string;
  target: string;
  className?: string;
  onClick?: () => void;
};
export type DropDownType = {
  label: string;
  children: React.ReactNode;
  bgColor?: string;
  activeBg?: string;
  close: () => void;
  Icon?: IconType;
  className?: string;
  isOpen: boolean;
  id: string;
  toggle: (id: string) => void;
};
export interface SideBarItemType extends NavItemType {
  Icon: IconType;
  variant: "hoverMode" | "casual";
}
