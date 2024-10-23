"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import CountDowntimer from "@/components/ui/CountDowntimer/CountDowntimer";
import Loader from "@/components/ui/loader/Loader";
import { useAlert } from "@/context/AlertProvider";
import useDisclosure from "@/hooks/useDisclosure";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useRegisterCourseMutation } from "@/services/courseRegister/RegisterCourseSlice";
import { TomanIcon } from "@/utils/Icons";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import EditModal from "../admin/modals/EditModal";
import { useGetCourseQuery } from "@/services/course&Categories/courseApiSlice";
type PurchseType = {
  isFree: boolean;
  price: number;
  discount: number;
  _id: string;
  shortName: string;
};
function PurchaseCourse({
  isFree,
  price,
  discount,
  _id,
  shortName,
}: PurchseType) {
  const [isModalOpen, { open, close }] = useDisclosure();
  const { data, isLoading: isUserLoading } = useGetMeQuery();
  const [registerCourse, { isLoading }] = useRegisterCourseMutation();
  const { refetch: refetchCourseData } = useGetCourseQuery({ shortName });
  const { showAlert } = useAlert();
  const router = useRouter();
  const registerHandler = async () => {
    try {
      if ((!isUserLoading && data == undefined) || data?.user == undefined)
        return showAlert("error", "لطفا ثبت نام کنید/وارد شوید");
      const result = await registerCourse({ price, _id }).unwrap();
      showAlert("success", result.message);
      refetchCourseData();
    } catch (error: any) {
      showAlert("error", `خطایی رخ داده است => ${error?.data?.message}`);
    } finally {
      close();
    }
  };
  return (
    <>
      {/* countDown ? */}
      {discount !== 0 && (
        <CountDowntimer
          date={new Date("dec 25, 2024 16:37:52")}
          percent={discount}
        />
      )}
      <div
        className="flex justify-center xl:items-center
          lg:justify-between flex-wrap-reverse gap-y-4 gap-x-6"
      >
        <PrimaryBtn
          type="button"
          variant="fill"
          size="xl"
          className="flex text-lg items-center px-7 !py-2"
          onClick={() => {
            if (isFree) {
              open();
            } else {
              router.push(`/courses/course/register/${shortName}`, {
                scroll: true,
              });
            }
          }}
        >
          <AcademicCapIcon className="size-6" />
          ثبت نام در دوره
        </PrimaryBtn>
        <div className="flex items-end gap-x-2.5">
          {/* offer ? */}

          <span className="text-slate-500 dark:text-white/70 text-xl line-through">
            {discount !== 0
              ? price.toLocaleString("fa-IR")
              : isFree && `${price.toLocaleString("fa-IR")}`}
          </span>

          {/* price*/}
          <span
            className={`font-DanaBold text-2xl flex items-center gap-x-1 ${
              isFree && "text-baseColor"
            }`}
          >
            <span>
              {discount !== 0
                ? (price - Number(price * discount) / 100).toLocaleString(
                    "fa-IR"
                  )
                : !isFree
                ? price.toLocaleString("fa-IR")
                : "رایگان"}
            </span>
            {!isFree ? (
              <TomanIcon className="size-6" />
            ) : (
              discount !== 0 && <TomanIcon className="size-6" />
            )}
          </span>
        </div>
      </div>
      <EditModal
        isOpen={isModalOpen}
        modalTitle="ثبت نام در دوره"
        setIsOpen={() => close()}
        className="md:w-[550px] w-[310px]  sm:w-[430px] !h-[200px]  top-[30%]
           md:h-[250px]"
      >
        <div className="flex flex-col gap-y-2 p-4">
          <p className="font-DanaMedium dark:text-white text-gray-800 text-lg ">
            آیا از ثبت نام در دوره اطمینان دارید ؟
          </p>
          <div className="flex items-center gap-x-4 mr-auto mt-4">
            <PrimaryBtn
              variant="outline"
              className="rounded-lg w-[90px] md:w-[120px] h-[40px]
                      border-red-500 text-red-500 hover:bg-red-500 "
              size="xl"
              onClick={() => close()}
            >
              لغو
            </PrimaryBtn>
            <PrimaryBtn
              variant="fill"
              className="rounded-lg w-[90px] md:w-[120px] h-[40px] "
              onClick={() => registerHandler()}
              size="xl"
            >
              {isLoading ? <Loader loadingCondition={isLoading} /> : "ثبت نام"}
            </PrimaryBtn>
          </div>
        </div>
      </EditModal>
    </>
  );
}

export default PurchaseCourse;
