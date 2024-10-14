import { LogoIcon } from '@/utils/Icons';
import Image from 'next/image';
import Link from 'next/link';
type LogoLinkType={
  className?:string;
  isIcon?:boolean
}
function LogoLink({className,isIcon=false}:LogoLinkType) {
  return (
    <div className={`${className}`}>
                <Link href={"/"} className='flex gap-x-2 '>
                <div className="h-12  w-[73px] !bg-transparent ">
                <Image
                fill
                alt='سبزلرن'
                src={"/images/logo.png"}
                className='!h-12  !w-[73px] !relative !object-cover'
                loading='lazy'
                />
                </div>
                {isIcon &&
                <LogoIcon  className='w-[86px] dark:fill-white/95 md:w-32 h-10 md:h-[57px]'/>
                }
                </Link>
            </div>
  )
}

export default LogoLink