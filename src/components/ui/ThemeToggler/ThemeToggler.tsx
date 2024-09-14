"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { getFromStorage, saveToStorage } from "@/utils/darkMode";
function ThemeToggler({className}:{className?:string}) {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "dark";
    setTheme(storedTheme);

    document.documentElement.classList.add(storedTheme);
  }, []);
  const themeHandler = () => {
    const newtheme = theme === "dark" ? "light" : "dark";
    setTheme(newtheme);
    saveToStorage("theme", newtheme);
    document.documentElement.classList.remove(theme || "dark");
    document.documentElement.classList.add(newtheme);
  };
  return (
    <Button type="button" size="xl" className={` !px-0 ${className}`} onClick={themeHandler}>
      <SunIcon
        className={`${theme === "light" ? "hidden" : "inline-block"}  !w-7 !h-7 mx-auto `}
      />
      <MoonIcon
        className={`${theme === "dark" ? "hidden" : "inline-block "}  !w-7 !h-7 mx-auto `}
      />
    </Button>
  );
}

export default ThemeToggler;
