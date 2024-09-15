"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import style from "./searchbox.module.css";
import Button from "../button/Button";
import useDisclosure from "@/hooks/useDisclosure";
import Overlay from "../Overlay/Overlay";
function SearchBox({className}:{className?:string}) {
const [isBoxOpen,{open,close}] = useDisclosure();
  return (
    <>
    <Overlay onClose={()=>close()} openCondition={isBoxOpen} />
      <div className="relative group hidden  lg:block">
        <div className="xl:block hidden">
        <SearchForm className="hidden lg:block "  placeholder="جی میخوای یاد بگیری؟"/>
        </div>
        <div className="block xl:hidden">
          {/* lg trigger */}
          <Button type="button" size="xl" className={isBoxOpen? "!relative !z-50":""} onClick={()=>open()}>
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>

          {/* lg render form ? */}
          <div className={ `absolute -left-24 top-full mt-6  transition-all ${isBoxOpen ? 'z-50 ' : "hidden"}` }>
            <SearchForm className="hidden lg:block" placeholder="جستجوی  ..." />
          </div>
        </div>
      </div>
    </>
  );
}

export const SearchForm = ({placeholder,className}:{placeholder:string,className:string}) => {
  return (
    <form className={className}>
      <label className={"relative h-13 block rounded-full"}>
        <input
          type="text"
          placeholder={placeholder}
          className={`${style.search_box_input} dark:bg-white/5 w-full 
           bg-gray-200 rounded-full focus:outline-none text-slate-500  dark:text-white`}
        />
      </label>
      <button role="button" className={style.search_box__btn}>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
    </form>
  );
};
export default SearchBox;
