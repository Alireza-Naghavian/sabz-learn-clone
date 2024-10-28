import TicketForm from '@/components/layouts/user-panel/Tickets/TicketForm'
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await authUser();
  if(user ==null && user ==undefined) return redirect("/")
  return (
   <TicketForm/>
  )
}

export default page