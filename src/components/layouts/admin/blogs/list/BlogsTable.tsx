"use client"
import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import Table from '@/components/ui/Table/Table'
import React from 'react'
import LgBlogTRow from './LgBlogTRow'
import SmBlogTRow from './SmBlogTRow'
import { useGetAllBlogsQuery } from '@/services/articles/articlesApiSlice'
import TextLoader from '@/components/ui/loader/TextLoader'

function BlogsTable() {
  const {data,isLoading} = useGetAllBlogsQuery();
  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
  return (
    <HeaderAdminLayout title='لیست مقالات'>

    <div className="h-[480px] overflow-y-auto px-2">
    <Table  variant='singleHead'>
    <Table.Header className='hidden lg:block'  variant='singleHead'>
    <tr
            className="grid grid-cols-5 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800">
            <th>ردیف</th>
            <th>عنوان</th>
            <th>نویسنده</th>
            <th>تاریخ</th>
            <th>حذف</th>
          </tr>
    </Table.Header>
    <Table.Body
           variant='singleHead'
        className='child:md:grid-cols-5 grid-cols-2'
    >
         {data?.map((blog, index) => {
              return (
                <LgBlogTRow
                  key={index as number}
                  {...blog}
                  index={index + 1}
                />
              );
            })}
        {data?.map((blog) => {
              return (
                <SmBlogTRow key={blog._id} {...blog} />
              );
            })}
    </Table.Body>
</Table>
    </div>
    </HeaderAdminLayout>
  )
}

export default BlogsTable