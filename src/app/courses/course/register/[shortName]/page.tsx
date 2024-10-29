import CourseRegister from "@/components/layouts/registerCourses/CourseRegister";
import StoreProvider from "@/context/StoreProvider";
import { CompaignTableData } from "@/types/services/compaign.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import React from "react";
type CourseParams = {
  params: { shortName: string };
};
async function page({ params }: CourseParams) {
  const { shortName } = params;
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const compaignData: CompaignTableData[] = await dataFetcher(
    "offs/getLatest",
    "omit",
    undefined
  );
  return (
    <StoreProvider>
      <main className="max-w-[1920px] mx-auto overflow-x-hidden">
        <CourseRegister
          compaignData={dataParser(compaignData)}
          shortName={dataParser(shortName)}
          menu={dataParser(menus)}
        />
      </main>
    </StoreProvider>
  );
}

export default page;
