import Blog from "@/components/layouts/articles/Single-Blog/Blog";
import { ArticleTableData } from "@/types/services/articles.t";
import { CompaignTableData } from "@/types/services/compaign.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
import React from "react";
type ParamsType = {
  params:{id:string}
}
export const generateStaticParams = async () => {
  const blogs = await dataFetcher("articles/getInit", "omit", undefined, 900);
  const params  = blogs.map((blog:ArticleTableData)=>({id:blog?._id}))
  return params
};
export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const blogData = await dataFetcher(`articles/${params?.id}`, "omit", undefined, 5);
  const blogTitle = blogData?.title || "مقاله";
  return {
    title: `سبزلرن - ${blogTitle}`,
  };
};
async function page({params} :ParamsType) {
  const {id} = params
  const blogData :ArticleTableData = await dataFetcher(`articles/${id}`,"omit","no-store")
  const relateBlogs = await dataFetcher(`articles/related/${blogData?.categoryID?._id}`,"omit",undefined,1800);
  const menus = await dataFetcher("menus", "omit", undefined,1800);
  const compaignData:CompaignTableData[] = await dataFetcher("offs/getLatest","omit",undefined)
  return (
    <main className="max-w-[1920px] 2xl:max-w-full mx-auto overflow-x-hidden ">
      
      <Blog
      compaignData={dataParser(compaignData)}
      blogData = {dataParser(blogData)}
      relateBlogs={dataParser(relateBlogs)}
      menu={dataParser(menus)}/>
    </main>
  );
}

export default page;
