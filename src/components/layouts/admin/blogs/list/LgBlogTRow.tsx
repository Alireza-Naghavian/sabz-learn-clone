import Table from '@/components/ui/Table/Table'
import { useAlert } from '@/context/AlertProvider'
import useDisclosure from '@/hooks/useDisclosure'
import { useRemoveArticleMutation } from '@/services/articles/articlesApiSlice'
import { ArticleTableData } from '@/types/services/articles.t'
import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'
import DeleteModal from '../../modals/DeleteModal'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

function LgBlogTRow({createdAt,creator,_id,index,title}:ArticleTableData&{index:number}) {
  const {showAlert}= useAlert();
  const[removeArticle,{isLoading}] = useRemoveArticleMutation();
  const [isDeleteOpen,{open,close}] = useDisclosure();
  const removeHandler = async()=>{
try {
  const result = await removeArticle({_id} as {_id:string}).unwrap();
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
      <td>{creator?.username}</td>
      <td>{new Date(createdAt).toLocaleDateString("fa-IR")}</td>
      <td><TrashIcon onClick={()=>open()} className='size-6 text-red-500 cursor-pointer'/></td>
      {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          removeHandler={removeHandler}
          isLoading={isLoading}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => close()}
          subjectTitle={"مقاله"}
        />
      )}
    </Table.Row>
  )
}

export default LgBlogTRow