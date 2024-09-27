import Table from '@/components/ui/Table/Table'
import { CourseBodyType, CourseDataTable } from '@/types/services/course&category.t'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

function LgCourseTRow({categoryID,cover,creator
  ,name,price,status,index,registers}: CourseDataTable&{index:number}) {

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
      <td><PencilSquareIcon className='text-secondary size-6 cursor-pointer'/></td>
      <td><TrashIcon className=' text-red-500 size-6 cursor-pointer'/></td>
    </Table.Row>


  )
}

export default LgCourseTRow