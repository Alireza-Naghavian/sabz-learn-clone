import Blog from "@/components/layouts/articles/Single-Blog/Blog";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import React from "react";

async function page() {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden ">
      
      <Blog menu={dataParser(menus)}/>
    </main>
  );
}

export default page;
