import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import {
  ArticleTableData
} from "@/types/services/articles.t";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function BlogCard({
  title,
  description,
  _id,
  creator,
  createdAt,
  cover,
}: ArticleTableData) {
  return (
    <div
      className=" flex flex-col bg-white
     dark:bg-darker border
      border-neutral-100 dark:border-none 
      overflow-hidden rounded-2xl"
    >
      <div className="  relative h-[182px] overflow-hidden">
        <ResponsiveImage
          className="blog__banner "
          imageStyles="!relative    !block !w-full !h-full !object-cover"
          src={cover}
          alt={title}
        />
      </div>
      <div className="flex-grow px-5 py-3">
        <h3 className="font-DanaBold line-clamp-2 mb-3">
          <Link href={`/blogs/${_id}`}>{title}</Link>
        </h3>
        <p className="text-sm line-clamp-4 text-gray-900/70 dark:text-white/70">
          {description}
        </p>
      </div>
      <div className="px-5 pb-5">
        <div
          className="flex justify-between items-center text-slate-500
         dark:text-white/70 text-sm pb-4 border-b border-b-neutral-200/70
          dark:border-b-white/10"
        >
          <div className="flex items-center gap-x-0.5">
            <UserIcon className="size-5" />
            <span>{creator.username}</span>
          </div>
          <div className="flex items-center gap-x-0.5">
            <CalendarIcon className="size-5" />
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href={`/blogs/${_id}`}
            className="hover:text-baseColor flex justify-center  gap-x-2 font-DanaMedium transition-colors"
          >
            <span>مشاهده مقاله</span>
            <ArrowLeftCircleIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
