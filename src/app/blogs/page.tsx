import Blogs from '@/components/layouts/articles/Blogs'
import { CompaignTableData } from '@/types/services/compaign.t';
import dataFetcher from '@/utils/dataFetcher';
import dataParser from '@/utils/dataParser';
import { Metadata } from 'next';
import React, { Suspense } from 'react'
export const metadata: Metadata = {
  applicationName: "سبز لرن",
  title: "وبلاگ - سبز لرن",
  description:"وبلاگ - سبز لرن",
  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: "وبلاگ - سبز لرن",
    description:"وبلاگ - سبز لرن",
  },
};
async function page() {
  const menus = await dataFetcher("menus", "omit", undefined,1800);
  const latestArticles = await dataFetcher("articles/getInit","omit",undefined,300)
  const compaignData:CompaignTableData[] = await dataFetcher("offs/getLatest","omit",undefined)
  return (
    <main className='max-w-[1920px] 2xl:max-w-full mx-auto overflow-x-hidden '>
      <Suspense>

        <Blogs compaignData={dataParser(compaignData)}   menu={dataParser(menus)} latestArticles={dataParser(latestArticles)}/>
      </Suspense>
    </main>
  )
}

export default page