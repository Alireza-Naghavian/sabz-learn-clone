import React from 'react'
import ChatBox from '../../user-panel/Tickets/singleTicket/ChatBox'
import ReplyForm from '../../user-panel/Tickets/singleTicket/ReplyForm'
import { SetState } from '@/types/global.t'

function ReplyModal({ticketId,setIsReplyOpen}:{ticketId:string,setIsReplyOpen:SetState<boolean>}) {
  return (
    <ChatBox ticketId={ticketId}>
        <ReplyForm ticketId={ticketId} setIsReplyOpen={setIsReplyOpen}/>
    </ChatBox>
  )
}

export default ReplyModal