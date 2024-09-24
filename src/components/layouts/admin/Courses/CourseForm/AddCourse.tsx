import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import React from 'react'
import CourseForm from './CourseForm'

function AddCourse() {
  return (
 <HeaderAdminLayout
 title='افزودن دوره جدید'
 >
    <CourseForm/>
 </HeaderAdminLayout>
  )
}

export default AddCourse