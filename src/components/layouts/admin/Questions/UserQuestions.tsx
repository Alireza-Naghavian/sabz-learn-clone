"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TextLoader from "@/components/ui/loader/TextLoader";
import Table from "@/components/ui/Table/Table";
import { useAllQuestionsQuery } from "@/services/sessions&topics/userQuestionsSlice";
import LgQTRow from "./LgQTRow";
import SmQTRow from "./SmQTRow";

function UserQuestions() {
  const { data, isLoading, currentData, isError } = useAllQuestionsQuery();
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
        <EmptyResult className="py-4" title={" پرسشی جهت نمایش وجود ندارد"} />
      </div>
    );

  return (
    <HeaderAdminLayout title="لیست پرسش ها">
      <div className="h-[480px] overflow-y-auto px-2">
        <Table variant="singleHead">
          <Table.Header className="hidden lg:block" variant="singleHead">
            <tr
              className="grid grid-cols-7 rounded-lg  child:text-center p-4
                        dark:bg-dark bg-gray-200 dark:text-white text-gray-800" >
              <th>شماره</th>
              <th>نام</th>
              <th>ایمیل</th>
              <th>دوره </th>
              <th>جلسه</th>
              <th>پاسخ</th>
              <th>حذف</th>
            </tr>
          </Table.Header>
          <Table.Body
            variant="singleHead"
            className="child:md:grid-cols-7 grid-cols-2"
          >
            {data.map((group, index) => {
              
              if (currentData !== undefined && !isError) {
            
                return (
                  <LgQTRow
                    questions={group.questions}
                    course={group.course}
                    creator={group.creator}
                    session={group.session}
                    key={index}
                    index={index + 1}
              
                  />
                );
              }
            })}

             {data?.map((group) => {
                if (currentData !== undefined && !isError) {

                  return (
                    <SmQTRow key={crypto.randomUUID()}     questions={group.questions}
                    course={group.course}
                    creator={group.creator}
                    session={group.session} />
                    
                  );
                }
             })}
          </Table.Body>
        </Table>
      </div>
    </HeaderAdminLayout>
  );
}

export default UserQuestions;
