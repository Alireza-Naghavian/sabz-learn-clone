import Footer from '@/components/shared/Footer/Footer'
import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import { MenuBodyType } from '@/types/services/menu.t'
import React from 'react'
function ClientLayout({children,menu}:{children:React.ReactNode,menu:MenuBodyType[]}) {
  return (
    <>
    <NavBarLayout menu={menu} />
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout