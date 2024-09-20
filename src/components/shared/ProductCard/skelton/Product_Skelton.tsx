import Skeleton_smpl from "@/components/ui/skelton/Skelton";
function Product_Skelton({ count }: { count: number }) {
  return (
    <Skeleton_smpl count={count}>
      <Skeleton_smpl.Items
        className="flex flex-col bg-white dark:bg-darker 
     border-neutral-100 border dark:border-none  rounded-2xl"
      >
        {/* cover */}
        <Skeleton_smpl.Item
          height="h-[148px]"
          width="w-full"
          animated="background"
          className="rounded-md sm:mb-4"
        >
        </Skeleton_smpl.Item>
        {/* title & desc */}
        <div className="flex-grow px-4.5 pt-2 pb-3 dark:bg-darker ">
          <Skeleton_smpl.Item
            className="font-DanaMedium line-clamp-2 mb-3"
            height="h-5"
            width="w-64"
            animated="background"
          />
          {/* desc */}
          <Skeleton_smpl.Item
            height="h-16"
            width="w-60"
            animated="background"
            className="mb-auto text-sm line-clamp-2 opacity-70"
            />
            {/* desc */}
            <div className="flex justify-between mt-4">
            <Skeleton_smpl.Item
              height="h-5"
              width="w-12"
              animated="background"
            />
            <Skeleton_smpl.Item
              height="h-5"
              width="w-12"
              animated="background"
            />
          </div>
         
        </div>
         <div className="">
         <Skeleton_smpl.Item
          className=" flex items-center gap-x-0.5"
            height="h-12"
            width="w-auto "
            animated="background"
          />
         </div>
      </Skeleton_smpl.Items>
    </Skeleton_smpl>
  );
}

export default Product_Skelton;
