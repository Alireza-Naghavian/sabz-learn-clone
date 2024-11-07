"use client"
import ColorShade from "@/components/ui/greenShade/GreenShade";
import TextLoader from "@/components/ui/loader/TextLoader";
import LogoLink from "@/components/ui/logo-link/LogoLink";
import StoreProvider from "@/context/StoreProvider";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { ChildrenProps } from "@/types/global.t";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function layout({ children }: ChildrenProps) {
  return (
    <StoreProvider>
  <LayoutAuthContent>
    {children}
  </LayoutAuthContent>
    </StoreProvider>
  );
}

const LayoutAuthContent = ({ children }: ChildrenProps)=>{
  const { data, isLoading } = useGetMeQuery();
  const path = usePathname();
  const router = useRouter();
  useEffect(()=>{
    if (path.startsWith("/auth") && data?.user !==undefined&&data?.user !==null ) {
      router.replace("/",{scroll:true})
  
    }
  },[data,isLoading,path,router])
  if (isLoading) return <TextLoader loadingCondition={isLoading} />;
return(
  <main className="box-center flex-col  relative px-4 py-6 min-h-screen overflow-x-hidden">
  <LogoLink className="flex items-center gap-x-3.5 mb-10" isIcon={true} />
  <div
    className="max-w-[330px] w-full pt-5 pb-6 px-6 text-center
 bg-white dark:bg-darker rounded-2xl"
  >
    {children}
  </div>
  <ColorShade className="bg-sky-500 top-[50%] left-40 " />
  <div className="max-w-[330px] w-full mx-auto text-center mt-7 sm:mt-8">
    <span>
      با عضویت در سایت، تمامی قوانین و شرایط استفاده از خدمات
      <Link href={"/"} className="text-baseColor">
        &nbsp; سبزلرن
      </Link>
      &nbsp; را پذیرفته اید.
    </span>
    <ColorShade className="bg-amber-400 top-[70%] -right-20 " />
  </div>
</main>
)
}

export default layout;
