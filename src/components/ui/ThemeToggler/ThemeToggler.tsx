"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { getFromStorage, saveToStorage } from "@/utils/utils";

function ThemeToggler({className}:{className?:string}) {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    const storedTheme = getFromStorage("theme") || "";
    setTheme(storedTheme);

    if(storedTheme === "light"){
      document.documentElement.classList.add(storedTheme);
      document.documentElement.classList.remove("dark")
    }else{
      document.documentElement.classList.add(storedTheme);
    }
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
     {theme ==="dark" &&
      <SunIcon
      className={`${theme === "dark" ? "inline-block " : "hidden"}  !w-7 !h-7 mx-auto `}
      />
    }
    {theme === "light"&&
      <MoonIcon
      className={`${theme === "light" ? "inline-block" : "  hidden"}  !w-7 !h-7 mx-auto `}
      />
    }
    </Button>
  );
}

export default ThemeToggler;
