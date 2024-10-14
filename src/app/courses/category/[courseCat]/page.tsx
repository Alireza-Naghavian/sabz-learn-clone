import CategoryName from "@/components/layouts/courses/categoryName/CategoryName";
import { CourseCatType } from "@/types/services/course&category.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
type CatParams = {
  params:{courseCat:string}
}
export const generateMetadata = async({params}:CatParams): Promise<Metadata>=>{
  const categoryName:CourseCatType = await dataFetcher(`courses/category/${params.courseCat}`, "omit", undefined,1800);
  const category = categoryName.category
  const title  = `سبزلرن -${category[0].title}`
return {
  title
}
}
async function page({params}:CatParams) {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const categoryName:CourseCatType = await dataFetcher(`courses/category/${params.courseCat}`, "omit", "no-cache",1800);
  const category = categoryName.category
  return <main className="max-w-[1920px] mx-auto overflow-x-hidden">
    <CategoryName
     menu={dataParser(menus)}
     allCourses={dataParser(categoryName)}
     category={dataParser(category)}
    />
  </main>
}

export default page;
