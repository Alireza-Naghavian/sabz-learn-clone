import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import React from 'react'

function CourseBanner({courseDataCover,courseName}:{courseDataCover:string,courseName:string}) {
  return (
    <div className='course_intro_wrap order-1 w-full h-[280px]  sm:h-[360px] rounded-2xl overflow-hidden bg-darker'>
      <ResponsiveImage
        className='w-full h-full object-cover rounded-2xl course_intro_wrap bg-darker overflow-hidden'
      alt={courseName}
      src={courseDataCover}
     />
    </div>
  )
}

export default CourseBanner