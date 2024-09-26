"use client";
import SecondaryBtn from "@/components/ui/button/SecondaryBtn";
import { UserIcon } from "@heroicons/react/24/outline";
import UserDataDropDown from "./UserDataDropDown";
import Loader from "@/components/ui/loader/Loader";
import { useGetMeQuery } from "@/services/auth/authApiSlice";

function UserDataSection() {
  const { data: userData, isLoading, isError } = useGetMeQuery();
  if (isLoading)
    return (
      <Loader
        height="h-[52px] "
        className={`px-[1rem] w-[52px] bg-gray-100
           dark:bg-dark rounded-full`}
        loadingCondition={isLoading}
      />
    );
  if (isError || !userData) {
    return (
      <SecondaryBtn
        className="hidden lg:flex items-center px-2 rounded-full"
        target="/auth/login"
        title="ورود|عضویت"
        Icon={() => <UserIcon className="h-6 w-6" />}
      />
    );
  }
  return <UserDataDropDown userData={userData.user} isLoading={isLoading} />;
}

export default UserDataSection;
