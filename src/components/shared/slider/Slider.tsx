"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../ProductCard/ProductCard";
import "./swiper-bundle.min.css";
import { Nav_BtnsType } from "@/components/ui/button/Nav_Btns";
const Slider = ({nextClass,prevClass}:Nav_BtnsType) => {
  return (
    <div className="!relative !w-full">
      <Swiper
        navigation={{
          nextEl: `#${nextClass}`,
          prevEl: `#${prevClass}`,
        }}
        autoplay={{ pauseOnMouseEnter: true, delay: 3000 }}
        modules={[Autoplay, Navigation]}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <CourseCard>
            <CourseCard.Header
              alt="دوره next js "
              title="دوره next js"
              src="/images/next.webp"
              target=""
            />
            <CourseCard.Body
              target=""
              title="آموزش الگوریتم و ساختمان داده به زبان ساده"
              desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
            />
            <CourseCard.Footer
              isFree={true}
              isOff={true}
              member={322}
              percent={10}
              price={1150000}
              score={5}
              teacher="رضا دولتی"
            />
          </CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard>
            <CourseCard.Header
              alt="دوره next js "
              title="دوره next js"
              src="/images/next.webp"
              target=""
            />
            <CourseCard.Body
              target=""
              title="آموزش الگوریتم و ساختمان داده به زبان ساده"
              desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
            />
            <CourseCard.Footer
              isFree={true}
              isOff={true}
              member={322}
              percent={10}
              price={1150000}
              score={5}
              teacher="رضا دولتی"
            />
          </CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard>
            <CourseCard.Header
              alt="دوره next js "
              title="دوره next js"
              src="/images/next.webp"
              target=""
            />
            <CourseCard.Body
              target=""
              title="آموزش الگوریتم و ساختمان داده به زبان ساده"
              desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
            />
            <CourseCard.Footer
              isFree={true}
              isOff={true}
              member={322}
              percent={10}
              price={1150000}
              score={5}
              teacher="رضا دولتی"
            />
          </CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard>
            <CourseCard.Header
              alt="دوره next js "
              title="دوره next js"
              src="/images/next.webp"
              target=""
            />
            <CourseCard.Body
              target=""
              title="آموزش الگوریتم و ساختمان داده به زبان ساده"
              desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
            />
            <CourseCard.Footer
              isFree={true}
              isOff={true}
              member={322}
              percent={10}
              price={1150000}
              score={5}
              teacher="رضا دولتی"
            />
          </CourseCard>
        </SwiperSlide>
        <SwiperSlide>
          <CourseCard>
            <CourseCard.Header
              alt="دوره next js "
              title="دوره next js"
              src="/images/next.webp"
              target=""
            />
            <CourseCard.Body
              target=""
              title="آموزش الگوریتم و ساختمان داده به زبان ساده"
              desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
            />
            <CourseCard.Footer
              isFree={true}
              isOff={true}
              member={322}
              percent={10}
              price={1150000}
              score={5}
              teacher="رضا دولتی"
            />
          </CourseCard>
        </SwiperSlide>
        {/* {swiperInstance && <Nav_Btns swiper={swiperInstance} />} */}
      </Swiper>
    </div>
  );
};

export default Slider;
