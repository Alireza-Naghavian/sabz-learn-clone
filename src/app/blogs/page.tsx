import Blogs from '@/components/layouts/articles/Blogs'
import { Metadata } from 'next';
import React from 'react'
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
function page() {
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden '>
        <Blogs/>
    </main>
  )
}

export default page