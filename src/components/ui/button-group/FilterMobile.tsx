import { Filter_section_type } from '@/types/buttons.t'
import { TrashIcon, XCircleIcon } from '@heroicons/react/24/outline'
import SideBarFilter from '../aside/SideBarFilter'
import useScrollLocker from '@/hooks/useScrollLocker'

function FilterMobile({isOpen,setIsOpen}:Filter_section_type) {
    useScrollLocker(isOpen)
  return (
    <div className={`${isOpen ? "filter filter--open " : "filter"} overflow-y-auto`}>
        <div className="filter__header">
            <div className="flex items-center gap-x-2">
                <XCircleIcon className='box-center size-7' onClick={()=>setIsOpen(false)}/>
                <span className="text-lg font-DanaBold">فیلتر ها</span>

            </div>
            <button className='filter__clean-btn '>
                <span>حذف فیلتر ها</span>
                <TrashIcon className='size-6'/>
            </button>

        </div>
       <div className="filter__body h-full ">
       <SideBarFilter className=' relative py-6 flex flex-col gap-y-4 h-full '>
            <button className='filter__submit-btn  '>اعمال فیلتر</button>
            </SideBarFilter>
       </div>
    </div>
  )
}

export default FilterMobile