import Table from "@/components/ui/Table/Table";
import React from "react";
import LgOfferTRow from "./LgOfferTRow";
import SmOfferTRow from "./SmOfferTRow";

function OffersTable() {
  return (
    <div className="h-[480px] overflow-y-auto px-2">
      <Table variant="singleHead">
        <Table.Header className="hidden lg:block" variant="singleHead">
          <tr
            className="grid grid-cols-8 rounded-lg  child:text-center p-4
                    dark:bg-dark bg-gray-200 dark:text-white text-gray-800"
          >
            <th>ردیف</th>
            <th>کد تخفیف</th>
            <th>درصد</th>
            <th>استفاده شده</th>
            <th>باقی مانده</th>
            <th>تاریخ ساخت</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </Table.Header>
        <Table.Body
          variant="singleHead"
          className="child:md:grid-cols-8 grid-cols-2"
        >
            <LgOfferTRow/>
            <SmOfferTRow/>
        </Table.Body>
      </Table>
    </div>
  );
}

export default OffersTable;
