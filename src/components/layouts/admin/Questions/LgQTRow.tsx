import Table from '@/components/ui/Table/Table'
import { MergeQBody, QuestionSampleType } from '@/types/services/sessions&Topics.t'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import EditModal from '../modals/EditModal'
import ReplyQuestionForm from './ReplyQuestionForm'

function LgQTRow({index,course,creator,session,questions}:MergeQBody&{index:number,questions:QuestionSampleType[]}) {
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
    return (
    <Table.Row
      variant="singleHead"
      className="!hidden md:!grid p-4 odd:dark:bg-darker  even:dark:bg-gray-900
     odd:bg-gray-300/55
    even:bg-gray-100"
    >
      <td
        className={`
          lg:block hidden  relative px-4 py-1 font-DanaBold rounded-lg 
          ${  allMessages[allMessages.length -1]?.isAnswer === true ? 
          "bg-baseColor text-white" : "bg-secondary text-white"} `}>
        {index}
      </td>
      <td>
        {creator.username}
        </td>
      <td className="lg:block hidden text-sm w-full break-words text-wrap">
      {creator.email}
        </td>
      <td className="lg:block hidden">
        {course.name}
      </td>
      <td className="">
      {session.title}
      </td>
      <td className="">
        <PencilSquareIcon
          onClick={() => setIsReplyOpen(true)}
          className="text-baseColor size-7 cursor-pointer"
        />
      </td>
      <td className="">
      <TrashIcon
        // onClick={() => setIsDeleteOpen(true)}
        className=" text-red-500 size-6 cursor-pointer"
      />
      </td>
    
      {/* {_id !== undefined && (
        <DeleteModal
          identifier={_id}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={() => setIsDeleteOpen(false)}
          isLoading={isRemoveLoading}
          removeHandler={removeHandler}
          subjectTitle="کامنت"
        />
      )}
        */}
      <EditModal
        className="!h-auto"
        modalTitle="ارسال پاسخ"
        isOpen={isReplyOpen}
        setIsOpen={() => setIsReplyOpen(false)}

      >

       <ReplyQuestionForm    setIsReplyOpen={setIsReplyOpen} allMessages={allMessages} sessionId={session._id as string}/>
      </EditModal> 
    </Table.Row>

)
}

export default LgQTRow
