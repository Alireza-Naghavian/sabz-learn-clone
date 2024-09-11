import React from "react";
import { NavItemType } from "./navitems.t";
import { IconType } from "./icon.t";

export type Size = "md" | "lg" | "xl"|"xxl";

 export type ButtonProps = {
    size:Size,
    type:string
  }& React.ComponentProps<"button">

  export interface  LinkType extends NavItemType{
    Icon?:IconType
  }