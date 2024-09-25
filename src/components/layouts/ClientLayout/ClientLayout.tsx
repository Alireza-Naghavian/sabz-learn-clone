import Footer from '@/components/shared/Footer/Footer'
import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import StoreProvider from '@/context/StoreProvider'
import { UserType } from '@/types/services/authapi.t'
import React from 'react'

function ClientLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <NavBarLayout />
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout