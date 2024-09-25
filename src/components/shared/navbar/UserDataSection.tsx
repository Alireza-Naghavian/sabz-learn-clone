"use client";
import SecondaryBtn from "@/components/ui/button/SecondaryBtn";
import { useGetMeQuery } from "@/services/auth/useApiSlice";
import { UserIcon } from "@heroicons/react/24/outline";
import UserDataDropDown from "./UserDataDropDown";
import Loader from "@/components/ui/loader/Loader";

function UserDataSection() {
  const { data: userData, isLoading } = useGetMeQuery();
  if (isLoading)
    return (
      <Loader
        height="h-[52px] "
        className={`px-[1rem] w-[52px] bg-gray-100
           dark:bg-dark rounded-full`}
        loadingCondition={isLoading}
      />
    );
  return (
    <div>
      {userData ? (
        <UserDataDropDown isLoading={isLoading} userData={userData.user} />
      ) : (
        <SecondaryBtn
          className="hidden lg:flex items-center px-2 rounded-full"
          target="/auth/login"
          title="ورود|عضویت"
          Icon={() => <UserIcon className="h-6 w-6" />}
        />
      )}
    </div>
  );
}

export default UserDataSection;
