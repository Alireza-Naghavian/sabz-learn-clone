import BlogCard from "@/components/shared/BlogsCard/BlogCard";
import CourseCard from "@/components/shared/ProductCard/ProductCard";
import Product_Skelton from "@/components/shared/ProductCard/skelton/Product_Skelton";
import CourseSlider from "@/components/shared/slider/CourseSlider";
import ColorShade from "@/components/ui/greenShade/GreenShade";
import RoadMap from "@/components/ui/RoadMap/RoadMap";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Slogens from "@/components/ui/Slogens/Slogens";
import { ArticleTableData } from "@/types/services/articles.t";
import {
  CatBodytype,
  CourseBodyType
} from "@/types/services/course&category.t";
import { MenuBodyType } from "@/types/services/menu.t";
import { slogensOptions } from "@/utils/constants";
import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ClientLayout from "../ClientLayout/ClientLayout";
function HomePage({
  menu,
  latestCoursesUpdated,
  categories,
  mostPopularCourses,
  latestCourses,
  latestArticles,
  mostPopularFreeCourses,
}: {
  menu: MenuBodyType[];
  mostPopularCourses: CourseBodyType[];
  latestCoursesUpdated: CourseBodyType[];
  categories: CatBodytype[];
  latestCourses: CourseBodyType[];
  mostPopularFreeCourses: CourseBodyType[];
  latestArticles: ArticleTableData[];
}) {
  return (
    <ClientLayout menu={menu}>
      {/* hero header */}
      <section className="lg:mt-12 relative">
        <div className="container ">
          <ColorShade className="bg-baseColor -right-0 top-96" />
          <ColorShade className="bg-sky-500 -right-16" />
          <div
            className="box-center flex-col  lg:flex-row 
                       lg:!justify-between gap-y-10 text-center lg:text-right"
          >
            {/* right header side */}
            <div className="relative w-full mt-8 lg:mt-0 xs:w-auto !order-2 lg:!order-1">
              <h1 className=" font-[800] xs:text-[1.625rem]/[40px]  sm:text-[2.625rem]/[70px] 3xl:text-5xl/normal">
                آکادمی آموزش
                <br />
                برنامه نویسی سبزلرن
              </h1>
              <p className="sm:text-2xl font-danaMedium mt-5 sm:mt-9 lg:max-w-[440px] xl:max-w-[470px]">
                با آکادمی خصوصی سبزلرن،علم برنامه نویسی رو با خیال راحت یاد بگیر
                و پیشرفت کن
              </p>
              <div className="box-center flex-wrap lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10">
                <a
                  href="#category"
                  className="button-secondary button-xl rounded-full box-center
                   transition-all duration-300 hover:bg-secondary/75"
                >
                  از این مسیر ها شروع کن
                </a>
                <Link
                  className="box-center gap-x-2 group font-DanaMedium cursor-pointer"
                  href={"#freeCourses"}
                >
                  <span
                    className="!bg-baseColor px-4 py-4 rounded-full"
                    title=""
                  >
                    <PlayIcon className="w-6 h-6 text-white" />
                  </span>
                  <span className="md:block hidden">دوره های رایگان</span>
                </Link>
              </div>
            </div>

            {/* left header side */}
            <div className="mt-4 md:mt-8 lg:w-px !order-1 lg:!order-2 h-full lg:h-[391px] xl:h-[530px] 3xl:h-[580px]">
              <div className=" hidden dark:inline-block ">
                <Image
                  className="!relative lg:!absolute !left-0 !right-0 
                  lg:!right-auto !top-8 lg:!top-0 !mx-auto 
                  lg:!w-[580px] xl:!w-auto 3xl:!w-[846px]"
                  fill
                  src={"/images/hero_dark.svg"}
                  alt=""
                />
              </div>
              <div className=" inline-block dark:hidden">
                <Image
                  fill
                  src={"/images/hero_light.svg"}
                  className="!relative lg:!absolute left-0 right-0 
                lg:!right-auto !top-8 lg:!top-0 !mx-auto 
                lg:!w-[580px] xl:!w-auto 3xl:!w-[846px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* latest courses  */}
      <section className="mt-25 xs:mt-40">
        <div className="container">
          <SectionTitle
            title="آخرین دوره های سبزلرن"
            subTitle="سکوی پرتاب شما به سمت موفقیت"
            iconColor="bg-amber-400 "
            link="/courses"
            linkTitle="مشاهده همه دوره ها "
          />
          {/* section content */}
          <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-7">
            <Suspense fallback={<Product_Skelton count={12} />}>
              {latestCoursesUpdated.slice(0, 12).map((course, index) => {
             
                return (
                  <CourseCard key={index}>
                    <CourseCard.Header
                      alt={course.name}
                      title={course.name}
                      src={course.cover}
                      target={`/courses/course/${course.shortName}`}
                    />
                    <CourseCard.Body
                      target={`/courses/course/${course.shortName}`}
                      title={course.name}
                      desc={course.description}
                    />
                    <CourseCard.Footer
                      isFree={course.isFree}
                      isOff={course.isFree ? true : false}
                      member={course.registers as number}
                      percent={course.discount as number}
                      price={course.price}
                      score={course.courseAverageScore}
                      teacher={course.creator.username}
                    />
                  </CourseCard>
                );
              })}
            </Suspense>
          </div>
        </div>
      </section>

      {/* road map */}
      <section className="mt-25" id="category">
        <div className="container ">
          <SectionTitle
            subTitle="نقشه راه برای شروع اصولی یادگیری"
            title="نقشه راه"
            iconColor="bg-fuchsia-500"
          />
          <RoadMap categories={categories} />
        </div>
      </section>
      {/* most popular swiper  */}
      <section className="mt-25 xs:mt-40">
        <CourseSlider
          iconColor="bg-baseColor"
          title="پرطرفدار ترین دوره ها"
          subTitle="دوره های محبوب و پروژه محور سبزلرن"
          navigationBtn={true}
          sliderContent={mostPopularCourses as CourseBodyType[]}
        />
      </section>

      {/* our slogens */}
      <section className="mt-25 xs:mt-40">
        <div className="container">
          <SectionTitle
            title="ما چه کمکی میتونیم بهت بکنیم"
            subTitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
            iconColor="bg-sky-500"
          />
          <div className="grid grid-rows-2 md:grid-cols-2 xs:gap-7 cursor-default">
            {slogensOptions.map((option, index: number) => {
              return (
                <Slogens
                  Icon={option.Icon}
                  Sl_color={option.Sl_color}
                  subTitle={option.subTitle}
                  title={option.title}
                  Icon_Color={option.Icon_Color}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* latest courses */}
      <section className="mt-25 xs:mt-40">
        <CourseSlider
          iconColor="bg-baseColor"
          title="جدیدترین دوره ها"
          subTitle="یادگیری و رشد توسعه فردی"
          navigationBtn={true}
          sliderContent={latestCourses as CourseBodyType[]}
        />
      </section>

      {/* blogs */}
      <section className="mt-25 xs:mt-40">
        <div className="container relative">
          <ColorShade className="bg-baseColor left-0" />
          <ColorShade className="bg-sky-500 -right-40 top-40" />
          <SectionTitle
            title="وبلاگ آموزشی سبزلرن"
            subTitle="مقالات بروز آموزشی"
            link="/blogs"
            iconColor="bg-amber-500"
            linkTitle="مشاهده همه مقالات"
          />
          <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            <Suspense fallback={<Product_Skelton count={4} />}>
              {latestArticles.map((article, index) => {
                return <BlogCard key={index} {...article} />;
              })}
            </Suspense>
          </div>
        </div>
      </section>
      {/* most pupolar courses */}
      <section className="mt-25 sm:mt-40">
        <div className="container relative">
          <SectionTitle
            title="محبوب ترین دوره ها"
            subTitle="پرمخاطب ترین دوره های رایگان سبزلرن"
            link="/courses?sort=popular"
            iconColor="bg-sky-500"
            linkTitle="مشاهده همه دوره ها"
          />
          <div className="grid grid-rows-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-7">
            <Suspense fallback={<Product_Skelton count={12} />}>
              {mostPopularFreeCourses.map((course, index) => {
                return (
                  <CourseCard key={index}>
                    <CourseCard.Header
                      alt={course.name}
                      title={course.name}
                      src={course.cover}
                      target={`/courses/course/${course.shortName}`}
                    />
                    <CourseCard.Body
                      target={`/courses/course/${course.shortName}`}
                      title={course.name}
                      desc={course.description}
                    />
                    <CourseCard.Footer
                      isFree={course.isFree}
                      isOff={course.isFree ? true : false}
                      member={course.registers as number}
                      percent={course.discount as number}
                      price={course.price}
                      score={course.courseAverageScore}
                      teacher={course.creator.username}
                    />
                  </CourseCard>
                );
              })}
            </Suspense>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
}

export default HomePage;
