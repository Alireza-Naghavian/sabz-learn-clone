import { Btn_sheet_type } from "@/types/buttons.t";
import { SortOption } from "@/utils/constants";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Overlay from "../Overlay/Overlay";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Btn_sort_sheet({ setSort, sort, isOpen, setIsOpen,categoryName,directPath }: Btn_sheet_type) {
  const searchParams = useSearchParams();

  
  const urlSearchParams = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  const sortHandler = (title:string,label:string)=>{
    setSort({label,title})
    urlSearchParams.set("sort",label);
    router.replace(
      directPath === "category" ? `/courses/category/${categoryName}/?${urlSearchParams.toString()}` : 
      `/courses/?${urlSearchParams.toString()}`
      ,{scroll:false})
  }
  return (
    <>
    <Overlay onClose={()=>setIsOpen(false)} openCondition={isOpen}/>
    <div className={`${isOpen ? "bottom-sheet bottom-sheet--open" : "bottom-sheet"}`}>
      <div className="bottom-sheet__header">
        <button className="bottom-sheet__close-btn" onClick={()=>setIsOpen(false)}>
          <XMarkIcon className="size-6" />
        </button>
        <span className="bottom-sheet__name">مرتب سازی بر اساس</span>
      </div>
      <div className="sort-list bottom-sheet__body">
        {SortOption.map((option, index) => {
          return (
            <button
              key={index}
              onClick={()=>sortHandler(option.title,option.label)}
              className={`sort-select-btn bottom-sheet__item 
                    bottom-sheet__item--selected`}
            >
              <span>{option.title}</span>
              {option.label === sort.label && <CheckIcon className={`size-5 `} />}
            </button>
          );
        })}
      </div>
    </div>
    </>

  );
}

export default Btn_sort_sheet;
