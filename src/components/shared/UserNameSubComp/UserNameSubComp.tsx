"use client"
import TextLoader from '@/components/ui/loader/TextLoader';
import { useGetMeQuery } from '@/services/auth/authApiSlice';
import React from 'react'

 const UserNameSubComp = ({className}:{className:string})=>{
    const { data,isLoading } = useGetMeQuery();
    return(
      <h3 className={className}>
        {isLoading ?<TextLoader loadingCondition={isLoading}/> :
        ` ${data?.user?.username}  عزیز؛ خوش اومدی 🙌`
        }
    </h3>
    )
  }

export default UserNameSubComp