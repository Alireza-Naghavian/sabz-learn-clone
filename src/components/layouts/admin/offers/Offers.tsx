import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import React from 'react'
import OfferForm from './OfferForm'
import OffersTable from './OffersTable'

function Offers() {
  return (
    <div className="flex flex-col gap-y-4">
      <HeaderAdminLayout title="ایجاد کد تخفیف">
        <OfferForm />
      </HeaderAdminLayout>
      <HeaderAdminLayout title="لیست کد های تخفیف">
        <OffersTable />
      </HeaderAdminLayout>
    </div>
  )
}

export default Offers