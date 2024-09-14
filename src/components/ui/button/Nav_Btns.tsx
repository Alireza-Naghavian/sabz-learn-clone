"use client"
import styles from "@/components/ui/SectionTitle/sectionTitle.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
export type Nav_BtnsType ={
  nextClass:string
  prevClass:string
}
const Nav_Btns = ({nextClass,prevClass}:Nav_BtnsType) => {

  return (
    <div
      className={`absolute  sm:left-[.625rem]
    sm:mt-0 left-[1rem] mt-[1.75rem] flex justify-center gap-4 top-0`}
    >
      <Button
        size="lg"
        type="button"
        className={`${styles.section_Title_Nav_Btn} box-center group ${prevClass} `}
      >
        <ChevronRightIcon
          className={`group-hover:text-white  ${styles.section_Title_Nav_Icon}`}
        />
      </Button>
      <Button
        size="lg"
        type="button"
        className={`${styles.section_Title_Nav_Btn} box-center group ${nextClass} `}
      >
        <ChevronLeftIcon
          className={`group-hover:text-white  ${styles.section_Title_Nav_Icon}`}
        />
      </Button>
    </div>
  );
};

export default Nav_Btns;
