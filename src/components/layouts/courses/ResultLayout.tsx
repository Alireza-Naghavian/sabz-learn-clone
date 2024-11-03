"use client";
import CourseCard from "@/components/shared/ProductCard/ProductCard";
import { FilterReqType } from "@/types/services/course&category.t";
import { usePathname } from "next/navigation";

function ResultLayout({ allCourses }: { allCourses: FilterReqType }) {
    const  path = usePathname();
    const initCoursePath =path.split("/").at(1);
  return (
    <>
      {initCoursePath === "courses"&& allCourses?.allCourses.map((course, index) => {
        return (
          <CourseCard key={index}>
            <CourseCard.Header
              alt={course.name}
              title={course.name}
              src={course.cover}
              target={`/courses/course/${course.shortName}`}
              badge={course.discount !==0 ?`${`${course.discount}%`}`:"" as string |undefined}
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
              teacher={course?.creator?.username  }
              
            />
          </CourseCard>
        );
      })}
    </>
  );
}

export default ResultLayout;
