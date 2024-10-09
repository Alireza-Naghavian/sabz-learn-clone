import { Filter_section_type } from '@/types/buttons.t'
import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import SideBarFilter from '../aside/SideBarFilter'
import useScrollLocker from '@/hooks/useScrollLocker'
import { useRouter, useSearchParams } from 'next/navigation'

function FilterMobile({isOpen,setIsOpen,qs=true,categories}:Filter_section_type) {
    useScrollLocker(isOpen)
    const router = useRouter();
    const removeQueryHandler = ()=>{
      router.replace("/courses",{scroll:true})
    }
  return (
    <div className={`${isOpen ? "filter filter--open " : "filter"} overflow-y-auto`}>
        <div className="filter__header">
            <div className="flex items-center gap-x-2">
                <XCircleIcon className='box-center size-7' onClick={()=>setIsOpen(false)}/>
                <span className="text-lg font-DanaBold">فیلتر ها</span>

            </div>
            <button onClick={removeQueryHandler} className='filter__clean-btn '>
                <span>حذف فیلتر ها</span>
                <TrashIcon className='size-6'/>
            </button>

        </div>
       <div className="filter__body h-full ">
       <SideBarFilter  categories={categories} qs={qs} className=' relative py-6 flex flex-col gap-y-4 h-full '>
            <button type='button' role='button' onClick={()=>setIsOpen(false)} className='filter__submit-btn  '>اعمال فیلتر</button>
            </SideBarFilter>
       </div>
    </div>
  )
}

export default FilterMobile