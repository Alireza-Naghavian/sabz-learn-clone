import Breardcrumb from "@/components/ui/Breardcrumb/Breardcrumb";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { CourseDataTable } from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import {
  CourseSessionData,
  SessionBodyType
} from "@/types/services/sessions&Topics.t";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import ClientLayout from "../ClientLayout/ClientLayout";
import TitleHeader from "../course/TitleHeader";
import Q_box_form from "./Q_box_form";
import Q_box_list from "./Q_box_list";
import "./session.css";
import Side_Box from "./Side_Box";
import VideoSection from "./VideoSection";
export type SessionInfoType = {
  sessions: SessionBodyType[];
  session: CourseSessionData;
  course: CourseDataTable;
};
type SessionPageType = {
  menu: MenuBodyType[];
  sessionInfo: SessionInfoType;
};
function Session({ menu, sessionInfo }: SessionPageType) {
  const categoryData = sessionInfo?.session?.course?.categoryID;
  const categoryHref = categoryData?.link;
  const categoryTitle = categoryData?.title;
  const findSessionIndex = sessionInfo?.sessions?.findIndex((session) => {
    return session._id == sessionInfo.session._id;
  });
  return (
    <ClientLayout menu={menu}>
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
              target: `/courses/course/${sessionInfo?.session?.course?.shortName}`,
              title: sessionInfo?.session?.course.name,
            },
          ]}
        />
        {/* video section */}


        <VideoSection sessionData ={sessionInfo?.session } coursePoster={sessionInfo?.course?.cover}/>

        {/* session info & dropDown sessions */}
        <div className="grid grid-cols-12 gap-y-6 gap-x-5 lg:gap-x-7 mt-6 lg:mt-8 ">
          <div className="col-span-full order-last md:order-none md:col-span-7 xl:col-span-8">
            {/* info */}
            <div className="hidden md:block bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5">
              <TitleHeader
                className="bg-sky-500 "
                title="آموزش Next.js بصورت پروژه محور"
              />
              <div className="session__title_wrapper">
                <div className="session__title_number">
                  {findSessionIndex + 1}
                </div>
                <h4 className="font-DanaMedium sm:text-lg">
                  {sessionInfo?.session?.title}
                </h4>
              </div>
              {/* course CTA bnts */}
              <div className="flex gap-x-4 gap-3.5 flex-wrap">
                <a
                  href="#lesson-qaa"
                  className="w-full sm:w-36  bg-dark text-white box-center rounded-full"
                >
                  سوال دارم!
                </a>
                <PrimaryBtn
                  variant="fill"
                  size="lg"
                  type="button"
                  className="w-full sm:w-36"
                >
                  عمیق تر شو !
                </PrimaryBtn>
              </div>
            </div>
            {/* comments */}
            <div
              id="lesson-qaa"
              className="bg-white dark:bg-darker
             rounded-2xl p-4.5 sm:p-5 mt-6 lg:mt-8"
            >
              <TitleHeader
                className="bg-red-500 "
                title="پرسش و پاسخ"
                Icon={ChatBubbleOvalLeftEllipsisIcon}
                IconColor="text-red-500"
              />
              <CommentRule />
              <Q_box_form />
              <Q_box_list />
            </div>
          </div>
          <Side_Box
            courseSessions={sessionInfo?.course}
            sessionNumb = {sessionInfo?.sessions?.length}
          />
        </div>
      </div>
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
