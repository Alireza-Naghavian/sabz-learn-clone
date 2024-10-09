import Courses from "@/components/layouts/courses/Courses";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import React from "react";

async function page() {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const allCourses = await dataFetcher("courses", "omit", undefined, 1800);
  const categories = await dataFetcher("category", "omit", "force-cache");
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden">
      <Courses
        allCourses={dataParser(allCourses)}
        menu={dataParser(menus)}
        categories={dataParser(categories)}
      />
    </main>
  );
}

export default page;
