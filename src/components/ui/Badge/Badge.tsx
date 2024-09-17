import React from "react";
import styles from "./badge.module.css";
function Badge({ value,className }: { value: string | number | undefined,className?:string }) {
  return <div className={`${styles.badge} ${className}`}>{value}</div>;
}

export default Badge;
