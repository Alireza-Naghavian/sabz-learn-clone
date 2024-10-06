import Nav_Btns from "@/components/ui/button/Nav_Btns";
import ColorShade from "@/components/ui/greenShade/GreenShade";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { CourseBodyType } from "@/types/services/course&category.t";
import { CourseSliderType } from "@/types/slider";
import Slider from "./Slider";

const CourseSlider = <T,>({
  navigationBtn,
  iconColor,
  subTitle,
  title,
  sliderContent,
}: CourseSliderType<T>) => {
  const uniqueId = Math.random().toString(36).substring(2, 9);
  const nextClass = `swiper-button-next-${uniqueId}`;
  const prevClass = `swiper-button-prev-${uniqueId}`;
  return (
    
    
    <div className="container relative">
      <ColorShade className="bg-baseColor left-0" />
      <ColorShade className="bg-sky-500 -right-16" />
      <SectionTitle
        navigationBtn={navigationBtn}
        iconColor={iconColor}
        subTitle={subTitle}
        title={title}
        nextClass={nextClass}
        prevClass={prevClass}
      />
  
      <Slider
        sliderContent={sliderContent as CourseBodyType[]}
        nextClass={nextClass}
        prevClass={prevClass}
      />
      <div
        className="sm:!hidden !flex !relative child:left-0 
  child:right-0 child:w-full child:!justify-center
   items-center !mx-auto child:!py-6 "
      >
        <Nav_Btns nextClass={nextClass} prevClass={prevClass} />
      </div>
    
    </div>
  );
};

export default CourseSlider;
