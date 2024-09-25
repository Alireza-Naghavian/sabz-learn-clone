"use client";
import Alert from "@/components/ui/Alert/Alert";
import { ChildrenProps } from "@/types/global.t";
import React, { createContext, useContext, useState } from "react";
type AlertContexType = {
  showAlert: (
    status: "error" | "success" | "",
    title: string,
    duration?: number
  ) => void;
};
const AlertContext = createContext<AlertContexType | undefined>(undefined);
function AlertProvider({ children }: ChildrenProps) {
  const [alertData, setAlertData] = useState<{
    status: "error" | "success" | "";
    title: string;
    show: boolean;
  }>({ show: false, status: "", title: "" });
  const showAlert = (
    status: "error" | "success" | "",
    title: string,
    duration: number = 2000
  ) => {
    setAlertData({ status, title, show: true });
    setTimeout(() => {
      setAlertData({ ...alertData, show: false });
    }, duration);
  };
  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Alert
        status={alertData.status}
        title={alertData.title}
        startShow={alertData.show}
      />
    </AlertContext.Provider>
  );
}
export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
      throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
  };
export default AlertProvider;
