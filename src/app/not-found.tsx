import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import ColorShade from "@/components/ui/greenShade/GreenShade";
import { NotFoundIcon } from "@/utils/Icons";
import Link from "next/link";

function NotFound() {
  return (
    <main className="flex  justify-center overflow-hidden flex-col w-full relative px-4 py-6  min-h-screen text-center">
      <div className="">
        <div className="  max-w-[696px] mr-auto ml-auto  ">
          <NotFoundIcon className="!relative" />
        </div>
      </div>
      <p className="font-DanaBold text-lg md:text-3xl my-5 md:my-10">
        متاسفانه صفحه مورد نظر شما پیدا نشد.
      </p>
      <Link
        href={"/"}
        className="w-full sm:!w-[250px] text-lg font-DanaBold mx-auto box-center rounded-full  bg-baseColor button-xl"
      >
        بازگشت به صفحه اصلی
      </Link>

      <ColorShade className="bg-sky-500 top-[50%] left-40 " />
      <ColorShade className="bg-amber-400 top-[70%] -right-20 " />
    </main>
  );
}

export default NotFound;
