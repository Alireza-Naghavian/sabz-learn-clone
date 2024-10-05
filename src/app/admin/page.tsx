import { getUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await getUser();
  if (user === null) return redirect("/");
  return (
   <div></div>
  )
}

export default page