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
      className={` sm:mt-0  mt-[1.75rem] flex justify-center gap-4 top-0`}
    >
      <Button
        size="lg"
        type="button"
        id={prevClass}
        className={`${styles.section_Title_Nav_Btn} box-center group  `}
      >
        <ChevronRightIcon
          className={`group-hover:text-white  ${styles.section_Title_Nav_Icon}`}
        />
      </Button>
      <Button
        size="lg"
        id={nextClass}
        type="button"
        className={`${styles.section_Title_Nav_Btn} box-center group  `}
      >
        <ChevronLeftIcon
          className={`group-hover:text-white  ${styles.section_Title_Nav_Icon}`}
        />
      </Button>
    </div>
  );
};

export default Nav_Btns;
