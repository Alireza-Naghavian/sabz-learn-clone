"use client";
import { ChevronDownIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import React from "react";
import SimpleCheckBox from "../textField&inputs/SimpleCheckBox";
import useDisclosure from "@/hooks/useDisclosure";

function CategorySelector({ register }: { register: any }) {
  const [isCatOpen, { toggle }] = useDisclosure();
  return (
    <div
      className={`bg-white dark:bg-darker rounded-xl col-span-2 lg:col-span-1  p-5 
     overflow-hidden ${isCatOpen ? "" : "h-17"}`}
    >
      <div
        className={`flex items-center justify-between ${
          isCatOpen
            ? ` mb-5 pb-5 border-b
         border-b-neutral-200/60 dark:border-b-white/10`
            : ""
        }
         `}
      >
        <div className="flex items-center gap-x-2 font-DanaBold">
          <FolderOpenIcon className="size-7" />
          <span>دسته بندی دوره ها</span>
        </div>
        <button type="button" onClick={() => toggle()}>
          <ChevronDownIcon className={`size-5.5 ${isCatOpen && "rotate-180"}`} />
        </button>
      </div>
      <div className={`${isCatOpen ? "space-y-4.5" : "hidden"}`}>
        <SimpleCheckBox
          register={register}
          id="front-End"
          name="front-End"
          type="checkbox"
          label="فرانت اند"
          required={false}
          errors={""}
        />
        <SimpleCheckBox
          register={register}
          id="back-End"
          name="back-End"
          type="checkbox"
          label="فرانت اند"
          required={false}
          errors={""}
        />
        <SimpleCheckBox
          register={register}
          id="security"
          name="security"
          type="checkbox"
          label="فرانت اند"
          required={false}
          errors={""}
        />
      </div>
    </div>
  );
}

export default CategorySelector;
