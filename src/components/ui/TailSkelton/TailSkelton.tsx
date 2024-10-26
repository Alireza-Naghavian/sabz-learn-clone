import React from 'react'
import Skeleton_smpl from '../skelton/Skelton';

export const TailSkelton = ({ count = 3 }: { count: number }) => {
    return (
      <div
        className="flex dark:bg-darker
      bg-gray-300/65  flex-wrap gap-x-3
      gap-y-4 md:gap-x-10"
      >
        <Skeleton_smpl count={count}>
          <Skeleton_smpl.Items
            className="flex flex-col bg-white dark:bg-darker 
         border-neutral-100 border dark:border-none  rounded-2xl"
          >
            <Skeleton_smpl.Item
              height="h-[84px]"
              width="w-[240px]"
              animated="background"
              className="rounded-md sm:mb-4"
            ></Skeleton_smpl.Item>
          </Skeleton_smpl.Items>
        </Skeleton_smpl>
      </div>
    );
  };

export default TailSkelton