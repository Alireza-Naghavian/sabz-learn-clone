import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import style from "./searchbox.module.css";
import Button from "../button/Button";
function SearchBox() {
  return (
    <>
      <div className="relative group hidden lg:block">
        <div className="xl:block hidden">
        <SearchForm />
        </div>
        <div className="block xl:hidden">
          {/* lg trigger */}
          <Button type="button" size="xl">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>

          {/* lg render form ? */}
          <div className="absolute -left-24 top-full pt-4 z-10 transition-all">
            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
}

const SearchForm = () => {
  return (
    <form className="hidden lg:block">
      <label className={"relative h-13 block"}>
        <input
          type="text"
          placeholder="چی میخوای یاد بگیری ؟"
          className={`${style.search_box_input} dark:bg-white/5
           bg-gray-100  focus:outline-none text-slate-500  dark:text-white`}
        />
      </label>
      <button role="button" className={style.search_box__btn}>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
    </form>
  );
};
export default SearchBox;
