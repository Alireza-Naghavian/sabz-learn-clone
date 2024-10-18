import Table from '@/components/ui/Table/Table'
import { useAlert } from '@/context/AlertProvider'
import { useRemoveUserQuestionMutation } from '@/services/sessions&topics/userQuestionsSlice'
import { MergeQBody, QuestionSampleType } from '@/types/services/sessions&Topics.t'
import React, { useState } from 'react'
import { RemoveQueryType } from './LgQTRow'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import DeleteModal from '../modals/DeleteModal'
import EditModal from '../modals/EditModal'
import ReplyQuestionForm from './ReplyQuestionForm'

function SmQTRow({course,creator,session,questions}:MergeQBody&{questions:QuestionSampleType[]}) {
  const [allMessages,setAllMessage]=useState(()=>{
    const mergedMessages = questions.flatMap((messages)=>{
      const userMsg = {
        ...messages,
        isAdmin:false
      }
      const adminMsgs = (messages.adminAnswers || []).map((adminMsg:any) => ({
        ...adminMsg,
        isAdmin: true,
      }));
      return [userMsg,...adminMsgs]
    })
    return mergedMessages.sort((a,b)=>new Date(a.date).getTime() - new Date(b.date).getTime())
  })
  const [isReplyOpen,setIsReplyOpen] = useState(false)
  const [isDeleteOpen,setIsDeleteOpen] = useState(false)
  const {showAlert} = useAlert();
  const [removeQuestion,{isLoading:isRemoveLoading}] = useRemoveUserQuestionMutation();

  const removeHandler = async()=>{
    try {
      const result = await removeQuestion({_id:session._id ,userId:creator._id} as RemoveQueryType).unwrap();
      showAlert("success",result.message)
    } catch (error) {
    showAlert("error","خطایی در حذف پرسش رخ داده است")   
    }
  }
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
    <td className="flex items-center justify-between w-full">
      <span
        className={`font-DanaBold !ml-3 px-2 rounded-lg
       text-gray-200  ${allMessages[allMessages.length -1]?.isAnswer === true ? 
          "bg-baseColor text-white" : "bg-secondary text-white"}`}
      >
        {creator.username}
      </span>
      <span className="text-right flex  items-center my-auto gap-x-4  mr-auto !mb-4">
        <button
          onClick={() => setIsDeleteOpen(true)}
          className="  my-auto h-full text-3xl text-red-500   w-fit flex justify-center"
        >
          <TrashIcon
        className=" text-red-500 size-6 cursor-pointer"
      />
        </button>
        <button
          onClick={() => setIsReplyOpen(true)}
          className="  my-auto h-full text-3xl text-blue-500   w-fit flex justify-center"
        >
         <PencilSquareIcon
          className="text-baseColor size-7 cursor-pointer"
        />
        </button>
      </span>
    </td>
    <td className="flex flex-col w-full ">
      <span
        className="flex flex-col gap-y-2 child:pt-1  child:flex 
              child:justify-between child:items-center child:w-full
               child:text-sm  child:pb-[2px]  child:child:pb-[2px]"
      >
        <span className="font-DanaBold">
          <span>دوره:</span>
        {course.name}
        </span>
        <span className="font-DanaBold">
          <span>جلسه:</span>
          {session.title}
        </span>   
      </span>
    </td>
    {session._id !== undefined && (
        <DeleteModal
          identifier={session._id}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => setIsDeleteOpen(false)}
          isLoading={isRemoveLoading}
          removeHandler={removeHandler}
          subjectTitle="پرسش"
        />
      )}
       
      <EditModal
        className="!h-auto"
        modalTitle="ارسال پاسخ"
        isOpen={isReplyOpen}
        setIsOpen={() => setIsReplyOpen(false)}>
       <ReplyQuestionForm    setIsReplyOpen={setIsReplyOpen} allMessages={allMessages} sessionId={session._id as string}/>
      </EditModal> 
  </Table.Row>
  )
}

export default SmQTRow