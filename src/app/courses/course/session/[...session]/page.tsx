import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import dynamic from "next/dynamic";
type SessionType = {
 params:{session:[sessionId: string, shortName: string ]}
};
const SSRSession = dynamic(
  () => {
    return import("@/components/layouts/sessions/Session");
  },
  { ssr: false }
);
async function page(params:SessionType) {
  const menus = await dataFetcher("menus", "omit", "force-cache");
  const sessionParams =params.params.session
  const sessoinInfo = await dataFetcher(`courses/session/${sessionParams[0]}/${sessionParams[1]}`, "include","no-cache");
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden">
      <SSRSession menu={dataParser(menus)} sessionInfo={sessoinInfo} />
    </main>
  );
}

export default page;
