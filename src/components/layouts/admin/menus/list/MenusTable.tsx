import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgMenuTRow from './LgMenuTRow'
import SmMenuTRow from './SmMenuTRow'

function MenusTable() {
  return (
    <HeaderAdminLayout title='لیست منو ها'>

    <div className="h-[480px] overflow-y-auto px-2">
    <Table  variant='singleHead'>
    <Table.Header className='hidden lg:block'  variant='singleHead'>
    <tr
            className="grid grid-cols-6 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
            <th>ردیف</th>
            <th>عنوان</th>
            <th>لینک</th>
            <th>نام منوی اصلی</th>
            <th>لینک منوی اصلی</th>
            <th>حذف</th>
          </tr>
    </Table.Header>
    <Table.Body
           variant='singleHead'
        className='child:md:grid-cols-6 grid-cols-2'
    >
   <LgMenuTRow/>
   <SmMenuTRow/>
    </Table.Body>
</Table>
    </div>
    </HeaderAdminLayout>
  )
}

export default MenusTable