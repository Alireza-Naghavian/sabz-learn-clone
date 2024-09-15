import React from 'react'
import ClientLayout from '../ClientLayout/ClientLayout'
import CoursesHeader from '@/components/ui/CoursesHeader/CoursesHeader'
import SideBarFilter from '@/components/ui/aside/SideBarFilter'
import SortBtns from '@/components/ui/button-group/SortBtns'
import CourseCard from '@/components/shared/ProductCard/ProductCard'

function Category() {
  return (
    <ClientLayout>
    <div className='container  mt-8 sm:mt-10 relative'>
       <CoursesHeader
       mainTitle='فرانت اند'
       qs={true}
       coursesAmount={24}
       />
       <section className='grid  grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 
       gap-3.5 sm:gap-5 mt-9 sm:mt-25'>
         <SideBarFilter qs={false} className='hidden md:grid grid-cols-2 lg:grid-cols-1 gap-5'/>
         <div className="col-span-1 lg:col-span-2 xl:col-span-3
          order-1 lg:order-2 ">
       <SortBtns qs={false}/>
       <div className="posts_wrap grid grid-rows-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

       <CourseCard>
             <CourseCard.Header
               alt="دوره next js "
               title="دوره next js"
               src="/images/next.webp"
               target=""
             />
             <CourseCard.Body
               target=""
               title="آموزش الگوریتم و ساختمان داده به زبان ساده"
               desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
             />
             <CourseCard.Footer
               isFree={false}
               isOff={false}
               member={322}
               percent={10}
               price={1150000}
               score={5}
               teacher="رضا دولتی"
             />
           </CourseCard>
       <CourseCard>
             <CourseCard.Header
               alt="دوره next js "
               title="دوره next js"
               src="/images/next.webp"
               target=""
             />
             <CourseCard.Body
               target=""
               title="آموزش الگوریتم و ساختمان داده به زبان ساده"
               desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
             />
             <CourseCard.Footer
               isFree={false}
               isOff={false}
               member={322}
               percent={10}
               price={1150000}
               score={5}
               teacher="رضا دولتی"
             />
           </CourseCard>
       <CourseCard>
             <CourseCard.Header
               alt="دوره next js "
               title="دوره next js"
               src="/images/next.webp"
               target=""
             />
             <CourseCard.Body
               target=""
               title="آموزش الگوریتم و ساختمان داده به زبان ساده"
               desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
             />
             <CourseCard.Footer
               isFree={false}
               isOff={false}
               member={322}
               percent={10}
               price={1150000}
               score={5}
               teacher="رضا دولتی"
             />
           </CourseCard>
       <CourseCard>
             <CourseCard.Header
               alt="دوره next js "
               title="دوره next js"
               src="/images/next.webp"
               target=""
             />
             <CourseCard.Body
               target=""
               title="آموزش الگوریتم و ساختمان داده به زبان ساده"
               desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها، انیمیشن‌ها ، ابزارهای پیشرفته و…"
             />
             <CourseCard.Footer
               isFree={false}
               isOff={false}
               member={322}
               percent={10}
               price={1150000}
               score={5}
               teacher="رضا دولتی"
             />
           </CourseCard>
       </div>

         </div>
       </section>
    </div>
  </ClientLayout>
  )
}

export default Category