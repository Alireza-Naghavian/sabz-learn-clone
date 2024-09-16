import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import { BriefcaseIcon, CalendarDaysIcon, ClockIcon, InformationCircleIcon, UsersIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import ClientLayout from "../ClientLayout/ClientLayout";
import CourseDesc from "./CourseDesc";
import CourseHeader from "./CourseHeader";
import CourseSessions from "./CourseSessions";
import RelateCourse from "./RelateCourse";
import CommentBox from "./CommentBox";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/16/solid";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";

function Course() {
  return (
    <ClientLayout>
      <div className=" mt-8 sm:mt-10 container">
        {/* breadcrumb */}
        <Breardcrumb
          nestedStep={3}
          firstTarget="/"
          nestedLinks={[
            {
              target: `/categories?categoryId`,
              title: "فرانت اند",
            },
            {
              title: `دوره متخصص next js`,
              target: `/categories/`,
            },
            {
              title: `دوره متخصص next js`,
              target: `/categories/`,
            },
          ]}
        />
        <CourseHeader/>
        <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
            <div className="col-span-12 lg:col-span-8">
                {/* course small  info */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <Tail_Info
                    subTitle="تکمیل شده"
                    title="وضعیت دوره"
                    variant="mainInfo"
                    Icon={InformationCircleIcon }
                    />
                    <Tail_Info
                    subTitle="57 ساعت"
                    title="مدت زمان دوره"
                    variant="mainInfo"
                    Icon={ClockIcon }
                    />
                    <Tail_Info
                    subTitle="ReactJS"
                    title="پیش نیاز"
                    variant="mainInfo"
                    Icon={BriefcaseIcon }
                    />
                    <Tail_Info
                    subTitle="آنلاین"
                    title="روش پشتیبانی"
                    variant="mainInfo"
                    Icon={UsersIcon }
                    />
                    <Tail_Info
                    subTitle="1403/06/22"
                    title="آخرین بروزرسانی"
                    variant="mainInfo"
                    Icon={CalendarDaysIcon }
                    />
                    <Tail_Info
                    subTitle="به صورت آنلاین"
                    title="نوع مشاهده"
                    variant="mainInfo"
                    Icon={VideoCameraIcon }
                    />
                </div>
                {/* course description */}
             <CourseDesc/>
             <CourseSessions/>
             <RelateCourse/>
              <CommentBox/>
            </div>
            <aside className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-white dark:bg-darker rounded-2xl p-4.5  sm:p-5">
                <div className="flex gap-x-4">
                  <Tail_Info
                  variant="sideInfo"
                  Icon={UserGroupIcon}
                  subTitle="دانشجو"
                  title="۱۶۲۳"
                  
                  />
                  <Tail_Info
                  variant="sideInfo"
                  Icon={StarIcon}
                IconColor="text-amber-500"
                  subTitle="رضایت"
                  title="۵.۰"

                  />
                </div>
                <div className="mt-3.5 sm:mt-5">
                  <div className="flex items-center justify-between font-DanaBold text-sm sm:text-base mb-3">
                    <span>درصد تکمیل دوره</span>
                    <span>100%</span>

                  </div>
                  <progress value={100} max={100} className="bg-baseColor  h-[.625rem] py-[5px] w-full rounded-4xl"></progress>
                </div>
                <div className="bg-white dark:bg-darker rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
                  <ResponsiveImage
                  src={"/images/user_sample.png"}
                  alt="teacher"
                  sizes=""
                  className="w-24 h-24 box-center mx-auto"
                  imageStyles="!relative !block mb-4 mx-auto !object-cover rounded-full"
                  />
                  <span className="font-DanaBold text-lg mb-2">محمد امین سعیدی راد| مدرس دوره</span>
                  <p className="mt-6"></p>
                  <PrimaryBtn className="px-6 mx-auto " size="xxl" variant="outline" type="button">مشاهده پروفایل من</PrimaryBtn>
                </div>
              </div>
            </aside>
        </section>
      </div>
    </ClientLayout>
  );
}

export default Course;
