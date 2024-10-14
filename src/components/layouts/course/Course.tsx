import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Tail_Info from "@/components/ui/tail-info/Tail_Info";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { CourseDataTable } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { StarIcon } from "@heroicons/react/16/solid";
import { UserGroupIcon } from "@heroicons/react/20/solid";
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
import RelateCourse from "./RelateCourse";
import StoreProvider from "@/context/StoreProvider";
import { formatTime } from "@/utils/videoData";

function Course({
  menu,
  courseData,
  relateCourses,
}: {
  menu: MenuBodyType[];
  courseData: CourseDataTable;
  relateCourses: CourseDataTable[];
}) {
  const totalSessions = courseData?.topics?.reduce((total, topic) => {
    return total + topic?.sessions?.length;
  }, 0);
  const totalSessionTime = courseData.topics?.map((topic)=>{
    return topic.sessions.reduce((acc:any,curr:any)=>{
    const sessionTimes = curr.time.split(":")
    const seconds = Number(sessionTimes[1])
    const minutes = Number(sessionTimes[0]) *60
    const totalSeconds = seconds + minutes
      return acc +totalSeconds
    },0)
  })
    const formatSessionTime = formatTime(totalSessionTime &&totalSessionTime[0])
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
        <CourseHeader courseData={courseData} />
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
                subTitle={`${formatSessionTime} دقیقه`}
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
              shortName= {courseData.shortName}
              courseTopicData={courseData.topics as []}
              isUserRegister={courseData.isUserRegisteredToThisCourse!}
            />
            <RelateCourse relateCourses={relateCourses} />
            <StoreProvider>

            <CommentBox courseId={courseData._id!} courseShortName ={courseData.shortName} />
            </StoreProvider>
          </div>
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-darker rounded-2xl p-4.5  sm:p-5">
              <div className="flex gap-x-4">
                <Tail_Info
                  variant="sideInfo"
                  Icon={UserGroupIcon}
                  subTitle="دانشجو"
                  title={courseData.registers?.toString()!}
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
                  <span>{completionPercentage}%</span>
                </div>
                <div className="w-full bg-dark h-[.625rem] rounded-4xl overflow-hidden">
                  <div
                    style={{ width: `${completionPercentage}%` }}
                    className="bg-baseColor h-full rounded-4xl"
                  ></div>
                </div>
                {/* <progress value={completionPercentage} max={100} className="bg-baseColor  h-[.625rem] py-[5px] w-full rounded-4xl"></progress> */}
              </div>
              <div className="bg-white dark:bg-darker rounded-2xl pt-6 px-4.5 pb-4.5 md:py-6 md:px-5 text-center">
                <ResponsiveImage
                  src={"/images/user_sample.png"}
                  alt="teacher"
                  sizes=""
                  className="w-24 h-24 box-center mx-auto"
                  imageStyles="!relative !block mb-4 mx-auto !object-cover rounded-full"
                />
                <span className="font-DanaBold text-lg mb-2">
                  {courseData.creator.username}| مدرس دوره
                </span>
                <p className="mt-6"></p>
                <PrimaryBtn
                  className="px-6 mx-auto "
                  size="xxl"
                  variant="outline"
                  type="button"
                >
                  مشاهده پروفایل من
                </PrimaryBtn>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </ClientLayout>
  );
}

export default Course;
