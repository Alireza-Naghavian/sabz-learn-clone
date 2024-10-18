"use client";
import TextLoader from "@/components/ui/loader/TextLoader";
import Table from "@/components/ui/Table/Table";
import { useGetAllCodesQuery } from "@/services/offer-codes/offerSlice";
import LgOfferTRow from "./LgOfferTRow";
import SmOfferTRow from "./SmOfferTRow";
import dynamic from "next/dynamic";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
const DynamicTable = dynamic(() => import("@/components/ui/Table/Table"), {
  ssr: false,
});

function OffersTable() {
  const { data, isLoading, isError, currentData } = useGetAllCodesQuery();
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
            title={"کد تخفیفی جهت نمایش وجود ندارد"}
          />
        </div>
      );
  return (
    <div className="h-[480px] overflow-y-auto px-2">
      <DynamicTable variant="singleHead">
        <Table.Header className="hidden lg:block" variant="singleHead">
          <tr
            className="grid grid-cols-8 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
          >
            <th>ردیف</th>
            <th>کد تخفیف</th>
            <th>درصد</th>
            <th>دوره</th>
            <th>استفاده شده</th>
            <th>باقی مانده</th>
            <th>تاریخ ساخت</th>
            <th>حذف</th>
          </tr>
        </Table.Header>
        <Table.Body
          variant="singleHead"
          className="child:md:grid-cols-8 grid-cols-2"
        >
          {(data || [])?.map((offer, index) => {
            if (currentData !== undefined && !isError) {
              return <LgOfferTRow key={index} {...offer} index={index + 1} />;
            }
          })}
          {data?.map((offer) => {
            if (currentData !== undefined && !isError) {
              return <SmOfferTRow key={offer._id} {...offer} />;
            }
          })}
        </Table.Body>
      </DynamicTable>
    </div>
  );
}

export default OffersTable;
