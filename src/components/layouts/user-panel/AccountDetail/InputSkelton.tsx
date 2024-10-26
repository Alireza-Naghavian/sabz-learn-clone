import Skeleton_smpl from '@/components/ui/skelton/Skelton'
import React from 'react'

function InputSkelton({count,label}:{count:number,label?:string}) {
  return (
    <Skeleton_smpl count={count}>
    <Skeleton_smpl.Items
      className="flex flex-col 
   border-neutral-100 border dark:border-none  rounded-2xl"
    >
      {/* cover */}


      {/* title & desc */}
      <div className=" flex flex-col gap-y-2 relative">
        <div className="h-[28px]">
            <span>{label}</span>
        </div>
        <Skeleton_smpl.Item
          className="font-DanaMedium line-clamp-2  mt-auto "
          height="h-[42px]"
          width="w-full"
          animated="background"
        />
       </div>
    </Skeleton_smpl.Items>
  </Skeleton_smpl>
  )
}

export default InputSkelton