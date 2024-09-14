import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Nav_Btns from "../button/Nav_Btns";
export type SectionTitleType = {
  title: string;
  subTitle: string;
  iconColor: string;
  link?: string;
  linkTitle?: string;
  navigationBtn?: boolean;
  nextClass?:string
prevClass?:string
};
const SectionTitle = ({
  title,
  subTitle,
  iconColor,
  link,
  linkTitle,
  navigationBtn,
  nextClass,
prevClass,
}: SectionTitleType) => {
  return (
    <div
      className="box-center sm:justify-between 
                    flex-wrap flex-col mb-7 sm:mb-10 
                    sm:flex-row gap-x-4 gap-y-7"
    >
      <div className="space-y-2 sm:space-y-3 sm:self-start">
        <div className="box-center sm:justify-start gap-x-2.5">
          {/* icon shape */}
          <span
            className={`hidden sm:inline-block w-4 h-4  rounded-sm ${iconColor}`}
          ></span>
          <h2 className="font-DanaBold text-2xl sm:text-3xl">{title}</h2>
        </div>
        <p
          className="text-slate-500 font-DanaMedium sm:text-lg 
            text-center sm:text-right"
        >
          {subTitle}
        </p>
      </div>
      {/* link ? */}
      {link ? (
        <Link
          className="flex items-center gap-x-2 sm:px-4 sm:py-3.5
            text-baseColor sm:hover:bg-baseColor
            sm:hover:text-white rounded-full
                transition-colors"
          href={link}
        >
          <span className="font-DanaMedium">{linkTitle}</span>
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
      ) : null}
      {navigationBtn && (
        <div className="!hidden sm:!block">
          <Nav_Btns
          nextClass={nextClass as string}
          prevClass={prevClass as string}
          />
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
