import Footer from '@/components/shared/Footer/Footer'
import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import React from 'react'

function ClientLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <NavBarLayout/>
    {children}
    <Footer/>
    </>
  )
}

export default ClientLayout