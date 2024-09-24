"use client"
import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgCommentTRow from '../Courses/course-list/LgCommentTRow'
import SmCommentTRow from '../Courses/course-list/SmCommentTRow'

function CommentsTable() {
  return (
    <HeaderAdminLayout title='لیست کامنت ها'>

<div className="h-[480px] overflow-y-auto px-2">
<Table  variant='singleHead'>
    <Table.Header className='hidden lg:block'  variant='singleHead'>
    <tr
            className="grid grid-cols-6 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
                <th>کاربر</th>
                <th>امتیاز ثبت شده</th>
                <th>محصول</th>
                <th>تاریخ ثبت</th>
                <th>پاسخ/تایید</th>
                <th>حذف/ویرایش</th>
          </tr>
    </Table.Header>
    <Table.Body
           variant='singleHead'
        className='child:md:grid-cols-6 grid-cols-2'
    >
<LgCommentTRow/>
<SmCommentTRow/>
    </Table.Body>
</Table>

</div>
    </HeaderAdminLayout>
  )
}

export default CommentsTable