"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import Table from "@/components/ui/Table/Table";
import React from "react";
import LgSessionTRow from "./LgSessionTRow";
import SmSessionTRow from "./SmSessionTRow";
import { useGetAllSessionsQuery } from "@/services/sessions&topics/sesisonSlice";
import TextLoader from "@/components/ui/loader/TextLoader";

function SessionTable() {
  const { data, isLoading, currentData, isError } = useGetAllSessionsQuery();
  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
  return (
    <HeaderAdminLayout title="لیست جلسات">
      <div className="h-[480px] overflow-y-auto px-2">
        <Table variant="singleHead">
          <Table.Header className="hidden lg:block" variant="singleHead">
            <tr
              className="grid grid-cols-6 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
            >
              <th>ردیف</th>
              <th>عنوان</th>
              <th>عنوان دوره</th>
              <th>زمان</th>
              <th>رایگان/غیررایگان</th>
              <th>حذف</th>
            </tr>
          </Table.Header>
          <Table.Body
            variant="singleHead"
            className="child:md:grid-cols-6 grid-cols-2"
          >
            {data?.map((session, index) => {
              if (currentData !== undefined && !isError) {
                return (
                  <LgSessionTRow
                    key={index as number}
                    {...session}
                    index={index + 1}
                  />
                );
              }
            })}
            {data?.map((session) => {
              if (currentData !== undefined && !isError) {
                return <SmSessionTRow key={session._id} {...session} />;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    </HeaderAdminLayout>
  );
}

export default SessionTable;
