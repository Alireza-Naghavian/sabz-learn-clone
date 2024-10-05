import Tail_stat_info from "@/components/ui/tail-info/Tail_stat_info";
import {
  ChatBubbleLeftIcon,
  EnvelopeOpenIcon,
  PlusCircleIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ContentList from "../ContentList";

function Tickets() {
  return (
    <>
      <div
        className="flex dark:bg-darker
     bg-gray-300/65  flex-wrap gap-x-3
     gap-y-4 md:gap-x-10"
      >
        <Tail_stat_info
          supTitle="همه تیکت ها"
          title="۹ عدد"
          Icon={TicketIcon}
          className="dark:bg-yellow-400 bg-amber-400"
        />
        <Tail_stat_info
          supTitle="تیکت های باز"
          title="۴ تیکت"
          Icon={EnvelopeOpenIcon}
          className="dark:bg-secondary bg-sky-500"
        />
        <Tail_stat_info
          supTitle="بسته شده"
          title="۱۲ تیکت"
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
      <div className="mt-7">
        <ContentList title="تیکت ها">
            <TicketItem
            date={new Date}
            TicketLink=""
            dept="پشتیبانی"
            status="بسته شده"
            title="عدم پخش ویدئو"
            />
        </ContentList>
      </div>
    </>
  );
}

type TicketItem_type = {
  dept: string;
  title: string;
  status: string;
  date: Date;
  TicketLink: string;
};
const TicketItem = ({
  dept,
  title,
  status,
  date,
  TicketLink,
}: TicketItem_type) => {
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
          href={TicketLink}
        >
            {title}
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-xs text-slate-500 dark:text-slate-400 text-right">
       
        {new Date(date).toLocaleDateString("fa-Ir")}
        </span>
       <TicketBadge value={dept} />
       <TicketBadge value={status}/>
      </div>
    </div>
  );
};

const TicketBadge =({value}:{value:string})=>{
    return(
        <span
          className="text-xs py-1 px-1.5 text-slate-500
             dark:text-yellow-400 bg-slate-500/10
              dark:bg-yellow-400/10 rounded"
        >
          {value}
        </span> 
    )
}
export default Tickets;
