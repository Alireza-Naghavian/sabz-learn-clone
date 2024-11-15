"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import Table from "@/components/ui/Table/Table";
import React from "react";
import LgMenuTRow from "./LgMenuTRow";
import SmMenuTRow from "./SmMenuTRow";
import { useGetAllMenusQuery } from "@/services/menu&subMenus/menuApiSlice";
import TextLoader from "@/components/ui/loader/TextLoader";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";

function MenusTable() {
  const { data, isLoading, isError, currentData } = useGetAllMenusQuery();
  const submenus = data
    ?.map((menu) => {
      return menu.submenus;
    })
    .flat();
  const menus = data?.concat(submenus as []);

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
            title={"منو ای جهت نمایش وجود ندارد"}
          />
        </div>
      );
  return (
    <HeaderAdminLayout title="لیست منو ها">
      <div className="h-[480px] overflow-y-auto px-2">
        <Table variant="singleHead">
          <Table.Header className="hidden lg:block" variant="singleHead">
            <tr
              className="grid grid-cols-6 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
            >
              <th>ردیف</th>
              <th>عنوان</th>
              <th>لینک</th>
              <th>نام منوی اصلی</th>
              <th>لینک منوی اصلی</th>
              <th>حذف</th>
            </tr>
          </Table.Header>
          <Table.Body
            variant="singleHead"
            className="child:md:grid-cols-6 grid-cols-2"
          >
            {menus?.map((menu, index) => {
              if (currentData !== undefined && !isError) {
                return (
                  <LgMenuTRow
                    key={index as number}
                    {...menu}
                    index={index + 1}
                  />
                );
              }
            })}
            {menus?.map((menu) => {
              if (currentData !== undefined && !isError) {
                return <SmMenuTRow key={menu._id} {...menu} />;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    </HeaderAdminLayout>
  );
}

export default MenusTable;
