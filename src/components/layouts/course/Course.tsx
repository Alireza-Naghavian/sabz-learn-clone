import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import { BriefcaseIcon, CalendarDaysIcon, ClockIcon, InformationCircleIcon, UsersIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import ClientLayout from "../ClientLayout/ClientLayout";
import CourseDesc from "./CourseDesc";
import CourseHeader from "./CourseHeader";

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
            </div>
        </section>
      </div>
    </ClientLayout>
  );
}

export default Course;
