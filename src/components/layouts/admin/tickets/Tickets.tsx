"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import Table from "@/components/ui/Table/Table";
import React from "react";
import LgTicketTRow from "./LgTicketTRow";
import SmTicketTRow from "./SmTicketTRow";
import DeptForm from "./DeptForm";
import { useGetAllTicketsQuery } from "@/services/tickets&depts/ticketApiSlice";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TextLoader from "@/components/ui/loader/TextLoader";
import { TicketTableData } from "@/types/services/tickets.t";

function Tickets() {
  const { data, isLoading, currentData, isError } = useGetAllTicketsQuery();
  if (isLoading) return <TextLoader loadingCondition={isLoading} />;
  if (data === undefined || data.length === 0)
    return (
      <div className="mt-5">
        <EmptyResult className="py-4" title={"  تیکتی جهت نمایش وجود ندارد"} />
      </div>
    );

  return (
    <>
      <HeaderAdminLayout title="تیکت ها">
        <div className="h-[480px] overflow-y-auto px-2">
          <Table variant="singleHead">
            <Table.Header className="hidden lg:block" variant="singleHead">
              <tr
                className="grid grid-cols-7 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
              >
                <th>ردیف</th>
                <th>کاربر</th>
                <th>عنوان</th>
                <th>دپارتمان</th>
                <th>وضعیت</th>
                <th>مشاهده / پاسخ</th>
                <th>حذف / بستن</th>
              </tr>
            </Table.Header>
            <Table.Body
              variant="singleHead"
              className="child:md:grid-cols-7 grid-cols-2"
            >
              {data.map((ticket:TicketTableData, index:number) => {
                if (currentData !== undefined && !isError) {
                  return <LgTicketTRow index={index +1} key={index} {...ticket} />;
                }
              })}
              {data.map((ticket:TicketTableData) => {
                if (currentData !== undefined && !isError) {
                  return <SmTicketTRow key={ticket._id} {...ticket} />;
                }
              })}
            </Table.Body>
          </Table>
        </div>
      </HeaderAdminLayout>
      <HeaderAdminLayout title="دپارتمان ها">
        <DeptForm />
      </HeaderAdminLayout>
    </>
  );
}

export default Tickets;
