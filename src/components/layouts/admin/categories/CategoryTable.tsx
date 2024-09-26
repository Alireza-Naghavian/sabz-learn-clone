"use client";
import Table from "@/components/ui/Table/Table";
import React from "react";
import SmCatTRow from "./SmCatTRow";
import LgCatTRow from "./LgCatTRow";
import { useGetAllCatQuery } from "@/services/course&Categories/courseApiSlice";
import TextLoader from "@/components/ui/loader/TextLoader";

function CategoryTable() {
  const { data, isLoading } = useGetAllCatQuery();
  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
  return (
    <div className="h-[480px] overflow-y-auto px-2">
      <Table variant="singleHead">
        <Table.Header className="hidden lg:block" variant="singleHead">
          <tr
            className="grid grid-cols-4 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
          >
            <th>ردیف</th>
            <th>عنوان</th>
            <th>لینک</th>
            <th>حذف</th>
          </tr>
        </Table.Header>
        <Table.Body
          variant="singleHead"
          className="child:md:grid-cols-4 grid-cols-2"
        >
          {data?.map((item, index) => {
            return (
              <SmCatTRow
                key={index as number}
                _id={item._id}
                link={item.link}
                title={item.title}
              />
            );
          })}
          {data?.map((item,index) => {
            return (
              <LgCatTRow
              index={index}
              _id={item._id}
                key={item._id}
                link={item.link}
                title={item.title}
              />
            );
          })}
    
        </Table.Body>
      </Table>
    </div>
  );
}

export default CategoryTable;
