import Blog from "@/components/layouts/articles/Single-Blog/Blog";
import { ArticleTableData } from "@/types/services/articles.t";
import dataFetcher from "@/utils/dataFetcher";
import dataParser from "@/utils/dataParser";
import { Metadata } from "next";
import React from "react";
type paramsType = {
  params:{blog:string}
}
export const generateStaticParams = async()=>{
  const allBlogs = await dataFetcher("articles/getInit", "omit", undefined, 1800);
  const params  = allBlogs.map((blog:ArticleTableData)=>({_id:blog._id}))
  return params
}
export const generateMetadata = async ({
  params,
}: paramsType): Promise<Metadata> => {
  const blogData = await dataFetcher(`articles/${params.blog}`,
    "omit",
    undefined,
    5
  );
  const blogName = blogData.title;
  const title = `سبزلرن -${blogName}`;
  return {
    title,
  };
};
async function page({params} :paramsType) {
  const {blog} = params
  const blogData :ArticleTableData = await dataFetcher(`articles/${blog}`,"omit","no-store")
  const relateBlogs = await dataFetcher(`articles/related/${blogData.categoryID._id}`,"omit","no-store");
  const menus = await dataFetcher("menus", "omit", "force-cache");
  return (
    <main className="max-w-[1920px] mx-auto overflow-x-hidden ">
      
      <Blog
      blogData = {dataParser(blogData)}
      relateBlogs={dataParser(relateBlogs)}
      menu={dataParser(menus)}/>
    </main>
  );
}

export default page;
