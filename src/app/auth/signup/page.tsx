import SignUp from '@/components/layouts/auth/signup/SignUp';
import { authUser } from '@/utils/auth/auth';
import { redirect } from 'next/navigation';
export const dynamic = "force-dynamic"
async function page() {
  const user = await authUser();
  if(user !==null && user !==undefined) return redirect("/")
  return (
    <div>
        <SignUp/>
    </div>
  )
}

export default page