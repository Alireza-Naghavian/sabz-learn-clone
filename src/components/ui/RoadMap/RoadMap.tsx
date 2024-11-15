import { CatBodytype } from "@/types/services/course&category.t";
import { Roadmaps } from "@/utils/constants";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
const roadMapStyle = [
  { style: "from-[#FFB535] to-[#F2295B]" },
  { style: " from-[#2E9EFF] to-[#9C33F7]" },
  { style: " from-[#30c5e4] to-[#2ae558]" },
  { style: " from-[#FF3571] to-[#880175] " },
];
/* eslint-enable @typescript-eslint/no-unused-vars */
function RoadMap({ categories }: { categories: CatBodytype[] }) {
  const RoadMapItems = categories
    .map((category) => {
      return Roadmaps.map((roadMap) => {
        if (roadMap.target == category.link) {
          return { ...roadMap, courses: category.Courses?.length };
        }
      });
    })
    .flat();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
      {RoadMapItems.map((item, index: number) => {
        if (item !== undefined) {
          return (
            <div
              key={index}
              className={`py-5 bg-gradient-to-r   overflow-hidden   rounded-2xl ${item?.gr_colors}`}
            >
              <Link
                title={item?.title}
                className="box-center text-white flex-col  h-full"
                href={`/courses/category/${item?.target}` || ""}
              >
                {item && <item.Icon className="w-10 sm:w-12 sm:h-12" />}
                <h3 className="font-DanaBold sm:text-lg sm:mb-1">
                  {item?.title}
                </h3>
                <span className="inline-block font-DanaMedium text-sm sm:text-base">
                  {item?.courses} دوره
                </span>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
}

export default RoadMap;
