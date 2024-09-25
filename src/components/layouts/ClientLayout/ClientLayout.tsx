import Footer from '@/components/shared/Footer/Footer'
import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import { UserType } from '@/types/services/authapi.t'
import React from 'react'

function ClientLayout({children,userData}:{children:React.ReactNode,userData:UserType}) {
  return (
    <>
    <NavBarLayout userData={userData}/>
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout