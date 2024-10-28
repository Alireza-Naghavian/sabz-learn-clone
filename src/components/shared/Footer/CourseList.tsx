"use client";
import TextLoader from "@/components/ui/loader/TextLoader";
import StoreProvider from "@/context/StoreProvider";
import { useGetCoursesQuery } from "@/services/course&Categories/courseApiSlice";
import Link from "next/link";
import React from "react";

export const CourseList = () => {
  return (
    <StoreProvider>
      <CourseItem />
    </StoreProvider>
  );
};
const CourseItem = () => {
  const { isLoading, data } = useGetCoursesQuery();
  if (isLoading) return <TextLoader loadingCondition={isLoading} />;
  return (
    <>
      {data?.slice(0, 3).map((course, index) => {
        return (
          <Link
            key={index}
            href={`/courses/course/${course.shortName}`}
            className="text-hover"
          >
            {course.name}
          </Link>
        );
      })}
    </>
  );
};

export default CourseList;
