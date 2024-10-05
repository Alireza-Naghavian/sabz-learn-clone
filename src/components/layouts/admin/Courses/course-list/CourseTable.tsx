"use client";
import HeaderAdminLayout from "@/components/shared/Headers/HeaderAdminLayout";
import { useGetCoursesQuery } from "@/services/course&Categories/courseApiSlice";
import TextLoader from "@/components/ui/loader/TextLoader";
import dynamic from "next/dynamic";
import Table from "@/components/ui/Table/Table";
import SmCourseTRow from "./SmCourseTRow";
import LgCourseTRow from "./LgCourseTRow";
const NoSSR = dynamic(() => import("@/components/ui/Table/Table"), {
  ssr: false,
});

function CourseTable() {
  const { data, isLoading, isError, currentData } = useGetCoursesQuery();

  if (isLoading)
    return (
      <TextLoader
        className="!h-[380px] overflow-y-auto px-2"
        loadingCondition={isLoading}
      />
    );
  return (
    <HeaderAdminLayout title="لیست دوره ها">
      <div className="h-[480px] overflow-y-auto px-2">
        <NoSSR variant="singleHead">
          <Table.Header className="hidden lg:block" variant="singleHead">
            <tr
              className="grid grid-cols-9 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
            >
              <th>ردیف</th>

              <th>عنوان</th>
              <th>مدرس</th>
              <th>مبلغ(تومان)</th>
              <th>تعداد ثبت نام</th>
              <th>وضعیت</th>
              <th>دسته بندی</th>
              <th>ویرایش</th>
              <th>حذف</th>
            </tr>
          </Table.Header>
          <Table.Body
            variant="singleHead"
            className="child:md:grid-cols-7 child:lg:grid-cols-9 grid-cols-2"
          >
            {data?.map((course, index) => {
              if (currentData !== undefined && !isError) {
                return (
                  <LgCourseTRow
                    key={index as number}
                    {...course}
                    index={index + 1}
                  />
                );
              }
            })}
            {data?.map((course) => {
              if (currentData !== undefined && !isError) {
                return <SmCourseTRow key={course._id} {...course} />;
              }
            })}
          </Table.Body>
        </NoSSR>
      </div>
    </HeaderAdminLayout>
  );
}

export default CourseTable;
