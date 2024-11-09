import Courses from "@/components/layouts/courses/Courses";
import { CompaignTableData } from "@/types/services/compaign.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
import React, { Suspense } from "react";
export const metadata: Metadata = {
  applicationName: "سبز لرن",
  title: "دوره ها - سبز لرن",
  description:"دوره ها Archive - سبز لرن",

  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: "دوره ها - سبز لرن",
    description:"دوره ها Archive - سبز لرن",
  },
};
async function page() {
  const menus = await dataFetcher("menus", "omit", undefined,1800);
  const allCourses = await dataFetcher("courses", "omit", undefined,10);
  const initCourses = await dataFetcher("courses/getInit", "omit", undefined,10);
  const categories = await dataFetcher("category", "omit", undefined,1800);
  const compaignData:CompaignTableData[] = await dataFetcher("offs/getLatest","omit",undefined)
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden">
      <Suspense>

      <Courses
      compaignData={dataParser(compaignData)}
      initCourses={dataParser(initCourses)}
        allCourses={dataParser(allCourses)}
        menu={dataParser(menus)}
        categories={dataParser(categories)}
        />
        </Suspense>
    </main>
  );
}

export default page;
