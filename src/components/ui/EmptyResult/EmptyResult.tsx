import { EmptyResultIcon } from '@/utils/Icons'
import React from 'react'

function EmptyResult({title,className}:{title:number|string|null,className?:string}) {
  return (
    <div className={`
     w-full flex items-center justify-center
     flex-col px-7 py-8 md:py-20 rounded-2xl border
      border-slate-500 border-dashed ${className}
    `}>
        <EmptyResultIcon   className="w-48 h-[216px] md:w-auto md:h-auto" />
        <p className="text-lg md:text-xl text-center font-DanaBold
         text-slate-500 dark:text-white mt-8 md:mt-12">
            متاسفانه {title} مطابق جستجوی شما پیدا نشد:(
         </p>
      </div>
  )
}

export default EmptyResult