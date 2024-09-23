import Table from "@/components/ui/Table/Table";
import React from "react";

function SmSessionTRow() {
  return (
    <>
      <Table.Row
        className="my-4 child:my-auto
        !flex flex-col md:!hidden gap-y-1
      h-full  w-full  
    odd:dark:bg-dark  even:dark:bg-gray-900
    odd:bg-gray-400/50
    even:bg-gray-300 px-4 
       py-2"
        variant="singleHead"
      >
        <td className="flex items-center justify-between w-full  ">
          <span className="font-DanaBold   ">
            alirezangh
            {/* {user?.userName} */}
          </span>
          <span
            className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
          >
            <button
              // onClick={() => setIsDeleteOpen(true)}
              className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center"
            >
              {/* <MdDelete /> */}
            </button>
          </span>
        </td>
        <td className="flex flex-col w-full ">
          <span
            className="flex flex-col gap-y-4  child:flex 
                child:justify-between child:items-center child:w-full
                 child:text-sm  child:pb-[2px] child:child:pb-[2px]"
          >
            <span className="">
              <span>ایمیل:</span>
              <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
                {/* {user?.email} */}
              </span>
            </span>
            <span className="">
              <span>تراکنش ها:</span>
              <span>
                {/* {user?.userCart?.length.toLocaleString("fa-Ir")}  */}
                عدد
              </span>
            </span>
            <span className="">
              <span>نقش:</span>
              <span className="font-Shabnam_B">
                <span className=" text-mute">
                  {/* {user?.role === "ADMIN" ? "ادمین" : "کاربر عادی"} */}
                </span>
              </span>
            </span>
            <span className="">
              <span>بن کردن:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
            <span className="">
              <span>تغییر سطح:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
          </span>
        </td>
      </Table.Row>
      <Table.Row
        className="my-4 child:my-auto
        !flex flex-col md:!hidden gap-y-1
      h-full  w-full  
    odd:dark:bg-dark  even:dark:bg-gray-900
    odd:bg-gray-400/50
    even:bg-gray-300 px-4 
       py-2"
        variant="singleHead"
      >
        <td className="flex items-center justify-between w-full  ">
          <span className="font-DanaBold   ">
            alirezangh
            {/* {user?.userName} */}
          </span>
          <span
            className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
          >
            <button
              // onClick={() => setIsDeleteOpen(true)}
              className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center"
            >
              {/* <MdDelete /> */}
            </button>
          </span>
        </td>
        <td className="flex flex-col w-full ">
          <span
            className="flex flex-col gap-y-4  child:flex 
                child:justify-between child:items-center child:w-full
                 child:text-sm  child:pb-[2px] child:child:pb-[2px]"
          >
            <span className="">
              <span>ایمیل:</span>
              <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
                {/* {user?.email} */}
              </span>
            </span>
            <span className="">
              <span>تراکنش ها:</span>
              <span>
                {/* {user?.userCart?.length.toLocaleString("fa-Ir")}  */}
                عدد
              </span>
            </span>
            <span className="">
              <span>نقش:</span>
              <span className="font-Shabnam_B">
                <span className=" text-mute">
                  {/* {user?.role === "ADMIN" ? "ادمین" : "کاربر عادی"} */}
                </span>
              </span>
            </span>
            <span className="">
              <span>بن کردن:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
            <span className="">
              <span>تغییر سطح:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
          </span>
        </td>
      </Table.Row>
      <Table.Row
        className="my-4 child:my-auto
        !flex flex-col md:!hidden gap-y-1
      h-full  w-full  
    odd:dark:bg-dark  even:dark:bg-gray-900
    odd:bg-gray-400/50
    even:bg-gray-300 px-4 
       py-2"
        variant="singleHead"
      >
        <td className="flex items-center justify-between w-full  ">
          <span className="font-DanaBold   ">
            alirezangh
            {/* {user?.userName} */}
          </span>
          <span
            className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
          >
            <button
              // onClick={() => setIsDeleteOpen(true)}
              className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center"
            >
              {/* <MdDelete /> */}
            </button>
          </span>
        </td>
        <td className="flex flex-col w-full ">
          <span
            className="flex flex-col gap-y-4  child:flex 
                child:justify-between child:items-center child:w-full
                 child:text-sm  child:pb-[2px] child:child:pb-[2px]"
          >
            <span className="">
              <span>ایمیل:</span>
              <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
                {/* {user?.email} */}
              </span>
            </span>
            <span className="">
              <span>تراکنش ها:</span>
              <span>
                {/* {user?.userCart?.length.toLocaleString("fa-Ir")}  */}
                عدد
              </span>
            </span>
            <span className="">
              <span>نقش:</span>
              <span className="font-Shabnam_B">
                <span className=" text-mute">
                  {/* {user?.role === "ADMIN" ? "ادمین" : "کاربر عادی"} */}
                </span>
              </span>
            </span>
            <span className="">
              <span>بن کردن:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
            <span className="">
              <span>تغییر سطح:</span>
              <button
                //   onClick={() => setIsRoleOpen(true)}
                className="text-2xl text-blue-500"
              >
                {/* <FaEdit /> */}
              </button>
            </span>
          </span>
        </td>
      </Table.Row>
    </>
  );
}

export default SmSessionTRow;
