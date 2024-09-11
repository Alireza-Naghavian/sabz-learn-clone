"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { getFromStorage, saveToStorage } from "@/utils/darkMode";
function ThemeToggler() {
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
    <Button type="button" size="xl" className="hidden lg:flex  " onClick={themeHandler}>
      <SunIcon
        className={`${theme === "light" ? "hidden" : "inline-block"}  w-full h-full  `}
      />
      <MoonIcon
        className={`${theme === "dark" ? "hidden" : "inline-block "}  w-full h-full `}
      />
    </Button>
  );
}

export default ThemeToggler;
