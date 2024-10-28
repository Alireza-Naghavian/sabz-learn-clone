"use client"
import Button from '@/components/ui/button/Button'
import useDisclosure from '@/hooks/useDisclosure'
import { Bars4Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

function TitlesBox({content}:{content:string}) {
    const [isBoxOpen,{toggle}] = useDisclosure()
    const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
    useEffect(()=>{
      const parser = new DOMParser();
      const doc = parser.parseFromString(content,"text/html");
      const extractionHedings = Array.from(doc.querySelectorAll("h2")).map((heading)=>{
       if(heading.textContent?.length as number >1){

         return { id: heading?.id, text: heading?.textContent || "" };
        }
      })
      if(extractionHedings ){

        setHeadings(extractionHedings as { id: string; text: string }[])
      }
    },[content])
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
        <div className="flex flex-col child:mt-2 border-t border-neutral-300 dark:border-slate-500 p-5">
          
          {headings.map((heading)=>{
            return(
              <a key={heading?.id}  href={`#${heading?.id}`} className='text-sm md:text-base font-DanaBold'>{heading?.text}</a>

            )
          })}
        </div>
      </div>
  )
}

export default TitlesBox