import Course from "@/components/layouts/course/Course";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
import React from "react";
type CourseParams = {
  params: { shortName: string };
};
export const generateMetadata = async ({
  params,
}: CourseParams): Promise<Metadata> => {
  const courseData = await dataFetcher(
    `courses/${params.shortName}`,
    "omit",
    undefined,
    3600
  );
  const courseName = courseData.name;
  const title = `سبزلرن -${courseName}`;
  return {
    title,
  };
};
async function page({ params }: CourseParams) {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const courseData = await dataFetcher(
    `courses/${params.shortName}`,
    "omit",
    undefined,
    3600
  );
  const relateCourses = await dataFetcher(
    `courses/related/${params.shortName}`,
    "omit",
    undefined,
    1800
  );
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden">
      <Course
        menu={dataParser(menus)}
        courseData={dataParser(courseData)}
        relateCourses={relateCourses}
      />
    </main>
  );
}

export default page;
