import ChatBox from '@/components/layouts/user-panel/Tickets/singleTicket/ChatBox'
import ReplyFormHandler from '@/components/layouts/user-panel/Tickets/singleTicket/ReplyFormHandler'
type ParamsType ={
  ticketId:string
}
 export const dynamic = "force-dynamic"
 function page({params}:{params:ParamsType}) {
  const {ticketId} = params
  return (
    <ChatBox ticketId={ticketId}>
      <ReplyFormHandler ticketID={ticketId}/>
    </ChatBox>
  )
}

export default page