"use client";
import Button from "@/components/ui/button/Button";
import LogOutBtn from "@/components/ui/button/LogOutBtn";
import Overlay from "@/components/ui/Overlay/Overlay";
import SideBarItem from "@/components/ui/SideBarItem/SideBarItem";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import useDisclosure from "@/hooks/useDisclosure";
import { UserPanelOpType } from "@/types/consts.t";
import { userPanelOptions } from "@/utils/constants";
import {
  PowerIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

function UserDataDropDown() {
  const [isDropOpen,{close,toggle}]= useDisclosure();
  return (
 <>
 <Overlay  onClose={()=>close()} openCondition={isDropOpen} />
    <div className="relative group">
      {/* <!-- User Picture --> */}
      <Button size="xl" type="button"  className={isDropOpen? "!relative !z-50":""}  onClick={()=>toggle()}>
        <UserIcon className={` w-6 h-6`}  />
      </Button>

      {/* <!-- When Click Box Showing --> */}
      <div className="absolute left-0 top-full pt-4 transition-all duration-300 z-50 ">
        <div
          className={isDropOpen ? ` w-[278px] bg-white dark:bg-darker border
         border-neutral-100 dark:border-0 p-5 pb-3.5 rounded-xl` : "hidden"}
        >
          {/* <!-- User Info --> */}
          <div
            className="flex items-center border-b border-b-neutral-200
           dark:border-b-white/5 pb-5 mb-2"
          >
            <Link href={"/my-account"} className="shrink-0 rounded-full">
              <ResponsiveImage
                alt="user-sample"
                src={"/images/user_sample.png"}
                loading="lazy"
                sizes="w-14 h-14"
                className="w-14 h-14  inline-block"
                imageStyles="object-cover rounded-full"
              />
            </Link>

            <div className="mr-3.5 flex flex-col gap-y-3 overflow-hidden">
              <span className="font-DanaBold inline-block truncate">
                علیرضا نقویان
              </span>
              <span className="text-sm font-DanaMedium text-baseColor inline-block">
                موجودی: 0&nbsp;<span className="slms-price_symbol">تومان</span>
              </span>
            </div>
          </div>
          {/* <!-- Dashboard Links --> */}
          {userPanelOptions.map((item: UserPanelOpType,index:number) => {
            return (
              <SideBarItem
              key={index}
                variant={item.variant}
                Icon={() => <item.Icon />}
                title={item.title}
                target={item.target}
              />
            );
          })}

          {/* <!-- Logout Link --> */}
          <div
            className="mt-2 pt-2 border-t border-t-neutral-200
           dark:border-t-white/5">
            <LogOutBtn
              type="button"
              variant="hoverMode"
              Icon={() => <PowerIcon className="w-6 h-6" />}
            />
          </div>
        </div>
      </div>
    </div>
 </>
  );
}

export default UserDataDropDown;
