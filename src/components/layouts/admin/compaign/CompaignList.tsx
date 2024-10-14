"use client"
import Table from '@/components/ui/Table/Table'
import React from 'react'
import SmCompaignTRow from './SmCompaignTRow'
import LgCompaignTRow from './LgCompaignTRow'
import { useAllCompaignQuery } from '@/services/compaigns/compaignSlice'
import TextLoader from '@/components/ui/loader/TextLoader'
import EmptyResult from '@/components/ui/EmptyResult/EmptyResult'

function CompaignList() {
  const {data,isLoading,isError,currentData} = useAllCompaignQuery();
  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
    if (data === undefined || data.length === 0)
      return (
        <div className="mt-5">
          <EmptyResult
            className="py-4"
            title={"هیچ کمپینی تاکنون اجرا نشده است"}
          />
        </div>
      );
  return (
    <div className="h-[480px] overflow-y-auto px-2">
    <Table variant="singleHead">
      <Table.Header className="hidden lg:block" variant="singleHead">
        <tr
          className="grid grid-cols-6 rounded-lg  child:text-center p-4
                dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
        >
          <th>ردیف</th>
          <th>عنوان</th>
          <th>زمان</th>
          <th>درصد</th>
          <th>وضعیت</th>
          <th>حذف/ پایان </th>
        </tr>
      </Table.Header>
      <Table.Body
        variant="singleHead"
        className="child:md:grid-cols-6 grid-cols-2"
      >
         {data?.map((event, index) => {
              if (currentData !== undefined && !isError) {
                return (
                  <LgCompaignTRow
                    key={index as number}
                    {...event}
                    index={index + 1}
                  />
                );
              }
            })}
            {data?.map((event) => {
              if (currentData !== undefined && !isError) {
                return <SmCompaignTRow key={event._id} {...event} />;
              }
            })}
      </Table.Body>
    </Table>
  </div>
  )
}

export default CompaignList