import Footer from '@/components/shared/Footer/Footer'
import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import ResponsiveImage from '@/components/utils-components/ResponsiveImage/ResponsiveImage'
import { CompaignTableData } from '@/types/services/compaign.t'
import { MenuBodyType } from '@/types/services/menu.t'
import ClientOnlyPortal from '@/utils/ClientProtal'
import React from 'react'
function ClientLayout({children,menu,compaignData}:{children:React.ReactNode,menu:MenuBodyType[], compaignData:CompaignTableData[]}) {
  return (
    <>
    {compaignData &&compaignData[0]?.active &&
    <>
    <div className="flex   items-center justify-between mx-auto
    max-w-def-size h-[55px] md:h-[59px] bg-baseColor ">
      <p className="font-DanaBold text-2xl lg:text-4xl text-center mx-auto">
       <span className='hidden md:inline'> ------------------</span>
        &nbsp;
        {compaignData[0].title}
        &nbsp;
        <span className='hidden md:inline'> ------------------</span>
      </p>
    </div>
    <ClientOnlyPortal>

    <div className="fixed bg-transparent w-[200px] h-[200px] z-50  bottom-6 right-12  ">
      <ResponsiveImage
      src={`${compaignData[0].fixCover.url}`}
      alt={compaignData[0].title}
      className='relative w-full h-full'
      />
    </div>
      </ClientOnlyPortal>
      </>
    }
    <NavBarLayout menu={menu} />
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout