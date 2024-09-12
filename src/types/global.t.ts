import { Dispatch, SetStateAction } from "react";
export type ChildrenProps ={
    children:React.ReactNode
}
export type SetState<T> = Dispatch<SetStateAction<T>>;