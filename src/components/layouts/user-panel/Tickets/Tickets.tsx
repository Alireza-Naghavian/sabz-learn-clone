"use client";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import Tail_stat_info from "@/components/ui/tail-info/Tail_stat_info";
import TailSkelton from "@/components/ui/TailSkelton/TailSkelton";
import { useUserTicketsQuery } from "@/services/tickets&depts/ticketApiSlice";
import {
  ContentType,
  TicketStType
} from "@/types/services/tickets.t";
import { ticketStatus } from "@/utils/constants";
import {
  ChatBubbleLeftIcon,
  EnvelopeOpenIcon,
  PlusCircleIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ContentList from "../ContentList";

function Tickets() {
  const { data, isLoading } = useUserTicketsQuery();
  const openTickets = data?.filter((ticket)=>ticket.isOpen).length
  const closedTicket =  Number(data?.length) - Number(openTickets )
  return (
    <>
      {isLoading ? (
        <TailSkelton count={4} />
      ) : (
        <div
          className="flex dark:bg-darker
            bg-gray-300/65  flex-wrap gap-x-3
              gap-y-4 md:gap-x-10"
        >
          <Tail_stat_info
            supTitle="همه تیکت ها"
            title={`${data?.length} تیکت`}
            Icon={TicketIcon}
            className="dark:bg-yellow-400 bg-amber-400"
          />
          <Tail_stat_info
            supTitle="تیکت های باز"
            title={`${openTickets} تیکت`}
            Icon={EnvelopeOpenIcon}
            className="dark:bg-secondary bg-sky-500"
          />
          <Tail_stat_info
            supTitle="بسته شده"
            title={`${closedTicket} تیکت`}
            Icon={ChatBubbleLeftIcon}
            className="dark:bg-rose-500 bg-pink-500"
          />
          <Link
            href={"/my-account/tickets/add"}
            className="flex items-center gap-x-3
                      w-full xs:w-auto font-danaDemiBold text-xl
                    text-white bg-sky-500 dark:bg-secondary
                      p-4 md:p-6 rounded-2xl"
          >
            <PlusCircleIcon className="size-8" />
            <span>تیکت جدید</span>
          </Link>
        </div>
      )}

      <div className="mt-7">
        <ContentList title="تیکت ها">
          {data?.length === 0 ? (
            <EmptyResult
              className="py-2"
              title={"هیچ تیکتی توسط شما ایجاد نشده است"}
            />
          ) : (
            data?.map((ticket, index) => {
              return (
                <TicketItem
                  key={index}
                  date={ticket.createdAt}
                  target={`/my-account/tickets/${ticket._id}`}
                  dept={ticket.departmentID.title}
                  isAnswer={ticket.isAnswer}
                  isOpen={ticket.isOpen}
                  isPending={ticket.isPending}
                  status="بسته شده"
                  title={ticket.title}
                />
              );
            })
          )}
        </ContentList>
      </div>
    </>
  );
}

const TicketItem = ({
  isAnswer,
  isOpen,
  target,
  date,
  isPending,
  title,
  dept,
}: ContentType) => {
  const ticketCurrCondition = {isPending,isAnswer,isOpen};
  const ticketCondition = ticketStatus.find((ticketSt) => {
    return JSON.stringify(ticketSt.cond) == JSON.stringify(ticketCurrCondition);
  });

  return (
    <div
      className="flex items-center 
        justify-between flex-wrap gap-y-3 p-3
         hover:bg-gray-100
         dark:hover:bg-gray-700 rounded-xl
          transition-colors"
    >
      <div className="flex items-center">
        <Link
          className="text-zinc-700
         dark:text-white w-full
         font-DanaMedium sm:max-w-md
          md:truncate"
          href={target}
        >
          {title}
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-xs text-slate-500 dark:text-slate-400 text-right">
          {new Date(date as Date).toLocaleDateString("fa-IR")}
        </span>
        <TicketBadge title={dept} className="bg-yellow-400/55" />
        <TicketBadge
          className={ticketCondition?.className}
          isOpen={ticketCondition?.cond.isOpen as boolean}
          isPending={ticketCondition?.cond.isPending as boolean}
          isAnswer={ticketCondition?.cond.isAnswer as boolean}
        />
      </div>
    </div>
  );
};

const TicketBadge = ({ className, title,isAnswer,isOpen,isPending }: TicketStType) => {
  return (
    <span
      className={`text-xs py-1 px-1.5 text-white rounded ${className}`}
    >
      {title ? title : 

        isOpen && isAnswer ?"پاسخ داده شد" :
        isOpen && isPending ? "منتظر پاسخ":
        !isOpen && "بسته شد"
     
      }
    </span>
  );
};



export default Tickets;
