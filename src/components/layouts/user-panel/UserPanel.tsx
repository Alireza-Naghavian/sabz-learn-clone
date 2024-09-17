import Tail_stat_info from "@/components/ui/tail-info/Tail_stat_info";
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import LastSeen from "./LastSeen";
import ContentList, { ContentItem } from "./ContentList";

function UserPanel() {
  return (
    <>
      <div
        className="flex dark:bg-darker
     bg-gray-300/65  flex-wrap gap-x-3
      gap-y-4 md:gap-x-10 "
      >
        <Tail_stat_info
          supTitle="مجموع پرداخت ها"
          title="1,558,500 تومان"
          Icon={CreditCardIcon}
          className="dark:bg-yellow-400 bg-amber-400"
        />
        <Tail_stat_info
          supTitle="دوره ها من"
          title="۱۲ دوره"
          Icon={RocketLaunchIcon}
          className="dark:bg-secondary bg-sky-500"
        />
        <Tail_stat_info
          supTitle="مجموع تیکت ها"
          title="۱۲ تیکت"
          Icon={TicketIcon}
          className="dark:bg-rose-500 bg-pink-500"
        />
        <Tail_stat_info
          supTitle="موجودی حساب"
          title="0 تومان"
          Icon={CurrencyDollarIcon}
          className="bg-baseColor"
        />
      </div>
      {/* grid content */}
      <div
        className=" grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-1 xl:grid-cols-2 gap-7 dark:bg-darker
     bg-gray-300/65  pt-10"
      >
        <LastSeen />
        <div className="space-y-7">
          <ContentList title="تیکت های اخیر" link="/my-account/tickets">
            <ContentItem status="بسته شده" target="" title="باز نشده ویدئو" />
            <ContentItem status="بسته شده" target="" title="باز نشده ویدئو" />
            <ContentItem status="بسته شده" target="" title="باز نشده ویدئو" />
          </ContentList>
          <ContentList title="پرسش های اخیر">
            <ContentItem status="بسته شده" target="" title="باز نشده ویدئو" />
          </ContentList>
        </div>
      </div>
    </>
  );
}

export default UserPanel;
