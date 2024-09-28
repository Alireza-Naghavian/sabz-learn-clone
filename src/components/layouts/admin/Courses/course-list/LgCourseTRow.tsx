import Table from '@/components/ui/Table/Table';
import { useAlert } from '@/context/AlertProvider';
import useDisclosure from '@/hooks/useDisclosure';
import { useRemoveCoursesMutation } from '@/services/course&Categories/courseApiSlice';
import { CourseDataTable } from '@/types/services/course&category.t';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useState } from 'react';
import DeleteModal from '../../modals/DeleteModal';
import EditModal from '../../modals/EditModal';
import EditCourseForm from '../CourseForm/EditCourseForm';

function LgCourseTRow(
  {categoryID,creator
  ,name,price,status,shortName
  ,index,registers,_id}:
   CourseDataTable&{index:number}) {
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
    const [removeCourse, { isLoading }] = useRemoveCoursesMutation();
    const [isEditOpen,{open,close}]  = useDisclosure();
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

    <Table.Row variant='singleHead' 
    className='!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100'>
      <td className='lg:block hidden'>{index}</td>
      <td>{name}</td>
      <td className='lg:block hidden'>{creator}</td>
      <td>{price.toLocaleString("fa-Ir")} تومان</td>
      <td>{registers} نفر</td>
      <td className='bg-baseColor p-1 rounded-xl'>{status === "inProgress" ? "درحال برگزاری":"پیش فروش"}</td>
      <td>{categoryID.title}</td>
      <td><PencilSquareIcon onClick={()=>open()} className='text-secondary size-6 cursor-pointer'/></td>
      <td><TrashIcon onClick={()=>setIsDeleteOpen(true)} className=' text-red-500 size-6 cursor-pointer'/></td>
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

export default LgCourseTRow