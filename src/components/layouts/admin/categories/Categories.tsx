import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import React from 'react'
import CategoryForm from './CategoryForm'
import CategoryTable from './CategoryTable'

function Categories() {
  return (
    <div className='flex flex-col gap-y-4'>
    <HeaderAdminLayout title='افزودن دسته بندی'>

    <CategoryForm/>
    </HeaderAdminLayout>
    <HeaderAdminLayout title='لیست دست بندی ها'>
     <CategoryTable/>
    </HeaderAdminLayout>
    </div>
  )
}

export default Categories