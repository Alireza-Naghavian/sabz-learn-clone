import React from 'react'
import ClientLayout from '../../ClientLayout/ClientLayout'
import Breardcrumb from '@/components/ui/Breardcrumb/Breardcrumb'
import TitleHeader from '../../course/TitleHeader'
import { IconType } from '@/types/icon.t'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline'
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import TitlesBox from './TitlesBox'
import BlogContent from './BlogContent'
import RelateBlogs from './RelateBlogs'
import { MenuBodyType } from '@/types/services/menu.t'

function Blog({menu}:{menu:MenuBodyType[]}) {
  return (
    <ClientLayout menu={menu}>

    <div className='mt-8 sm:mt-10 container'>
        {/* breadcrumb */}
        <Breardcrumb
        nestedLinks={[{title:"وبلاگ",target:"/blogs"},{title:"blogTitle" ,target:"currentBlog"}]}
        firstTarget='/'
        nestedStep={2}
        />
    <div className="  gap-x-7 gap-y-8 mt-8 md:mt-10">
        {/* content */}
            <div className="bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 ">
                <TitleHeader
                title='اسکرچ چیست؟'
                className='bg-sky-500 pb-4 border-b border-b-neutral-200/60
                 dark:border-b-white/10'
                />
                {/* seperator */}
                <div className="w-full h-px bg-gray-300 dark:bg-slate-700 my-5"></div>
                {/* info */}
                <div className="grid sm:flex grid-cols-2 sm:grid-cols-4
                 gap-x-6 gap-y-3 mb-6 text-slate-500 font-DanaMedium 
                 text-sm sm:text-base">
                    {/* author */}
                    <InfoItem title='مهدی ایلخانلی'Icon={UserIcon}/>
                    <InfoItem title='1403/06/24'Icon={CalendarIcon}/>
                </div>
                {/* thumbnail */}
                <ResponsiveImage
                src={"/images/next.webp"}
                alt='thumbnail'
                className='aspect-video object-cover rounded-2xl'
                imageStyles='aspect-video object-cover rounded-2xl'

                />

                {/* title Box */}
                <TitlesBox/>
                {/*main content */}
                <BlogContent/>
                {/* relate blogs */}
            </div>
                <RelateBlogs/>
   
    </div>
    </div>

    </ClientLayout>
  )
}

const InfoItem = ({title,Icon}:{title:string,Icon:IconType})=>{
    return(
        <div className="flex items-center gap-x-1.5">
<Icon className='size-6 sm:size-7'/>
        <span>{title}</span>
        </div>
    )
}
export default Blog