"use client";
import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import { CompaignTableData } from "@/types/services/compaign.t";
import { CourseDataTable } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { timeReducer } from "@/utils/videoData";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  ClockIcon,
  InformationCircleIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import ClientLayout from "../ClientLayout/ClientLayout";
import CommentBox from "./CommentBox";
import CourseDesc from "./CourseDesc";
import CourseHeader from "./CourseHeader";
import CourseSessions from "./CourseSessions";
import CourseSideBar from "./CourseSideBar";
import RelateCourse from "./RelateCourse";

function Course({
  menu,
  courseData,
  relateCourses,
  shortName,
  compaignData
}: {
  menu: MenuBodyType[];
  courseData: CourseDataTable;
  relateCourses: CourseDataTable[];
  shortName: string;
  compaignData:CompaignTableData[]
}) {
  const totalSessions = courseData?.topics?.reduce((total, topic) => {
    return total + topic?.sessions?.length;
  }, 0);
  const totalTime = courseData.topics?.map((topic)=>{
      const totalSessionTime= topic.sessions.map((session)=>{
        return {time:session.time}
      })
      return totalSessionTime
  })
  const TimeReducerFN = timeReducer(totalTime?.flat() as [])



  const completedSessions = 50;
  const completionPercentage =
    totalSessions! > 0 ? (totalSessions! / completedSessions) * 100 : 0;
  return (
    <ClientLayout compaignData={compaignData} menu={menu}>
      <div className=" mt-8 sm:mt-10 container">
        {/* breadcrumb */}
        <Breardcrumb
          nestedStep={2}
          firstTarget="/"
          nestedLinks={[
            {
              target: `/courses/category${courseData?.categoryID?.link}`,
              title: courseData?.categoryID?.title,
            },
            {
              title: courseData?.name,
              target: `/courses/course/${courseData?.shortName}`,
            },
          ]}
        />
        <CourseHeader compaignData={compaignData} shortName={shortName} courseData={courseData} />
        <section className="grid grid-cols-12 gap-6 sm:gap-7 mt-7 lg:mt-20">
          <div className="col-span-12 lg:col-span-8">
            {/* course small  info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <Tail_Info
                subTitle={
                  courseData.status === "inProgress"
                    ? "درحال برگزاری"
                    : "تکمیل شده"
                }
                title="وضعیت دوره"
                variant="mainInfo"
                Icon={InformationCircleIcon}
              />
              <Tail_Info
                subTitle={`${
                  totalTime?.length == 0 ? "0" : TimeReducerFN
                } دقیقه`}
                title="مدت زمان دوره"
                variant="mainInfo"
                Icon={ClockIcon}
              />
              <Tail_Info
                subTitle={courseData.preReq}
                title="پیش نیاز"
                variant="mainInfo"
                Icon={BriefcaseIcon}
              />
              <Tail_Info
                subTitle="آنلاین"
                title="روش پشتیبانی"
                variant="mainInfo"
                Icon={UsersIcon}
              />
              <Tail_Info
                subTitle={new Date(courseData.updatedAt!).toLocaleDateString(
                  "fa-IR"
                )}
                title="آخرین بروزرسانی"
                variant="mainInfo"
                Icon={CalendarDaysIcon}
              />
              <Tail_Info
                subTitle="به صورت آنلاین"
                title="نوع مشاهده"
                variant="mainInfo"
                Icon={VideoCameraIcon}
              />
            </div>
            {/* course description */}
            <CourseDesc courseDesc={courseData.longDesc} />
            <CourseSessions
              isCourseFree={courseData.isFree}
              shortName={courseData.shortName}
              courseTopicData={courseData.topics as []}
              isUserRegister={courseData.isUserRegisteredToThisCourse as boolean}
            />
            {relateCourses.length !==0 &&
            <RelateCourse relateCourses={relateCourses} />
            }

            <CommentBox
              courseId={courseData._id as string}
              courseShortName={courseData.shortName}
            />
          </div>

          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <CourseSideBar
              completionPercentage={completionPercentage}
              shortName={shortName}
            />
          </aside>
        </section>
      </div>
    </ClientLayout>
  );
}

export default Course;
