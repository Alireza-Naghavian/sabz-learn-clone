"use client"
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import { SingleCourseData } from '@/types/services/course&category.t'
import { TomanIcon } from '@/utils/Icons'
import Link from 'next/link'

function DataCart({data,shortName}:{data:SingleCourseData,shortName:string}) {

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between xs:px-8 sm:px-0">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-5">
                    <Link href={`/courses/course/${shortName}`} target='_blank' className='relative md:hidden lg:block mx-auto'>
                    <ResponsiveImage
                    className='aspect-video sm:h-[88px] rounded-2xl sm:rounded-lg w-full xs:w-[280px] sm:w-auto'
                    imageStyles=' !rounded-2xl sm:!rounded-lg !w-full !h-full !object-cover'
                    alt={data?.name as string}
                    src={data?.cover as string}
                    />
                    </Link>
                    <div className="flex flex-col gap-y-2 sm:max-w-60 xl:max-w-96">
                        <Link href={`/courses/course/${shortName}`} target='_blank' className='text-sm md:text-base text-center font-DanaMedium line-clamp-2' >
                        {data?.name}
                        </Link>
                    </div>
                    </div>
                    {/* course price */}
                    <div className="flex justify-between sm:justify-start items-center sm:gap-x-8 xl:gap-x-14 w-full sm:w-auto mt-2 sm:mt-0">
                        <div className="flex flex-col gap-y-2 w-full">
                            <span className="text-sm text-slate-500 dark:text-white/70 -mb-1.5 line-through">
                            {
                 data?.discount !==0 ?  data?.price.toLocaleString("fa-IR")
                 :
                 data?.isFree && `${ data?.price.toLocaleString("fa-IR")}`}
                            </span>
                            <span className='text-baseColor font-DanaBold flex   mx-auto items-center gap-x-1 text-lg'>
                            {data?.discount !== 0
                ? (data?.price as number - Number(data?.price as number * data?.discount as number) / 100)?.toLocaleString("fa-IR")
                : !data?.isFree as boolean
                ? data?.price?.toLocaleString("fa-IR") as string
                : "رایگان"}
                            <TomanIcon className='w-4 h-4'/>
                            </span>
                        </div>
                    </div>
                    </div>
  )
}

export default DataCart