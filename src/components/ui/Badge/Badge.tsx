import React from "react";
import styles from "./badge.module.css";
function Badge({ value }: { value: string | number | undefined }) {
  return <div className={styles.badge}>{value}</div>;
}

export default Badge;
