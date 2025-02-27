"use client";
import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import TextLoader from "@/components/ui/loader/TextLoader";
import { useGetCourseQuery } from "@/services/course&Categories/courseApiSlice";
import { useGetSessionInfoQuery } from "@/services/sessions&topics/sesisonSlice";
import { CompaignTableData } from "@/types/services/compaign.t";
import { CourseDataTable } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { CourseSessionData } from "@/types/services/sessions&Topics.t";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import ClientLayout from "../ClientLayout/ClientLayout";
import TitleHeader from "../course/TitleHeader";
import Q_box_form from "./Q_box_form";
import Q_box_list from "./Q_box_list";
import "./session.css";
import Session_Skelton from "./Session_Skelton";
import Side_Box from "./Side_Box";

import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useAppDispatch } from "@/hooks/useRedux";
import {ItemsType,useGetRelateBlogsMutation,} from "@/services/deepLearn/RelatedData";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditModal from "../admin/modals/EditModal";
import { addBookmark } from "@/services/slices/bookmarkSlice";
const SSRVideoSection = dynamic(() => import("./VideoSection"), { ssr: false });
type SessionPageType = {
  menu: MenuBodyType[];
  sessionID: string;
  compaignData: CompaignTableData[];
};
function Session({ menu, sessionID, compaignData }: SessionPageType) {
  const [relateCourses, setRelatedCourses] = useState<ItemsType[]>([]);
  const [relateBlogs, setRelatedBlogs] = useState<ItemsType[]>([]);
  const [isRelatedOpen, { open, close }] = useDisclosure();
  const dispatch = useAppDispatch();
  const { showAlert } = useAlert();
  const { data, isLoading } = useGetSessionInfoQuery({ sessionID });

  // add bookmark in localstorage
  useEffect(() => {
    if (!isLoading && data?.session !== undefined) {
      dispatch(addBookmark(data.session));
    }
  }, [data?.session, isLoading, dispatch]);
  // add bookmark in localstorage

  const { data: courseData } = useGetCourseQuery({
    shortName: data?.course?.shortName as string,
  });
  const categoryData = data?.session?.course?.categoryID;
  const categoryHref = categoryData?.link;
  const categoryTitle = categoryData?.title;
  const findSessionIndex = data?.sessions?.findIndex((session) => {
    return session._id == data?.session?._id;
  });
  const [searchBlog, { isLoading: isSearching }] = useGetRelateBlogsMutation();
  const SearchBlogHandler = async () => {
    try {
      const primaryQuery = `مقاله OR آموزش OR بررسی کامل درباره "${data?.course.shortName}" 
      (site:virgool.io OR site:zoomit.ir OR site:sabzlearn.ir 
      OR site:digikala.com OR site:blog.faradars.org OR site:tabnak.ir
       OR site:hamshahrionline.ir OR site:aparat.com)`;
      const foreignQuery = `introduction OR tutorial OR guide OR comprehensive review on
        "${data?.course.shortName}" (site:medium.com OR site:dev.to OR site:stackoverflow.com 
        OR site:github.com OR site:docs.microsoft.com OR site:techcrunch.com OR site:wired.com
         OR site:theverge.com OR site:cnet.com)`;
      const fallbackQuery = `مقاله یا آموزش درباره "${data?.course.name}" (site:virgool.io 
         OR site:zoomit.ir OR site:sabzlearn.ir OR site:digikala.com OR site:blog.faradars.org) 
         OR راهنمای جامع OR نکات کاربردی OR بررسی کامل`;
      const faResult = await searchBlog({
        query: primaryQuery,
      }).unwrap();
      const enResult = await searchBlog({
        query: foreignQuery,
      }).unwrap();
      const relateCourses = faResult?.items
        ?.filter((course) => {
          return course?.link?.includes("/course");
        })
        .splice(1, 4);
      const relateBlogs = [...faResult.items, ...enResult.items]
        ?.filter((blogs) => {
          return blogs?.title
            ?.toLowerCase()
            ?.includes(data?.course.shortName as string);
        })
        .splice(0, 6);
      const fallbacksearch = await searchBlog({
        query: fallbackQuery,
      }).unwrap();
      const fallbackResult = fallbacksearch.items?.filter((blogs) => {
        return blogs?.title
          ?.toLowerCase()
          ?.includes(data?.course.shortName as string);
      });
      if (relateCourses.length > 0) {
        setRelatedCourses(relateCourses as []);
      }
      if (!relateBlogs || relateBlogs.length > 0) {
        setRelatedBlogs(relateBlogs as []);
      } else {
        setRelatedBlogs(fallbackResult);
      }
    } catch (error) {
      showAlert("error", "نتیجه ای برای جستجو یافت نشد");
    }
  };
  return (
    <ClientLayout compaignData={compaignData} menu={menu}>
      <div className="container  mt-8 sm:mt-10">
        <Breardcrumb
          nestedStep={3}
          firstTarget="/"
          nestedLinks={[
            { target: "/courses", title: "دوره ها" },
            {
              target: `/courses/category${categoryHref}`,
              title: categoryTitle,
            },
            {
              target: `/courses/course/${data?.session?.course?.shortName}`,
              title: data?.session?.course?.name,
            },
          ]}
        />
        {/* video section */}
        <div className="">
          {isLoading ? (
            <Session_Skelton count={1} />
          ) : (
            <SSRVideoSection
              sessionData={data?.session as CourseSessionData}
              coursePoster={data?.course?.cover as string}
            />
          )}

          {/* session info & dropDown sessions */}
          {isLoading ? (
            <TextLoader loadingCondition={isLoading} />
          ) : (
            <div className="grid grid-cols-12 gap-y-6 gap-x-5 lg:gap-x-7 mt-6 lg:mt-8 ">
              <div className="col-span-full order-last md:order-none md:col-span-7 xl:col-span-8">
                {/* info */}
                <div className=" order-1 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5">
                  <TitleHeader
                    className="bg-sky-500 "
                    title={data?.session.title as string}
                  />
                  <div className="session__title_wrapper">
                    <div className="session__title_number">
                      {(findSessionIndex as number) + 1}
                    </div>
                    <h4 className="font-DanaMedium sm:text-lg">
                      {data?.session?.title as string}
                    </h4>
                  </div>
                  {/* course CTA bnts */}
                  <div className="flex gap-x-4 gap-3.5 flex-wrap">
                    <a
                      href="#lesson-qaa"
                      className="w-full sm:w-36 py-2  bg-dark text-white box-center rounded-full"
                    >
                      سوال دارم!
                    </a>
                    <PrimaryBtn
                      variant="fill"
                      size="lg"
                      type="button"
                      className="w-full sm:w-44 text-sm"
                      onClick={async () => {
                        await SearchBlogHandler().then(() => {
                          open();
                        });
                      }}
                    >
                      {isSearching ? (
                        <Loader loadingCondition={isSearching} />
                      ) : (
                        " مقالات و دوره های مرتبط"
                      )}
                    </PrimaryBtn>
                  </div>
                </div>
                {/* comments */}
                <div
                  id="lesson-qaa"
                  className="bg-white dark:bg-darker
                  rounded-2xl p-8  mt-6 lg:mt-8"
                >
                  <TitleHeader
                    className="bg-red-500 "
                    title="پرسش و پاسخ"
                    Icon={ChatBubbleOvalLeftEllipsisIcon}
                    IconColor="text-red-500"
                  />
                  <CommentRule />
                  <Q_box_form
                    sessionID={sessionID}
                    shortName={data?.course.shortName as string}
                  />
                  <Q_box_list sessionID={sessionID} />
                </div>
              </div>
              <Side_Box
                courseSessions={data?.course as CourseDataTable}
                sessionNumb={data?.sessions?.length as number}
                isUserRegistered={
                  courseData?.isUserRegisteredToThisCourse as boolean
                }
              />
            </div>
          )}
        </div>
      </div>
      <EditModal
        isOpen={isRelatedOpen}
        modalTitle="لیست دوره های و مقالات مشابه"
        setIsOpen={() => close()}
        className=" py-2 overflow-x-hidden  !h-[470px] 
           md:!h-[540px]"
      >
        <div className="w-full h-full flex flex-col items-start m-4">
          <div className="flex flex-col gap-y-1 ">
            <p className="text-secondary font-DanaMedium text-lg">
              مقالات مرتبط :
            </p>
            <ul className="space-y-3 flex flex-col w-[95%] flex-wrap ">
              {relateBlogs.length === 0
                ? `مقاله مرتبط با ${data?.course?.name} یافت نشد.`
                : relateBlogs.map((blog, index) => {
                    return (
                      <li
                        key={Number(index * Math.random())}
                        className="flex flex-col gap-y-1"
                      >
                        <span className=" w-fit p-[5px] text-sm rounded-xl text-baseColor ">
                          {blog.displayLink}
                        </span>
                        <Link
                          className="line-clamp-2 transition-colors duration-300 hover:text-secondary"
                          target="_blank"
                          href={blog.link}
                        >
                          {blog.title}
                        </Link>
                      </li>
                    );
                  })}
            </ul>
          </div>
          <div className="dark:bg-gray-500 w-[95%]  h-[4px] p-[1px] my-4 bg-gray-900"></div>
          <div className="flex flex-col gap-y-1  ">
            <p className="bg-baseColor w-fit px-4 py-1 rounded-lg font-DanaMedium text-base">
              دوره های مرتبط:
            </p>
            <ul className="space-y-3 w-[95%] ">
              {relateCourses.length == 0 ? (
                <span className="!mt-2">
                  دوره مرتبط با {data?.course.name} یافت نشد
                </span>
              ) : (
                relateCourses.map((course, index) => {
                  return (
                    <li
                      key={Number(index * Math.random())}
                      className="flex flex-col gap-y-1 last:pb-4 px-1"
                    >
                      <span className=" w-fit p-[5px] text-sm rounded-xl text-baseColor mt-2 ">
                        {course.displayLink}
                      </span>
                      <Link
                        className="line-clamp-2 transition-colors duration-300 hover:text-secondary"
                        target="_blank"
                        href={course.link}
                      >
                        {course.title}
                      </Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </EditModal>
    </ClientLayout>
  );
}

const CommentRule = () => {
  return (
    <div className="mb-8 pb-8 border-b border-b-neutral-200 dark:border-b-white/10">
      <h5 className="font-DanaBold mb-3">
        چگونه سوال خود را مطرح کنم تا به بهترین پاسخ ممکن برسم؟
      </h5>
      <div className="dark:text-gray-400 leading-7">
        برای اینکه مهارت حل مسئله و دیباگ کردن‌تون رو بالا ببرید، قبل از اینکه
        سوالی بپرسید، با دقت و تمرکز سعی کنید مشکل رو خودتون حل کنید. اگه به
        جواب نرسیدید، می‌تونید از گوگل کمک بگیرید. اگه با خطایی مواجه شدید یا
        نیاز به نمونه‌ای داشتید، با استفاده از کلمات کلیدی مختلف توی گوگل سرچ
        کنید و از سایت‌هایی مثل Stack Overflow کمک بگیرید. (جواب 99٪ سوالات با
        این روش زیر 5 دقیقه پیدا میشه)
        <br />
        از پرسیدن سوالات کلی مثل «من مثل شما انجام دادم ولی کار نکرد» یا «کد من
        مشکل داره و اجرا نمیشه» که جزئیات ندارن، خودداری کنید. وقتی سوال
        می‌پرسید، لطفاً اون رو با مستندات و به صورت شفاف و واضح بیان کنید تا
        قابل تحلیل و بررسی باشه. سعی کنید سوالاتتون مفهومی و دقیق باشه تا
        مکالمه‌ای که دارید خلاصه و مفید باشه. همچنین قبل از اینکه سوال ارسال
        کنید، یه بار خودتون اون رو بخونید و مطمئن بشید که سوالتون خوانا و واضحه.
      </div>
      <h5 className="font-DanaBold mt-6 mb-3">
        چه انتظاراتی از پشتیبانان باید داشته باشم؟
      </h5>
      <div className="dark:text-gray-400 leading-7">
        از مدرسین و پشتیبانان انتظارات منطقی و مرتبط با خدمات دریافتی خود داشته
        باشید. حل مشکلات خارج از مباحث و پروژه های دوره در حیطه وظایف
        پشتیبانان/مدرسین نیست. اگر نیاز به مشاوره دارید میتوانید از طریق تیکت ها
        به واحد مشاوره پیام دهید
      </div>
    </div>
  );
};

export default Session;
