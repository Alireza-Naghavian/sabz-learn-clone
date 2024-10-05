import UserPanel from '@/components/layouts/user-panel/UserPanel'
import { getUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await getUser();
  if (user === null) return redirect("/");
  return (
    <main className='md:bg-white md:dark:bg-gray-800 '><UserPanel/></main>
  )
}

export default page