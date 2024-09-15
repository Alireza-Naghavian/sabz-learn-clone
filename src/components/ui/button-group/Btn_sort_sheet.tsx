import { Btn_sheet_type } from "@/types/buttons.t";
import { SortOption } from "@/utils/constants";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Overlay from "../Overlay/Overlay";

function Btn_sort_sheet({ setSort, sort, isOpen, setIsOpen }: Btn_sheet_type) {
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
              onClick={()=>setSort({title:option.title,label:option.label})}
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
