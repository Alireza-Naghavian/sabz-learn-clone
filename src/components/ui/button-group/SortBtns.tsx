"use client";
import { SortType } from "@/types/consts.t";
import { SetState } from "@/types/global.t";
import { SortOption } from "@/utils/constants";
import {
  AdjustmentsHorizontalIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Btn_sort_sheet from "./Btn_sort_sheet";
import FilterMobile from "./FilterMobile";
import SearchBox, { SearchForm } from "../SearchBox/SearchBox";
type SortBtnType = {
  setSort: SetState<SortType>;
  sort: SortType;
} & SortType;
type SM_SortBtnType = Omit<SortBtnType, "setSort" | "sort" | "label"> & {
  Icon: any;
  setIsOpen: SetState<boolean>;
  isOpen: boolean;
};

function SortBtns({qs=true}:{qs?:boolean}) {
  const [sort, setSort] = useState<SortType>(SortOption[0]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <>
      <Btn_sort_sheet
        setIsOpen={setIsSortOpen}
        isOpen={isSortOpen}
        setSort={setSort}
        sort={sort}
      />
      <FilterMobile qs={qs} setIsOpen={setIsFilterOpen} isOpen={isFilterOpen} />
      <div className="flex md:hidden items-center gap-3.5 mb-7">
        <SM_SortBtn
          setIsOpen={setIsFilterOpen}
          isOpen={isFilterOpen}
          title="فیلتر"
          Icon={<FunnelIcon className="size-6 text-gray-500" />}
        />
        <SM_SortBtn
          setIsOpen={setIsSortOpen}
          isOpen={isSortOpen}
          title={sort.title}
          Icon={<AdjustmentsHorizontalIcon className="size-6 text-gray-500" />}
        />
      </div>
      <div
        className="hidden md:flex items-center px-7 mb-5 h-[68px] 
        shadow-light dark:shadow-none bg-white dark:bg-gray-800 
        dark:border dark:border-gray-700 rounded-2xl"
      >
        <div
          className="flex items-center justify-center 
          lg:justify-start gap-4 text-sm"
        >
          <span
            className="flex items-center shrink-0 gap-x-2.5
            dark:text-white"
          >
            <AdjustmentsHorizontalIcon className="size-6" />
            <span className="flex items-center">مرتب سازی :</span>
          </span>
          <div className="sort-list flex items-center gap-x-4 flex-wrap">
            {SortOption.map((option, index) => {
              return (
                <SortBtn
                  key={index as number}
                  label={option.label}
                  title={option.title}
                  setSort={setSort}
                  sort={sort}
                />
              );
            })}
          </div>
        </div>
      </div>
      <SearchForm
        className="!w-full !relative md:hidden mb-8 child:bg-white/5 !rounded-lg "
        placeholder="جستجو بین دوره ها"
      />
    </>
  );
}

const SortBtn = ({ label, title, setSort, sort }: SortBtnType) => {
  return (
    <button
      onClick={() => setSort({ label, title })}
      className={`sort-select-btn sort-btn ${
        sort.label === label && "sort-btn--active"
      }`}
    >
      {title}
    </button>
  );
};

export const SM_SortBtn = ({
  Icon,
  title,
  setIsOpen,
  isOpen,
}: SM_SortBtnType) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className="cursor-pointer flex md:hidden w-full items-center gap-3.5 "
    >
      <div
        className="flex items-center w-full mx-auto justify-center gap-x-2 
    py-2 px-4 text-sm text-zinc-700 dark:text-white
     bg-white dark:bg-gray-800 rounded-xl select-none"
      >
        <span className="size-6 text-gray-500">{Icon}</span>

        <span>{title}</span>
      </div>
    </div>
  );
};

export default SortBtns;
