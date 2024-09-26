import Table from "@/components/ui/Table/Table";
import { CatBodytype } from "@/types/services/course&category.t";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

function LgCatTRow({ link, title,index }: CatBodytype&{index:number}) {
  return (
    <Table.Row
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td>{index +1}</td>
      <td>{title}</td>
      <td>{String(link).split("/").reverse()}/</td>
      <td><TrashIcon className="size-5 text-red-500 cursor-pointer"/></td>
    </Table.Row>
  );
}

export default LgCatTRow;
