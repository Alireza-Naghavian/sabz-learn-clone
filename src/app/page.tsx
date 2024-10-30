import HomePage from "@/components/layouts/home/HomePage";
import { CompaignTableData } from "@/types/services/compaign.t";
import { CourseBodyType, CourseDataTable } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
export default async function Home() {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const allCourses = await dataFetcher(
    "courses/getInit",
    "omit",
    undefined,
   10
  )
  const latestCoursesUpdated = allCourses.sort((a: CourseDataTable, b: CourseDataTable)=>{
    return new Date(b.updatedAt as Date).getDate() - new Date(a.updatedAt as Date).getDate()
  })
  
  const latestArticles = await dataFetcher("articles/getInit","omit",undefined,1800)
  const categories = await dataFetcher("category", "omit", undefined);
  const mostPopularCourses =  allCourses.sort((a: CourseBodyType, b: CourseBodyType) => {
    return b.registers! - a.registers!;
  }).slice(0,8)
  const latestCourses = allCourses.sort((a: CourseDataTable, b: CourseDataTable) => {
    return new Date(b.createdAt!).getDate() - new Date(a.createdAt!).getDate();
  }).slice(0,8)
  const mostPopularFreeCourses =  allCourses.sort((a:CourseDataTable,b:CourseDataTable)=>{
    return Number(a.registers ) - Number(b.registers)
  }).slice(0,8);
  const compaignData:CompaignTableData[] = await dataFetcher("offs/getLatest","omit",undefined)
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden min-h-screen">
      <HomePage
        menu={dataParser(menus)}
        latestCoursesUpdated={dataParser(latestCoursesUpdated)}
        categories={dataParser(categories)}
        mostPopularCourses={dataParser(mostPopularCourses)}
        latestCourses={dataParser(latestCourses)}
        mostPopularFreeCourses={dataParser(mostPopularFreeCourses)}
        latestArticles = {dataParser(latestArticles.slice(0,4))}
        compaignData={dataParser(compaignData)}
      />
    </main>
  );
}
