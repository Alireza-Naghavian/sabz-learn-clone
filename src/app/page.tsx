import HomePage from "@/components/layouts/home/HomePage";
import { CourseBodyType } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
export default async function Home() {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const allCourses = await dataFetcher(
    "courses/getInit",
    "omit",
    "force-cache",
    1800
  );
  const latestArticles = await dataFetcher("articles","omit","force-cache",1800)
  const categories = await dataFetcher("category", "omit", "no-store");
  const mostPopularCourses =  allCourses.sort((a: any, b: any) => {
    return b.registers - a.registers;
  }).slice(0,8)
  const latestCourses = allCourses.sort((a: any, b: any) => {
    return new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate();
  }).slice(0,8)
  const mostPopularFreeCourses =  allCourses.filter((course:CourseBodyType)=>{
    return course.isFree
  }).slice(0,8)
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden min-h-screen">
      <HomePage
        menu={dataParser(menus)}
        latestCoursesUpdated={dataParser(allCourses)}
        categories={dataParser(categories)}
        mostPopularCourses={dataParser(mostPopularCourses)}
        latestCourses={dataParser(latestCourses)}
        mostPopularFreeCourses={dataParser(mostPopularFreeCourses)}
        latestArticles = {dataParser(latestArticles)}
      />
    </main>
  );
}
