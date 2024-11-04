import OverViews from "@/components/layouts/admin/OverView/OverView";
import { CourseDataTable } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
async function page() {
  const salesData = await dataFetcher("courses/salesData", "omit", "no-cache");
  const allCourses = await dataFetcher(
    "courses/getInit",
    "omit",
    undefined,
    10
  );
  const mostPopularCourse = allCourses
    .sort((a: CourseDataTable, b: CourseDataTable) => {
      return Number(b.registers) - Number(a.registers);
    })
    .splice(0, 1);

  return (
    <OverViews
      salesData={dataParser(salesData)}
      mostPopCourses={dataParser(mostPopularCourse)}
    />
  );
}

export default page;
