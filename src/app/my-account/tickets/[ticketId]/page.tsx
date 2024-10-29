import ChatBox from '@/components/layouts/user-panel/Tickets/singleTicket/ChatBox'
import ReplyFormHandler from '@/components/layouts/user-panel/Tickets/singleTicket/ReplyFormHandler'
import { authUser } from '@/utils/auth/auth'
import { redirect } from 'next/navigation'
import React from 'react'
type ParamsType ={
  ticketId:string
}
export const dynamic = "force-dynamic"
async function page({params}:{params:ParamsType}) {
  const {ticketId} = params
  const user = await authUser();
  if(user ==null && user ==undefined) return redirect("/")
  return (
    <ChatBox ticketId={ticketId}>
      <ReplyFormHandler ticketID={ticketId}/>
    </ChatBox>
  )
}

export default page