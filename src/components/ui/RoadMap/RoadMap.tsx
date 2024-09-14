import { Roadmaps } from "@/utils/constants";
import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
const  roadMapStyle = [
  { style: "from-[#FFB535] to-[#F2295B]" },
  { style: " from-[#2E9EFF] to-[#9C33F7]" },
  { style: " from-[#30c5e4] to-[#2ae558]" },
  { style: " from-[#FF3571] to-[#880175] " },
];
/* eslint-enable @typescript-eslint/no-unused-vars */
function RoadMap() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
      {Roadmaps.map((item, index: number) => {
        return (
          <div
            key={index}
            className={`py-5 bg-gradient-to-r   overflow-hidden   rounded-2xl ${item?.gr_colors}`}
          >
            <Link
              title={item.title}
              className="box-center flex-col  h-full"
              href={item.target}
            >
              <item.Icon className="w-10 sm:w-12 sm:h-12" />
              <h3 className="font-DanaBold sm:text-lg sm:mb-1">{item.title}</h3>
              <span className="inline-block font-DanaMedium text-sm sm:text-base">
                24دوره
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RoadMap;
