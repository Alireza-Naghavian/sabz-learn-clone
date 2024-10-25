import Session from '@/components/layouts/sessions/Session';
import StoreProvider from '@/context/StoreProvider';
import dataFetcher from '@/utils/dataFetcher';
import dataParser from '@/utils/dataParser';
import { notFound } from 'next/navigation';
import React from 'react'
type SessionType = {
    params: {sessionID: string};
  };
async function page({params}:SessionType) {
 
    const menus = await dataFetcher("menus", "omit", "force-cache");  
    const {sessionID} = params    
    const sessionInFo = await dataFetcher(`courses/session/${sessionID}`,"omit","no-cache");
    if(!Object.keys(sessionInFo).includes("sessions")) return notFound();
    return (
        <main className="max-w-[1920px] mx-auto overflow-x-hidden">
        <StoreProvider>
        <Session menu={dataParser(menus)}  sessionID ={dataParser(params.sessionID)} />
        </StoreProvider>
      </main>
  )
}

export default page