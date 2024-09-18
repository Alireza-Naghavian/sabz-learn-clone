"use client"
import Button from '@/components/ui/button/Button'
import useDisclosure from '@/hooks/useDisclosure'
import { Bars4Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

function TitlesBox() {
    const [isBoxOpen,{toggle}] = useDisclosure()
  return (
    <div className={`rounded-lg !rounded-tr-none border border-neutral-300
     dark:border-slate-500 mt-8 overflow-hidden 
      mb-6 md:mb-8 ${isBoxOpen ?  "h-1/6 md:h-[4.25rem]": ""}`}>
        <div className={`flex items-center justify-between px-4 py-5 `}>

            <div className={`flex items-center gap-x-2`}>
                <Bars4Icon className='size-6'/>
                <span className="text-sm md:text-base md:font-DanaMedium">سرفصل های این مقاله:</span>
            </div>
                <Button onClick={()=>toggle()} size='md' type='button' className='!bg-dark box-center'>
                    <ChevronDownIcon className={`size-5 ${isBoxOpen ? "rotate-180" : "rotate-0"}`}/>
                </Button>
        </div>
        <div className="flex flex-col gap-2.5 border-t border-neutral-300 dark:border-slate-500 p-5">
            <a href="" className='text-sm md:text-base font-DanaBold'>برنامه نویسی اسکرچ چیست؟</a>
            <a href="" className='text-sm md:text-base font-DanaBold'>برنامه نویسی اسکرچ چیست؟</a>
            <a href="" className='text-sm md:text-base font-DanaBold'>برنامه نویسی اسکرچ چیست؟</a>
            <a href="" className='text-sm md:text-base font-DanaBold'>برنامه نویسی اسکرچ چیست؟</a>
        </div>
      </div>
  )
}

export default TitlesBox