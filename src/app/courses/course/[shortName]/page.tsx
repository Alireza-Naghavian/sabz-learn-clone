import Course from "@/components/layouts/course/Course";
import StoreProvider from "@/context/StoreProvider";
import { CompaignTableData } from "@/types/services/compaign.t";
import { CourseBodyType } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
type CourseParams = {
  params: { shortName: string };
};
// export const generateStaticParams = async () => {
//   const allCourses = await dataFetcher(
//     "courses/getInit",
//     "omit",
//     undefined,
//     10
//   );
//   const params = allCourses.map((course: CourseBodyType) => ({
//     shortName: course.shortName,
//   }));
//   return params;
// };
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
  const menus = await dataFetcher("menus", "omit", undefined, 1800);
  const courseData = await dataFetcher(
    `courses/${params.shortName}`,
    "omit",
    undefined,
    10
  );
  const relateCourses = await dataFetcher(
    `courses/related/${params.shortName}`,
    "omit",
    undefined,
    1800
  );
  const compaignData: CompaignTableData[] = await dataFetcher(
    "offs/getLatest",
    "omit",
    undefined
  );
  return (
    <main className="max-w-[1920px] 2xl:max-w-full mx-auto overflow-x-hidden">
      <StoreProvider>
        <Course
          compaignData={dataParser(compaignData)}
          menu={dataParser(menus)}
          courseData={dataParser(courseData !== undefined && courseData)}
          relateCourses={dataParser(relateCourses)}
          shortName={dataParser(params.shortName)}
        />
      </StoreProvider>
    </main>
  );
}

export default page;
