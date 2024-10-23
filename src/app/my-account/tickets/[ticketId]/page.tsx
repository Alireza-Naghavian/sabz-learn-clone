import ChatBox from '@/components/layouts/user-panel/Tickets/singleTicket/ChatBox'
import ReplyFormHandler from '@/components/layouts/user-panel/Tickets/singleTicket/ReplyFormHandler'
import React from 'react'
type ParamsType ={
  ticketId:string
}
function page({params}:{params:ParamsType}) {
  const {ticketId} = params
  return (
    <ChatBox ticketId={ticketId}>
      <ReplyFormHandler ticketID={ticketId}/>
    </ChatBox>
  )
}

export default page