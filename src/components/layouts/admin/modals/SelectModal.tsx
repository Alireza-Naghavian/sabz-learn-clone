

import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import CompoundModal from "@/components/ui/Modal/Modal";
import Select from "@/components/utils-components/Select/Select";
import { SelectModalType } from "@/types/modals.t";
import React from "react";

function SelectModal({
  isLoading,
  isOpen,
  modalTitle,
  selectHanlder,
  setIsOpen,
  subjectTitle,
  value,
  onSelectChange,
  options
}: SelectModalType) {
  return(
    <CompoundModal
    effect="ease_out"
    isShow={isOpen}
    onClose={setIsOpen}
    className="md:w-[550px] w-[310px]  sm:w-[380px]  
              overflow-y-auto top-[40%] bg-slate-100"
  >
    <CompoundModal.Header className=" mt-2" onClose={setIsOpen}>
      <div className="pr-4  ">
        <span className="text-lg font-DanaMedium">{modalTitle}</span>
      </div>
    </CompoundModal.Header>
    <CompoundModal.Body>
      <form
      onSubmit={selectHanlder}
        className="flex flex-col gap-y-4 
                  justify-center px-6 my-4">
        <Select
        className="bg-gray-100 dark:bg-dark  shadow-sm appearance-auto !gap-y-0 px-4  !py-3 !mt-0  text-sm  
           focus:outline-none rounded-md"
          onChange={onSelectChange}
          value={value}
          selectTitle={subjectTitle}
          options={options}
        />
        <PrimaryBtn size="md" type="submit" variant="fill">
          {isLoading ? <Loader loadingCondition={isLoading}/>:"اعمال"}
        </PrimaryBtn>
      </form>
    </CompoundModal.Body>
  </CompoundModal>
  );
}

export default SelectModal;
