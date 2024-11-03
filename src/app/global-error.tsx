"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import ColorShade from "@/components/ui/greenShade/GreenShade";
import Link from "next/link";
import React from "react";

function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="box-center h-screen w-full overflow-hidden relative text-center">
        <div className="flex items-center justify-center flex-col gap-y-3 bg-main_brown text-white  border-dashed">
          <h2 className="text-main_brown text-2xl font-DanaBold">
            مشکلی بوجود آمده است لطفا به صفحه اصلی باز گردید
          </h2>
          <Link
            className="bg-main_green_dark rounded-full  px-3 py-2 text-lg font-DanaMedium text-baseColor"
            href={"/"}
          >
            صفحه اصلی
          </Link>
          <span className="">{error.message}</span>
          <PrimaryBtn onClick={()=>reset()} type="button" size="xl" variant="outline">
            تلاش مجدد
            
          </PrimaryBtn>
        </div>

        <ColorShade className="bg-sky-500 top-[50%] left-40 " />
        <ColorShade className="bg-amber-400 top-[70%] -right-20 " />
      </body>
    </html>
  );
}

export default GlobalError;
