import Course from "@/components/layouts/course/Course";
import StoreProvider from "@/context/StoreProvider";
import { CourseBodyType } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
type CourseParams = {
  params: { shortName: string };
};
export const generateStaticParams = async()=>{
  const allCourses = await dataFetcher("courses", "omit", undefined, 1800);
  const params  = allCourses.allCourses.map((course:CourseBodyType)=>({shortName:course.shortName}))
  return params
}
export const generateMetadata = async ({
  params,
}: CourseParams): Promise<Metadata> => {
  const courseData = await dataFetcher(
    `courses/${params.shortName}`,
    "omit",
    undefined,
    5
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

<StoreProvider>


      <Course
        menu={dataParser(menus)}
        courseData={dataParser(courseData)}
        relateCourses={dataParser(relateCourses)}
        shortName={dataParser(params.shortName)}
        />

        </StoreProvider>

    </main>
  );
}

export default page;
