import MenusTable from '@/components/layouts/admin/menus/list/MenusTable'
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
import React from 'react'
export const dynamic = "force-dynamic";
async function page() {
  const user = await authUser();
  if (user === null || user.role !== "ADMIN") return redirect("/");
  return (
<MenusTable/>
  )
}

export default page