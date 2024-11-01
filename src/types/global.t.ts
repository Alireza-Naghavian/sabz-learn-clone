import { Dispatch, SetStateAction } from "react";
export type ChildrenProps ={
    children:React.ReactNode
}
export type SetState<T> = Dispatch<SetStateAction<T>>;
export type OptionSelectionType = {
    label: string;
    value: string;
    optionalItem?: boolean;
  }[];