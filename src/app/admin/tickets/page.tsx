import Tickets from '@/components/layouts/admin/tickets/Tickets'
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'
export const dynamic = "force-dynamic";
async function page() {
  const user = await authUser();
  if (user === null || user.role !== "ADMIN") return redirect("/");
  return (
  <Tickets/>
  )
}

export default page