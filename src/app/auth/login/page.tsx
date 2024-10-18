import Login from "@/components/layouts/auth/login/Login";
import { getUser } from "@/utils/auth/auth";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic"
async function page() {
  const user = await getUser();
  if (user !== null) return redirect("/");
  return (
    <div>
      <Login />
    </div>
  );
}

export default page;
