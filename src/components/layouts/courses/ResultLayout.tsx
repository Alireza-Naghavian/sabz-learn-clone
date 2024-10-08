"use client";
import CourseCard from "@/components/shared/ProductCard/ProductCard";
import { CourseBodyType } from "@/types/services/course&category.t";
import { usePathname } from "next/navigation";
import React from "react";

function ResultLayout({ allCourses }: { allCourses: CourseBodyType[] }) {
    const  path = usePathname();
    const initCoursePath =path.split("/").at(1)
  return (
    <>
      {initCoursePath === "courses"&& allCourses.map((course, index) => {
        return (
          <CourseCard key={index}>
            <CourseCard.Header
              alt={course.name}
              title={course.name}
              src={course.cover}
              target={`/courses/${course.shortName}`}
            />
            <CourseCard.Body
              target={`/courses/${course.shortName}`}
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
              teacher={course.creator.username  }
            />
          </CourseCard>
        );
      })}
    </>
  );
}

export default ResultLayout;
