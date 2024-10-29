"use client";
import { Nav_BtnsType } from "@/components/ui/button/Nav_Btns";
import { CourseBodyType } from "@/types/services/course&category.t";
import { Suspense } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../ProductCard/ProductCard";
import Product_Skelton from "../ProductCard/skelton/Product_Skelton";
import "./swiper-bundle.min.css";
type SliderType = Nav_BtnsType & {
  sliderContent: CourseBodyType[];
};
const Slider = ({ nextClass, prevClass, sliderContent }: SliderType) => {
  return (
    <div className=" ">
         <Suspense  fallback={<Product_Skelton count={8}/>}>
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
        <div className="grid grid-rows-2">

        {sliderContent.map((slider: CourseBodyType, index) => {
          return (
            <SwiperSlide key={index}>
              <CourseCard>
                <CourseCard.Header
                  alt={slider.name}
                  title={slider.name}
                  src={slider.cover}
                  target={`/courses/course/${slider.shortName}`}
                  badge={slider.discount !==0 ?`${`${slider.discount}%`}`:"" as string |undefined}
                  />
                <CourseCard.Body
                  target={`/courses/course/${slider.shortName}`}
                  title={slider.name}
                  desc={slider.description}
                  />
                <CourseCard.Footer
                  isFree={slider.isFree}
                  isOff={slider.isFree ? true : false}
                  member={slider.registers as number}
                  percent={slider.discount as number}
                  price={slider.price}
                  score={slider.courseAverageScore}
                  teacher={slider.creator.username}
                  />
              </CourseCard>
            </SwiperSlide>
                          
       
          );
        })}
        </div>
      </Swiper>
      </Suspense>
    </div>
  );
};

export default Slider;
