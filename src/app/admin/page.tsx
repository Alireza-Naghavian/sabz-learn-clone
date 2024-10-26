import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
export const dynamic = "force-dynamic"
async function page() {
  const user = await authUser();
  if (user === null|| user.role !=="ADMIN") return redirect("/");
  return (
   <div></div>
  )
}

export default page