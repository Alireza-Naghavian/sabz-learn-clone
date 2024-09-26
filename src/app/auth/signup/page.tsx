import SignUp from '@/components/layouts/auth/signup/SignUp'
import { getUser } from '@/utils/auth/auth'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await getUser();
  if(user !==null) return redirect("/")
  return (
    <div>
        <SignUp/>
    </div>
  )
}

export default page