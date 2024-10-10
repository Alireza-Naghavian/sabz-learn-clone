import Course from '@/components/layouts/course/Course'
import dataFetcher from '@/utils/dataFetcher';
import dataParser from '@/utils/dataParser';
import React from 'react'
type CourseParams = {
  params:{shortName:string}
}
async function page({params}:CourseParams) {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const courseData = await dataFetcher(`courses/${params.shortName}`,"omit",undefined,1800)
  const relateCourses = await dataFetcher(`courses/related/${params.shortName}`,"omit",undefined,1800)
  return (
    <main className='max-w-[1920px] mx-auto overflow-x-hidden'>
        <Course
          menu={dataParser(menus)}
          courseData={dataParser(courseData)}
          relateCourses={relateCourses}
        />
    </main>
  )
}

export default page