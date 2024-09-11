import NavBarLayout from '@/components/shared/navbar/NavBarLayout'
import React from 'react'

function ClientLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <NavBarLayout/>
    {children}
    <footer></footer>
    </>
  )
}

export default ClientLayout