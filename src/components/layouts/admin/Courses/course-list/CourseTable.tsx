import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgCourseTRow from './LgCourseTRow'
import SmCourseTRow from './SmCourseTRow'

function CourseTable() {
  return (
    <HeaderAdminLayout title='لیست دوره ها'>
<div className="h-[480px] overflow-y-auto px-2">
<Table  variant='singleHead'>
    <Table.Header className='hidden lg:block'  variant='singleHead'>
    <tr
            className="grid grid-cols-9 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
            <th>ردیف</th>
            <th>کاور</th>
            <th>عنوان</th>
            <th>مدرس</th>
            <th>مبلغ(تومان)</th>
            <th>تعداد ثبت نام</th>
            <th>وضعیت</th>
            <th>دسته بندی</th>
            <th>حذف</th>
          </tr>
    </Table.Header>
    <Table.Body
           variant='singleHead'
        className='child:md:grid-cols-9 grid-cols-2'
    >
        <LgCourseTRow/>
        <SmCourseTRow/>
    </Table.Body>
</Table>

</div>
    </HeaderAdminLayout>
  )
}

export default CourseTable