
import { CourseDataTable } from "@/types/services/course&category.t";
import BuyOperation from "./BuyOperation";
import "./course.css";
import CourseBanner from "./CourseBanner";
function CourseHeader({ shortName,courseData }: { shortName: string ,courseData:CourseDataTable}) {

  return (
    <section className="courseHeader__wrapper">
      <div className="flex flex-col justify-between h-full order-2 lg:order-1">
        <div className="">
          <h1 className="font-DanaMedium text-[1.375rem]/8 sm:text-[1.625rem]/10 mb-4.5">
            {courseData.name}
          </h1>
          <p className="sm:text-lg line-clamp-4 sm:line-clamp-3">
            {courseData.description}
          </p>
        </div>

        {/* buy course ? */}


      <BuyOperation shortName={shortName}/>


      </div>
      <CourseBanner
        courseName={courseData.name}
        courseDataCover={courseData.cover}
      />
    </section>
  );
}

// buy this course ?


export default CourseHeader;
