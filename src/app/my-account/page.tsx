import UserPanel from '@/components/layouts/user-panel/UserPanel';
import { authUser } from '@/utils/auth/auth';
import { Metadata } from 'next';
export const dynamic = "force-dynamic"
export const metadata: Metadata = {
  applicationName: "سبز لرن",
  title: " پنل کاربری - سبز لرن",
  description:"پنل کاربری - سبز لرن",
  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: " پنل کاربری - سبز لرن",
    description:"پنل کاربری - سبز لرن",
  },
};
async function page() {
  const user = await authUser();
  console.log(user);
  // if (user === null|| user === undefined) return redirect("/");
  return (
    <main className='md:bg-white md:dark:bg-gray-800 '><UserPanel/></main>
  )
}

export default page