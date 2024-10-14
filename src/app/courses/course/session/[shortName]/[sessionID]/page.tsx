import Session from "@/components/layouts/sessions/Session";
import StoreProvider from "@/context/StoreProvider";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
type SessionType = {
  params: {sessionID: string, shortName: string};
};

async function page({params}:SessionType) {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const {sessionID,shortName} = params

  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden">
      <StoreProvider>
      <Session menu={dataParser(menus)} shortName={dataParser(params.shortName)} sessionID ={dataParser(params.sessionID)} />
      </StoreProvider>
    </main>
  );
}

export default page;
