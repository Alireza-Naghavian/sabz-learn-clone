"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../button/Button";

function ThemeToggler() {
  return (
    <Button type="button" size="xl" className="hidden lg:flex  ">
      <SunIcon className="hidden dark:inline-block w-6 h-6" />
      <MoonIcon className=" dark:hidden w-6 h-6" />
    </Button>
  );
}

export default ThemeToggler;
