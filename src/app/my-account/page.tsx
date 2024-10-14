import UserPanel from '@/components/layouts/user-panel/UserPanel'
import { getUser } from '@/utils/auth/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react'
export const dynamic = "force-dynamic"
export const metadata: Metadata = {
  applicationName: "سبز لرن",
  title: " پنل کاربری - سبز لرن",
  description:"پنل کاربری - سبز لرن",
  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: " پنل کاربری - سبز لرن",
    description:"پنل کاربری - سبز لرن",
  },
};
async function page() {
  const user = await getUser();
  if (user === null) return redirect("/");
  return (
    <main className='md:bg-white md:dark:bg-gray-800 '><UserPanel/></main>
  )
}

export default page