import CoursesHeader from "@/components/ui/CoursesHeader/CoursesHeader";
import StoreProvider from "@/context/StoreProvider";
import { ArticleTableData } from "@/types/services/articles.t";
import { CompaignTableData } from "@/types/services/compaign.t";
import { MenuBodyType } from "@/types/services/menu.t";
import ClientLayout from "../ClientLayout/ClientLayout";
import BlogList from "./BlogList";

function Blogs({menu,latestArticles,compaignData}:{compaignData:CompaignTableData[],menu:MenuBodyType[],latestArticles:ArticleTableData[]}) {
  return (
    <ClientLayout compaignData={compaignData} menu={menu}>
      <section className="container mt-8 sm:mt-10">
        <CoursesHeader
          mainTitle="وبلاگ"
          totalAmount={`${latestArticles.length} مقاله`}
          qs={false}
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-5 gap-x-7">
          {/* content */}
          <StoreProvider>

          <BlogList latestArticles={latestArticles}/>
          </StoreProvider>
        </div>
      </section>
    </ClientLayout>
  );
}

export default Blogs;
