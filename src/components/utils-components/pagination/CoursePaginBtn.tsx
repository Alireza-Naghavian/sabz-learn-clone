"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import Loader from "@/components/ui/loader/Loader";
import { SetState } from "@/types/global.t";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function CoursePaginBtn({
  setPage,
  isFetching,
}: {
  page: number;
  setPage: SetState<number>;
  isFetching: boolean;
}) {
  return (
    <PrimaryBtn
      className=" px-10 py-4 box-center"
      size="xxl"
      variant="fill"
      type="button"
      onClick={() => setPage((prev) => prev + 1)}
      disabled={isFetching}
    >
      <span className="text-base font-DanaBold">مشاهده بیشتر</span>
      {isFetching ? (
        <Loader loadingCondition={isFetching} />
      ) : (
        <ChevronDownIcon className="size-7   font-DanaBold" />
      )}
    </PrimaryBtn>
  );
}

export default CoursePaginBtn;
