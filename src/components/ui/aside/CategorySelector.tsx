"use client";
import { ChevronDownIcon, FolderOpenIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import SimpleCheckBox from "../textField&inputs/SimpleCheckBox";
import useDisclosure from "@/hooks/useDisclosure";
import { CatBodytype } from "@/types/services/course&category.t";
import { useRouter, useSearchParams } from "next/navigation";
type CatOptionType = {
  link:string,
  title:string,
  _id:string
}
function CategorySelector({ register,categories }: { register: any,categories:CatBodytype[] }) {
  const [isCatOpen, { toggle }] = useDisclosure();
  const [catQeury,setCatQeury] = useState<CatOptionType>({link:"",title:"",_id:""})
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearchParams = new URLSearchParams(searchParams.toString())
  const catSelectHandler = (data:CatOptionType)=>{
    setCatQeury(data);
      if(urlSearchParams.has("cat") && urlSearchParams.getAll("cat").includes(data._id) ){
        urlSearchParams.delete("cat",data._id.toString())
      }else{
        urlSearchParams.append("cat",data._id.toString())  
      }
      router.replace(`/courses/?${urlSearchParams.toString()}`,{scroll:false})

}

  return (
    <div
      className={`bg-white dark:bg-darker rounded-xl col-span-2 lg:col-span-1  p-5 
     overflow-hidden ${!isCatOpen ? "" : "h-17"}`}
    >
      <div
        className={`flex items-center justify-between ${
          !isCatOpen
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
      <div className={`${!isCatOpen ? "space-y-4.5" : "hidden"}`}>
        {categories && categories.map((category,index)=>{
          return(
            <SimpleCheckBox
            key={index}
            register={register}
            id={category.link}
            name={category.link}
            type="checkbox"
            label={category.title}
            required={false}
            errors={""}
            checked={catQeury.link == category.link && catQeury.title == category.title}
            onChange={()=>catSelectHandler({title:category.title,link:category.link,_id:category._id as string})}
          />
          )
        })}
      </div>
    </div>
  );
}

export default CategorySelector;
