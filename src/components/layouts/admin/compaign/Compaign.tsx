import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import React from 'react'
import CompaignForm from './CompaignForm'
import CompaignList from './CompaignList'

function Compaign() {
  return (
    <div className='flex flex-col gap-y-4'>
        <HeaderAdminLayout title='برگزاری کمپین جدید'>
            <CompaignForm/>
        </HeaderAdminLayout>
        <HeaderAdminLayout title='کمپین های برگزار شده'>
            <CompaignList/>
        </HeaderAdminLayout>
    </div>
  )
}

export default Compaign