"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import TextLoader from "@/components/ui/loader/TextLoader";
import { useGetCourseQuery } from "@/services/course&Categories/courseApiSlice";
import { BookOpenIcon, UserIcon } from "@heroicons/react/24/solid";
import PurchaseCourse from "./PurchaseCourse";
import { CompaignTableData } from "@/types/services/compaign.t";

function BuyOperation({ shortName,compaignData }: { shortName: string,  compaignData:CompaignTableData[] }) {
  const { data: courseData, isLoading } = useGetCourseQuery({ shortName });
  if (isLoading) return <TextLoader loadingCondition={isLoading} />;
  return (
    <div className="space-y-4 lg:space-y-8 mt-4  md:mt-16">
      {courseData?.isUserRegisteredToThisCourse ? (
        <AcessBox />
      ) : (
        <PurchaseCourse
        compaignData={compaignData}
          shortName={shortName}
          _id={courseData?._id as string}
          isFree={courseData?.isFree as boolean}
          price={courseData?.price as number}
          discount={courseData?.discount as number}
        />
      )}
    </div>
  );
}
const AcessBox = () => {
  return (
    <div
      className="flex justify-center items-center lg:justify-between
       flex-wrap-reverse gap-y-4 gap-x-8 lg:gap-x-6 w-full"
    >
      <div className="flex items-end gap-x-1">
        <UserIcon className="size-8" />
        <p className="font-DanaMedium text-lg">شمادانشجوی دوره هستید</p>
      </div>
      <PrimaryBtn
        size="xxl"
        variant="fill"
        type="button"
        className=" text-lg font-DanaMedium 
          flex items-center px-6  lg:w-56"
      >
        <BookOpenIcon className="size-8" />
        <a href="#sessions" className="mt-1">
          مشاهده دوره
        </a>
      </PrimaryBtn>
    </div>
  );
};
export default BuyOperation;
