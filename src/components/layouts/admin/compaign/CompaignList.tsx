import Table from '@/components/ui/Table/Table'
import React from 'react'
import SmCompaignTRow from './SmCompaignTRow'
import LgCompaignTRow from './LgCompaignTRow'

function CompaignList() {
  return (
    <div className="h-[480px] overflow-y-auto px-2">
    <Table variant="singleHead">
      <Table.Header className="hidden lg:block" variant="singleHead">
        <tr
          className="grid grid-cols-7 rounded-lg  child:text-center p-4
                dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
        >
          <th>ردیف</th>
          <th>عنوان</th>
          <th>دسته بندی </th>
          <th>زمان</th>
          <th>درصد</th>
          <th>وضعیت</th>
          <th>حذف/ پایان </th>
        </tr>
      </Table.Header>
      <Table.Body
        variant="singleHead"
        className="child:md:grid-cols-7 grid-cols-2"
      >
        <LgCompaignTRow/>
        <SmCompaignTRow/>
      </Table.Body>
    </Table>
  </div>
  )
}

export default CompaignList