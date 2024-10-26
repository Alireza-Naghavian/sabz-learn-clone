import AccountDetail from '@/components/layouts/user-panel/AccountDetail/AccountDetail'
import StoreProvider from '@/context/StoreProvider'
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await authUser();
  if(user ==null && user ==undefined) return redirect("/")
  return (
    <StoreProvider>

    <AccountDetail/>
    </StoreProvider>
  )
}

export default page