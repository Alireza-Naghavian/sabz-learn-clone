import { BookOpenIcon } from "@heroicons/react/20/solid";
import TitleHeader from "../../course/TitleHeader";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";

function RelateBlogs() {
  return (
    <div className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8">
      <TitleHeader
        Icon={BookOpenIcon}
        IconColor="text-amber-400"
        className="bg-amber-400"
        title="پیشنهاد مطالعه"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RelateBlogCard
        title="چگونه بدون داشتن مدرک دانشگاهی، برنامه‌نویس شویم؟"
        cover="https://sabzlearn.ir/wp-content/uploads/2024/09/12-6.jpg"
        target=""
        date={new  Date()}
        
        />
        <RelateBlogCard
        title="چگونه بدون داشتن مدرک دانشگاهی، برنامه‌نویس شویم؟"
        cover="https://sabzlearn.ir/wp-content/uploads/2024/09/12-6.jpg"
        target=""
        date={new  Date()}
        
        />
        <RelateBlogCard
        title="چگونه بدون داشتن مدرک دانشگاهی، برنامه‌نویس شویم؟"
        cover="https://sabzlearn.ir/wp-content/uploads/2024/09/12-6.jpg"
        target=""
        date={new  Date()}
        
        />
        <RelateBlogCard
        title="چگونه بدون داشتن مدرک دانشگاهی، برنامه‌نویس شویم؟"
        cover="https://sabzlearn.ir/wp-content/uploads/2024/09/12-6.jpg"
        target=""
        date={new  Date()}
        
        />
      </div>
    </div>
  );
}

type relateCard = {
  cover: string;
  date: Date;
  title: string;
  target: string;
};
const RelateBlogCard = ({ cover, date, title, target }: relateCard) => {
  return (
    <div
      className="flex items-center gap-x-4 bg-gray-100
     dark:bg-dark p-3.5 rounded-xl"
    >
      <ResponsiveImage
        src={cover}
        alt={title}
        className="h-20 !relative rounded-lg"
        imageStyles="!w-full !h-full !relative rounded-lg !object-cover"
      />
      <div>
        <Link className="font-DanaMedium line-clamp-1" href={target}>
          {title}
        </Link>
        <div className="flex items-center gap-x-1 text-slate-500 mt-4.5">
          <CalendarIcon className="size-5" />
          <span className="font-DanaMedium text-sm">
            {new Date(date).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default RelateBlogs;
