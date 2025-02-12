import Badge from "@/components/ui/Badge/Badge";
import ResponsiveImage from "@/components/utils-components/ResponsiveImage/ResponsiveImage";
import { CardFooterType, CardHeaderType } from "@/types/cards.t";
import { ChildrenProps } from "@/types/global.t";
import { StarIcon } from "@heroicons/react/20/solid";
import { UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import styles from "./ProductCard.module.css";

function CourseCard({ children }: ChildrenProps) {
  return (
    <div
      className={`flex flex-col lg:h-[400px] 2xl:h-auto bg-white dark:bg-darker 
     border-neutral-100 border dark:border-none  rounded-2xl`}>
      {children}
    </div>
  );
}
function CardHeader({ src, alt, title, target, badge}: CardHeaderType) {
  
  return (
    <div className="relative h-42 group  ">
      <Link className="block w-full h-full"  href={target}>
        <ResponsiveImage
          imageStyles="!relative !block !w-full !h-full !bg-darker    !object-cover rounded-2xl"
          src={src}
          className="!rounded-2xl !bg-darker"
          alt={alt}
          title={title}
        />
      </Link>
      {badge && <Badge value={badge} />}
    </div>
  );
}

const CardBody  =({title,desc,target}: { title: string,desc?:string,target:string }) =>{
  return (
    <div className="flex-grow  px-4.5 pt-4 pb-3 dark:bg-darker ">
      <h3 className="font-DanaMedium line-clamp-2 mb-3">
        <Link href={target}>{title}</Link>
      </h3>
      {/* desc */}
      <p className="text-sm line-clamp-2 opacity-70 mt-auto ">{desc}</p>
    </div>
  );
};

const CardFooter = ({
  isOff,
  isFree,
  member,
  price,
  score,
  teacher,
  percent
}: CardFooterType) => {
  return (
    <div className="px-4.5 pb-3">
      {/* teacher & reting */}
      <div className={styles.card_footer_info}>
        <div
          className="flex items-center gap-x-0.5 hover:text-baseColor 
            transition-colors"
        >
          <UserIcon className="w-5 h-5" />
          <span className="">{teacher}</span>
        </div>
        {/* raging */}
        <div className="flex items-center gap-x-0.5 text-amber-500">
          <span className="font-DanaMedium">{score}</span>
          <StarIcon className="w-5 h-5" />
        </div>
      </div>
      {/* price & memeber */}
      <div className="flex items-end justify-between mt-1.5">
        <span
          className="flex  gap-x-0.5  mb-2
         text-slate-500 dark:text-white/70 text-sm"
        >
          <UsersIcon className="w-5 h-5" />
          <span>{member}</span>
        </span>
        <div className="flex flex-col gap-y-2 my-1">
          {isOff || percent !==0 && (
            <span
              className="text-sm text-slate-500 justify-self-end
            dark:text-white/70 -mb-1.5 line-through"
            >
              {Number(price).toLocaleString("fa-IR")}
            </span>
          )}
          {!isFree ? (
            <span className="text-baseColor flex  gap-x-1  font-DanaBold text-lg">
              <span className="">  {percent !== 0
                ? (price - Number(price * percent) / 100).toLocaleString(
                    "fa-IR"
                  )
                : !isFree
                ? price.toLocaleString("fa-IR")
                : "رایگان"}</span>
         
             <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 57.988 55.588"
                className="!w-5 !h-5"
              >
                <path
                  d="M4068.117-146.108s3 8.61 1.066 11.035-4.839 1.921-11.736 1.921-10.552.731-12.355-1.6-2.288-7.952 2.547-9.55 7.877 3.5 7.877 9.231.668 5.874-.732 8.36c-1.858 2.6-10.917 3.915-10.917 3.915M4069.56-154.406v3.969M4062.56-154.406v3.969M4062.56-154.406v3.969M4027.592-128.435s5.376 4.632 8.167 3.124a5.918 5.918 0 003.034-6.158c-.446-4.24-4.144-5.625-6.783-4.418s-4.016 5.866-4.016 5.866-1.857 4.934-6.114 4.934-4.928-2.6-5-4.934-.98-19.76-.98-19.76M4025.56-176.406v3.969M4017.55-171.009s-3.525 12.094 2.454 15.619c5.623 3.035 12.585-.714 12.585-.714s3.473-2.1 3.436-4.864c-.089-3.883-1.651-12.986-1.651-12.986"
                  transform="translate(-4013.907 176.406)"
                ></path>
              </svg>
             </span>
         
          ) : (
            <span className="text-baseColor font-DanaBold text-lg">
              رایگان! 
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
CourseCard.Header = CardHeader;
CourseCard.Body = CardBody;
CourseCard.Footer = CardFooter;

export default CourseCard;
