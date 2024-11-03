import Table from '@/components/ui/Table/Table'
import { useAlert } from '@/context/AlertProvider'
import { useRemoveCoursesMutation } from '@/services/course&Categories/courseApiSlice'
import { CourseDataTable } from '@/types/services/course&category.t'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/solid'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import React, { useState } from 'react'
import DeleteModal from '../../modals/DeleteModal'
import EditModal from '../../modals/EditModal'
import EditCourseForm from '../CourseForm/EditCourseForm'
import useDisclosure from '@/hooks/useDisclosure'

function SmCourseTRow(
  {creator,
  _id,
  name,price,
  shortName,
  status,registers}
  : CourseDataTable) {
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [isEditOpen,{open,close}]  = useDisclosure();
    const [removeCourse, { isLoading }] = useRemoveCoursesMutation();
    const { showAlert } = useAlert();
    const removeHandler = async () => {
      try {
        const result = await removeCourse({ _id } as { _id: string }).unwrap();
        showAlert("success", result.message);
      } catch (error) {
        const fetchError = error as FetchBaseQueryError;
        const errorMessage = (fetchError as { message?: string })?.message;
        if (errorMessage) {
          showAlert("error", errorMessage);
        } else {
          showAlert("error", "خطایی رخ داده است");
        }
      } finally {
        setIsDeleteOpen(false);
      }
    };
  return (


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
        <span className="font-DanaBold  text-right  ">
          {name}
            </span>
        <span
          className="text-right flex justify-between items-center
         my-auto gap-x-2  !mb-2"
        >
          <button
            onClick={() => setIsDeleteOpen(true)}
            className="mr-auto  my-auto h-full text-2xl text-red-500  
             w-fit flex justify-center">
            <TrashIcon className='size-6 text-red-500'/>
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
            <span>مدرس:</span>
            <span className="xs:max-w-[150px] sm:max-w-[330px] text-wrap line-clamp-1">
         {creator?.username}
            </span>
          </span>
          <span className="">
            <span>مبلغ (تومان):</span>
            <span>
             {price.toLocaleString("fa-IR")}
            </span>
          </span>
          <span className="">
            <span>ثبت نامی:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">
             {registers} نفر
              </span>
            </span>
          </span>
          <span className="">
            <span>وضعیت:</span>
            <span className="font-Shabnam_B">
              <span className=" text-mute">
             {status =="inProgress"?"درحال برگزاری":"پیش فروش"} 
              </span>
            </span>
          </span>
          <span className="">
            <span>ویرایش:</span>
            <button
                onClick={() => open()}
              className="text-2xl text-blue-500"
            >
            <PencilSquareIcon className='text-secondary size-6 cursor-pointer'/>
            </button>
          </span>
        </span>
      </td>
      {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          removeHandler={removeHandler}
          isLoading={isLoading}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => setIsDeleteOpen(false)}
          subjectTitle="دوره"
        />
      )}
          <EditModal
        className="!h-auto sm:!w-[60%]"
        modalTitle="ویرایش دوره"
    
        isOpen={isEditOpen}
        setIsOpen={() => close()}
      >
        <EditCourseForm shortName={shortName} _id={_id as string}/>
      </EditModal>
    </Table.Row>
  
 
    

  )
}

export default SmCourseTRow