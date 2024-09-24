import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgUserTRow from './LgUserTRow'
import SmUserTRow from './SmUserTRow'


function UsersManagement() {
  return (
  <HeaderAdminLayout title='لیست کاربران'>
<div className="h-[480px] overflow-y-auto px-2">
    <Table variant='singleHead'>
        <Table.Header className='hidden lg:block'  variant='singleHead'>
        <tr
            className="grid grid-cols-8 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
            <th>شماره</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>تراکنش ها</th>
            <th>نقش</th>
            <th>تغییر سطح</th>
            <th>بن کردن</th>
            <th>حذف</th>
          </tr>
        </Table.Header>
        <Table.Body
        variant='singleHead'
        className='child:md:grid-cols-8 grid-cols-2'
        >
            <LgUserTRow/>
            <SmUserTRow/>
        </Table.Body>
    </Table>
</div>
  </HeaderAdminLayout>
  )
}

export default UsersManagement