import Tickets from '@/components/layouts/user-panel/Tickets/Tickets'
import StoreProvider from '@/context/StoreProvider'
import React from 'react'

function page() {
  return (
    <StoreProvider>

   <Tickets/>
    </StoreProvider>
  )
}

export default page