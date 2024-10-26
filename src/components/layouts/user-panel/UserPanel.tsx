"use client";
import TextLoader from "@/components/ui/loader/TextLoader";
import Tail_stat_info from "@/components/ui/tail-info/Tail_stat_info";
import { useUserDataQuery } from "@/services/users/userApiSlice";
import { CourseBodyType } from "@/types/services/course&category.t";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import ContentList, { ContentItem } from "./ContentList";
import LastSeen from "./LastSeen";
import { useUserTicketsQuery } from "@/services/tickets&depts/ticketApiSlice";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TailSkelton from "@/components/ui/TailSkelton/TailSkelton";

function UserPanel() {
  const { data, isLoading } = useUserDataQuery();
  const { data: userTickets, isLoading: isTicketsLoading } =
    useUserTicketsQuery();
  const userCourses = data?.userCourse.filter((courses) => {
    return courses.course;
  });
  const userCourseArr = userCourses?.flatMap((course) => course.course);
  const userPaidCoursesArr = userCourseArr
    ?.filter((paidCourse) => paidCourse.isFree === false)
    .reduce((acc, curr) => {
      return (acc = curr.price);
    }, 0);

  return (
    <>
      {isLoading && isTicketsLoading ? (
        <TailSkelton count={4} />
      ) : (
        <div
          className="flex dark:bg-darker
   bg-gray-300/65  flex-wrap gap-x-3
    gap-y-4 md:gap-x-10 "
        >
          <Tail_stat_info
            supTitle="مجموع پرداخت ها"
            title={`${userPaidCoursesArr?.toLocaleString("fa-IR")} تومان`}
            Icon={CreditCardIcon}
            className="dark:bg-yellow-400 bg-amber-400"
          />
          <Tail_stat_info
            supTitle="دوره ها من"
            title={`${data?.userCourse.length}دوره`}
            Icon={RocketLaunchIcon}
            className="dark:bg-secondary bg-sky-500"
          />
          <Tail_stat_info
            supTitle="مجموع تیکت ها"
            title={`${userTickets?.length} تیکت`}
            Icon={TicketIcon}
            className="dark:bg-rose-500 bg-pink-500"
          />
          <Tail_stat_info
            supTitle="موجودی حساب"
            title="0 تومان"
            Icon={CurrencyDollarIcon}
            className="bg-baseColor"
          />
        </div>
      )}
      {/* grid content */}
      {isLoading || isTicketsLoading ? (
        <TextLoader loadingCondition={isLoading || isTicketsLoading} />
      ) : (
        <div
          className=" grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-1 xl:grid-cols-2 gap-7 dark:bg-darker
     bg-gray-300/65  pt-10"
        >
          <div>
            <LastSeen userCourse={userCourseArr as CourseBodyType[]} />
          </div>
          <div className="space-y-7">
            <ContentList title="تیکت های اخیر" link="/my-account/tickets">
              {userTickets?.length === 0 ? (
                <EmptyResult
                  className="py-2"
                  title={"هیچ تیکتی توسط شما ایجاد نشده است"}
                />
              ) : (
                userTickets?.map((ticket, index) => {
                  return (
                    <ContentItem
                      date={new Date(ticket.createdAt)}
                      key={index}
                      isAnswer={ticket.isAnswer}
                      isOpen={ticket.isOpen}
                      isPending={ticket.isPending}
                      target={`/my-account/tickets/${ticket._id}`}
                      title={ticket.title}
                    />
                  );
                })
              )}
            </ContentList>
            <ContentList title="پرسش های اخیر">
              {
              data?.userQuestions.length === 0 ? (
                <EmptyResult
                  className="py-2 h-[220px]"
                  title={"هیچ پرسشی توسط شما ایجاد نشده است"}
                />
              ) 
              
              :
              data?.userQuestions.slice(0, 4).map((question, index) => {
                return (
                  <ContentItem
                    date={new Date(question.date)}
                    key={index}
                    status=""
                    target={`/courses/course/session/${question.course.shortName}/${question.session}`}
                    title={question.body}
                  />
                );
              })}
            </ContentList>
          </div>
        </div>
      )}
    </>
  );
}

export default UserPanel;
