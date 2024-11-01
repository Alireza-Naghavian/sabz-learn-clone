import Session from '@/components/layouts/sessions/Session';
import StoreProvider from '@/context/StoreProvider';
import { CompaignTableData } from '@/types/services/compaign.t';
import dataFetcher from '@/utils/dataFetcher';
import dataParser from '@/utils/dataParser';
import { notFound } from 'next/navigation';
import React from 'react'
type SessionType = {
    params: {sessionID: string};
  };
async function page({params}:SessionType) {
 
    const menus = await dataFetcher("menus", "omit", undefined,7200);
    const {sessionID} = params    
    const sessionInFo = await dataFetcher(`courses/session/${sessionID}`,"omit","no-cache");
    if(!Object.keys(sessionInFo).includes("sessions")) return notFound();
    const compaignData: CompaignTableData[] = await dataFetcher(
      "offs/getLatest",
      "omit",
      undefined
    );
    return (
        <main className="max-w-[1920px] mx-auto overflow-x-hidden">
        <StoreProvider>
        <Session
        compaignData={dataParser(compaignData)}
        menu={dataParser(menus)}  sessionID ={dataParser(params.sessionID)} />
        </StoreProvider>
      </main>
  )
}

export default page