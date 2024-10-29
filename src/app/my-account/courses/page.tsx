import MyCourses from '@/components/layouts/user-panel/courses/MyCourses'
import StoreProvider from '@/context/StoreProvider'
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'
export const dynamic = "force-dynamic"
async function page() {
  const user = await authUser();
  if(user ==null && user ==undefined) return redirect("/")
  return (
    <StoreProvider>
  <MyCourses/>
    </StoreProvider>
  )
}

export default page