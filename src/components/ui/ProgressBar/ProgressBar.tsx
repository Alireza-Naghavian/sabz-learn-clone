"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function ProgressBarLink() {
  return (
    <ProgressBar
      height="4px"
      color="#22c55e"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}

export default ProgressBarLink;
