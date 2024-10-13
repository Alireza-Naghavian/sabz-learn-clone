"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import DarkShade from "@/components/ui/greenShade/DarkShade";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
const DOMPurify = require('dompurify');
import { useEffect, useState } from "react";
import "./course.css";
import TitleHeader from "./TitleHeader";

function CourseDesc({ courseDesc }: { courseDesc: string }) {
  const [expand, setExpand] = useState(false);
  const [longDesc, setLongDesc] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sanitizedDesc = DOMPurify.sanitize(courseDesc);
      setLongDesc(sanitizedDesc);
    }
  }, [courseDesc]);
  return (
    <>
      <div className="bg-white dark:bg-darker rounded-2xl 
      p-4.5 sm:p-5 mt-8">
        <TitleHeader
          title="توضیحات"
          Icon={DocumentTextIcon}
          className="bg-amber-400"
          IconColor="text-amber-400"
        />
        {/* desc */}
        <div className="relative overflow-hidden">
          <div
            className={`${
              expand ? "h-auto max-h-[800px] courese_Desc overflow-y-auto" : "h-[400px]"
            }`}
            dangerouslySetInnerHTML={{__html:longDesc}}
          ></div>
          {!expand && <DarkShade />}
        </div>
        <PrimaryBtn
          onClick={() => setExpand((is) => !is)}
          type="button"
          size="xl"
          variant="fill"
          className="w-full px-8 gap-x-2 sm:w-auto mx-auto mt-5"
        >
          <span>مشاهده {!expand ? "بیشتر" : "کمتر"} مطلب</span>
          <ChevronDownIcon className={`size-6 ${expand && "rotate-180"}`} />
        </PrimaryBtn>
      </div>
    </>
  );
}

export default CourseDesc;
