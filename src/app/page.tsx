import HomePage from "@/components/layouts/home/HomePage";
import { getUser } from "@/utils/auth/auth";
export default async function Home() {
 const user = await getUser();
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden min-h-screen">

      <HomePage  userData={user}  />
    </main>
  );
}
