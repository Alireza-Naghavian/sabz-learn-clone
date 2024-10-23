import Table from '@/components/ui/Table/Table'
import { TicketBodyType, TicketTableData } from '@/types/services/tickets.t'
import { ticketStatus } from '@/utils/constants'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { CircleStackIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import EditModal from '../modals/EditModal'
import ReplyModal from './ReplyModal'

function LgTicketTRow({_id,departmentID,index,title,isAnswer,isOpen,isPending,user}:TicketTableData&{index:number}) {
  const [isReplyOpen,setIsReplyOpen] = useState(false)
  let ticketCurrCondition = {
     isPending:isPending as boolean,
     
     isAnswer:isAnswer as boolean,
     isOpen:isOpen as boolean,
  };
  const ticketCondition = ticketStatus.find((ticketSt) => {
    return JSON.stringify(ticketSt.cond) as string === JSON.stringify(ticketCurrCondition) as string;
  });


  return (
    <Table.Row variant='singleHead' 
    className='!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100'>
      <td className={` p-2 rounded-md font-DanaBold  ${ticketCondition?.className as string} `}>{index}</td>
      <td>{user.username}</td>
      <td className='line-clamp-2 text-sm'>{title}</td>
      <td className='dark:text-secondary text-gray-900'>{departmentID.title}</td>
      <td className={` px-2 py-1  text-white rounded-xl ${isOpen == false ? "bg-red-500" : "bg-baseColor/75"}`}>{isOpen === false ? "بسته شده" : "باز"}</td>
      <td><PencilSquareIcon onClick={()=>setIsReplyOpen(true)} className='size-6 text-secondary cursor-pointer'/></td>
      <td  className='flex items-center gap-x-1 h-full'>
        <TrashIcon className='text-red-500 size-6  cursor-pointer'/>
        <span className='p-px h-full w-[2px] dark:bg-white '></span>
        <XCircleIcon className='size-6 text-red-500 cursor-pointer'/> 
      </td>
      <EditModal
      isOpen={isReplyOpen}
      setIsOpen={()=>setIsReplyOpen(false)}
      modalTitle='پاسخ به تیکت'
      className="!w-[100%] !h-[92%]  overflow-y-auto py-2 !top-[2%]"
      >
        <div className="">
          <ReplyModal ticketId={_id as string} setIsReplyOpen={setIsReplyOpen}/>
        </div>
      </EditModal>
    </Table.Row>
  )
}

export default LgTicketTRow