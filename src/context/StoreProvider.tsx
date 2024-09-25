"use client";
import { AppStore, store } from "@/store/store";
import { ChildrenProps } from "@/types/global.t";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import AlertProvider from "./AlertProvider";

function StoreProvider({ children }: ChildrenProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  return (
    <Provider store={storeRef.current}>
      <AlertProvider>{children}</AlertProvider>
    </Provider>
  );
}

export default StoreProvider;
