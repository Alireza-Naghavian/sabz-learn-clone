"use client"
import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import EmptyResult from '@/components/ui/EmptyResult/EmptyResult'
import TabSelection from '@/components/utils-components/Select/TabSelection'
import { OptionSelectionType } from '@/types/global.t'
import { CourseBodyType, CourseUserType } from '@/types/services/course&category.t'
import React, { useState } from 'react'
import SalesChart from './SalesChart'
import GrowthChart from './GrowthChart'
import StoreProvider from '@/context/StoreProvider'
const adminCharts: OptionSelectionType = [
  { label: "نرخ فروش ", value: "sales" },
  { label: "نرخ رشد وب سایت", value: "growth" },
];
export type OverViewType ={
  salesData:{
    allUsers:number,
    allCreditsSpend:CourseUserType[]
  }
mostPopCourses:CourseBodyType[]
}
function OverViews({mostPopCourses,salesData}:OverViewType) {
  const [activeTab, setActiveTab] = useState<string>("growth");

  return (

    <HeaderAdminLayout title='آمار و ارقام'>
      
    <TabSelection
    activeTab={activeTab}
    options={adminCharts}
    setActiveTab={setActiveTab}
    wrapperClassName="!bg-transparent "
    btnClassName={`!bg-transparent !tr-300 px-2 py-1 !rounded-md shadow-md`}
    >
      {activeTab ==="sales" ? 
      <SalesChart mostPopCourses={mostPopCourses}
      salesData={salesData}/>
      :
      <StoreProvider>

      <GrowthChart salesData={salesData}/>  
      </StoreProvider>
    }
    </TabSelection>
    </HeaderAdminLayout>

  )
}

export default OverViews