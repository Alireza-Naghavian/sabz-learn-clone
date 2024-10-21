import MyCourses from '@/components/layouts/user-panel/courses/MyCourses'
import StoreProvider from '@/context/StoreProvider'
import React from 'react'

function page() {
  return (
    <StoreProvider>

  <MyCourses/>
    </StoreProvider>
  )
}

export default page