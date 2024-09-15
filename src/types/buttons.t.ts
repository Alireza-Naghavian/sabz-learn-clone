import React from "react";
import { NavItemType } from "./navitems.t";
import { IconType } from "./icon.t";
import { SetState } from "./global.t";

export type Size = "md" | "lg" | "xl"|"xxl";

 export type ButtonProps = {
    size:Size,
    type:string
  }& React.ComponentProps<"button">

  export interface  LinkType extends NavItemType{
    Icon?:IconType
  }

  export type Btn_sheet_type ={
    setIsOpen:SetState<boolean>
    isOpen:boolean,
    sort:{label:string,title:string}
    setSort:SetState<{label:string,title:string}>
    
  }
  export type Filter_section_type = Pick<Btn_sheet_type,"isOpen"|"setIsOpen">