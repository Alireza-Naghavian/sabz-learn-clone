"use client";
import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import { CourseDataTable } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { formatTime } from "@/utils/videoData";
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
}: {
  menu: MenuBodyType[];
  courseData: CourseDataTable;
  relateCourses: CourseDataTable[];
  shortName: string;
}) {
  const totalSessions = courseData?.topics?.reduce((total, topic) => {
    return total + topic?.sessions?.length;
  }, 0);
  const totalSessionTime = courseData.topics?.map((topic) => {
    return topic.sessions.reduce((acc: number, curr: any) => {
      const sessionTimes = curr.time.split(":");
      const seconds = Number(sessionTimes[1]);
      const minutes = Number(sessionTimes[0]) * 60;
      const totalSeconds = seconds + minutes;
      return acc + totalSeconds;
    }, 0);
  });
  const formatSessionTime = formatTime(
    totalSessionTime! && totalSessionTime[0]
  );

  const completedSessions = 50;
  const completionPercentage =
    totalSessions! > 0 ? (totalSessions! / completedSessions) * 100 : 0;

  return (
    <ClientLayout menu={menu}>
      <div className=" mt-8 sm:mt-10 container">
        {/* breadcrumb */}
        <Breardcrumb
          nestedStep={2}
          firstTarget="/"
          nestedLinks={[
            {
              target: `/courses/category${courseData.categoryID.link}`,
              title: courseData.categoryID.title,
            },
            {
              title: courseData.name,
              target: `/courses/course/${courseData.shortName}`,
            },
          ]}
        />
        <CourseHeader shortName={shortName} courseData={courseData} />
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
                  totalSessionTime?.length == 0 ? "0" : formatSessionTime
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
              isUserRegister={courseData.isUserRegisteredToThisCourse!}
            />
            <RelateCourse relateCourses={relateCourses} />

            <CommentBox
              courseId={courseData._id!}
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
