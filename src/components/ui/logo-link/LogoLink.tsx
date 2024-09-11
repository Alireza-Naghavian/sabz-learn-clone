import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import Link from 'next/link'
import React from 'react'

function LogoLink() {
  return (
    <div className="lg:ml-8">
                <Link href={"/"} className='block'>
                <ResponsiveImage
                className='h-12  w-[73px] !bg-transparent'
                imageStyles='object-cover !bg-transparent'
                alt='سبزلرن'
                src={"/images/favicon.png"}
                loading='lazy'
                />
                </Link>
            </div>
  )
}

export default LogoLink