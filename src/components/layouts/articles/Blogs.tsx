import BlogCard from "@/components/shared/BlogsCard/BlogCard";
import CoursesHeader from "@/components/ui/CoursesHeader/CoursesHeader";
import ClientLayout from "../ClientLayout/ClientLayout";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MenuBodyType } from "@/types/services/menu.t";
import { ArticleTableData } from "@/types/services/articles.t";
import BlogList from "./BlogList";
import StoreProvider from "@/context/StoreProvider";

function Blogs({menu,latestArticles}:{menu:MenuBodyType[],latestArticles:ArticleTableData[]}) {
  return (
    <ClientLayout menu={menu}>
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
