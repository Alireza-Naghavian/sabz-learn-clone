import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import CompoundModal from "@/components/ui/Modal/Modal";
import { DeleteModalType } from "@/types/modals.t";
import React from "react";

function DeleteModal({
  isDeleteOpen,
  removeHandler,
  setIsDeleteOpen,
  subjectTitle,
  identifier,
  isLoading,
}: DeleteModalType) {
  return (
    <CompoundModal
      className="sm:w-[500px] w-[90vw] top-[30%] "
      effect="ease_out"
      isShow={isDeleteOpen}
      onClose={setIsDeleteOpen}
    >
      <CompoundModal.Header onClose={setIsDeleteOpen}>
        <div className=""></div>
      </CompoundModal.Header>
      <CompoundModal.Body>
        <div className="flex flex-col gap-y-2">
          <p className="text-right font-Shabnam_M  p-5">
            آیا از حذف {subjectTitle} اطمینان دارید؟
          </p>
          <div className="flex items-center gap-x-5 pb-4 pl-2 justify-end w-full">
            <PrimaryBtn
              type="button"
              onClick={() => setIsDeleteOpen()}
              size="lg"
              variant="outline"
              className="!w-[90px] "
            >
              لغو
            </PrimaryBtn>
            <PrimaryBtn
              size="lg"
              type="button"
              variant="fill"
              className="!w-[90px] bg-red-500 hover:bg-red-600"
              onClick={() => {
                if (identifier === undefined) return;
                removeHandler(identifier);
              }}
            >
              {isLoading ? <Loader loadingCondition={isLoading} /> : "حذف"}
            </PrimaryBtn>
          </div>
        </div>
      </CompoundModal.Body>
    </CompoundModal>
  );
}

export default DeleteModal;
