import Blogs from '@/components/layouts/articles/Blogs'
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
  const menus = await dataFetcher("menus", "omit", "force-cache");
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden '>
      <Suspense>

        <Blogs   menu={dataParser(menus)}/>
      </Suspense>
    </main>
  )
}

export default page