"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import Table from "@/components/ui/Table/Table";
import React from "react";
import LgCommentTRow from "./LgCommentTRow";
import SmCommentTRow from "./SmCommentTRow";
import { useGetAllCommentsQuery } from "@/services/comments/commentApiSlice";
import TextLoader from "@/components/ui/loader/TextLoader";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";

function CommentsTable() {
  const { data:allcomments, isLoading, isError, currentData } = useGetAllCommentsQuery();
  const data = allcomments?.map((comment=>comment.userReplies)).concat(allcomments).flat();

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
          title={"هنوز کامنتی از سوی کاربر ثبت نشده است"}
        />
      </div>
    );
  return (
    <HeaderAdminLayout title="لیست کامنت ها">
      <div className="h-[480px] overflow-y-auto px-2">
        <Table variant="singleHead">
          <Table.Header className="hidden lg:block" variant="singleHead">
            <tr
              className="grid grid-cols-6 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
            >
              <th>شماره</th>
              <th>کاربر</th>
              <th>دوره</th>
              <th>تاریخ ثبت</th>
              <th>پاسخ/تایید</th>
              <th>حذف</th>
            </tr>
          </Table.Header>
          <Table.Body
            variant="singleHead"
            className="child:md:grid-cols-6 grid-cols-2"
          >
            {data?.map((comment, index) => {
              if (currentData !== undefined && !isError) {
                return (
                  <LgCommentTRow
                    key={index as number}
                    {...comment}
                    index={index + 1}
                  />
                );
              }
            })}
            {data?.map((comment) => {
              if (currentData !== undefined && !isError) {
                return <SmCommentTRow key={comment._id} {...comment} />;
              }
            })}
          </Table.Body>
        </Table>
      </div>
    </HeaderAdminLayout>
  );
}

export default CommentsTable;
