import Skeleton_smpl from '@/components/ui/skelton/Skelton'
import React from 'react'

function Session_Skelton({count=1}:{count:number}) {
  return (
    <Skeleton_smpl count={count}>
      <Skeleton_smpl.Items
        className="flex flex-col bg-white dark:bg-darker 
     border-neutral-100 border dark:border-none  rounded-2xl mt-8"
      >
        {/* cover */}
        <Skeleton_smpl.Item
          height="h-[300px] md:h-[600px]"
          width="w-full"
          animated="background"
          className="rounded-md  "
        >
        </Skeleton_smpl.Item>
        {/* title & desc */}
      </Skeleton_smpl.Items>
    </Skeleton_smpl>
  )
}

export default Session_Skelton