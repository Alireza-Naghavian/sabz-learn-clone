import UserPanel from '@/components/layouts/user-panel/UserPanel';
import { Metadata } from 'next';
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
 function page() {
  return (
    <main className='md:bg-white md:dark:bg-gray-800 '><UserPanel/></main>
  )
}

export default page