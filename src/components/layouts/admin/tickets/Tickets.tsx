"use client"
import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgTicketTRow from './LgTicketTRow'
import SmTicketTRow from './SmTicketTRow'

function Tickets() {
  // if (data === undefined || data.length === 0)
  //   return (
  //     <div className="mt-5">
  //       <EmptyResult
  //         className="py-4"
  //         title={" جلسه ای جهت نمایش وجود ندارد"}
  //       />
  //     </div>
  //   );

  return (
    <HeaderAdminLayout title='تیکت ها'>

<div className="h-[480px] overflow-y-auto px-2">
<Table  variant='singleHead'>
    <Table.Header className='hidden lg:block'  variant='singleHead'>
    <tr
            className="grid grid-cols-7 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
                <th>ردیف</th>
                <th>کاربر</th>
                <th>عنوان</th>
                <th>دپارتمان</th>
                <th>اولویت</th>
                <th>مشاهده / پاسخ</th>
                <th>حذف / بستن</th>
          </tr>
    </Table.Header>
    <Table.Body
           variant='singleHead'
        className='child:md:grid-cols-7 grid-cols-2'
    >
  <LgTicketTRow/>
  <SmTicketTRow/>
    </Table.Body>
</Table>

</div>
    </HeaderAdminLayout>
  )
}

export default Tickets