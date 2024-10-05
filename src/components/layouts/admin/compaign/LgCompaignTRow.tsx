import Table from '@/components/ui/Table/Table'
import { useAlert } from '@/context/AlertProvider'
import useDisclosure from '@/hooks/useDisclosure'
import { useRemoveCompaignMutation } from '@/services/compaigns/compaignSlice'
import { CompaignTableData } from '@/types/services/compaign.t'
import { TrashIcon } from '@heroicons/react/24/solid'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import React from 'react'
import DeleteModal from '../modals/DeleteModal'

function LgCompaignTRow({endDate,index,title,_id,discount,active}:CompaignTableData&{index:number}) {
  const {showAlert} = useAlert();
  const [removeCompaign,{isLoading}]= useRemoveCompaignMutation();
  const [isDeleteOpen,{open,close}] = useDisclosure();
  const removeHandler= async()=>{
    try {
      const result = await removeCompaign({_id} as {_id:string}).unwrap();
      showAlert("success",result.message)
    } catch (error) {
      const fetchError = error as FetchBaseQueryError;
      const errorMessage = (fetchError as { message?: string })?.message;
      if (errorMessage) {
        showAlert("error", errorMessage);
      } else {
        showAlert("error", "خطایی رخ داده است");
      }
    }finally{
      close();
    }
  }
  return (
    <Table.Row variant='singleHead' 
    className='!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100'>
      <td>{index}</td>
      <td>{title}</td>
      <td>{new Date(endDate).toLocaleDateString("fa-IR",{dateStyle:"full"})}</td>
      <td>{discount}%</td>
      <td className={`${active? "bg-baseColor":"bg-secondary"}
       p-1 rounded-xl`}>{active ? "درحال برگزاری" : "به اتمام رسیده"}</td>
      <td><TrashIcon onClick={()=>open()} className='text-red-500 
      cursor-pointer size-6'/></td>
      {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          removeHandler={removeHandler}
          isLoading={isLoading}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => close()}
          subjectTitle={"کمپین"}
        />
      )}
    </Table.Row>
  )
}

export default LgCompaignTRow