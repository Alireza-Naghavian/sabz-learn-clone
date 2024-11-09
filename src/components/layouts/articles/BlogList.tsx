"use client";
import BlogCard from "@/components/shared/BlogsCard/BlogCard";
import EmptyResult from "@/components/ui/EmptyResult/EmptyResult";
import TextLoader from "@/components/ui/loader/TextLoader";
import CoursePaginBtn from "@/components/utils-components/pagination/CoursePaginBtn";
import { useGetBlogsDataQuery } from "@/services/articles/articlesApiSlice";
import { ArticleTableData } from "@/types/services/articles.t";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

function BlogList({ latestArticles }: { latestArticles: ArticleTableData[] }) {
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<ArticleTableData[]>([]);
  const searchParams = useSearchParams();
  const { data, isFetching:isLoading } = useGetBlogsDataQuery({ limit: 4, page });

  useEffect(() => {
    if (data?.blogs) {
      setBlogs((prevBlogs) => {
        const newBlogs = data.blogs.filter((newBlog) => {
          return !prevBlogs.some((prevBlog) => prevBlog._id === newBlog._id);
        });
        return [...prevBlogs, ...newBlogs];
      });
    }
  }, [data]);
  useMemo(() => {
    setPage(1);
    setBlogs([]);
  }, [searchParams]);
  return (
    <>
      {latestArticles?.length === 0 || data?.blogs?.length === 0 ? (
        <EmptyResult
          className="col-span-full  px-7 py-8 md:py-20"
          title={"متاسفانه مقاله ای یافت نشد"}
        />
      ) : searchParams.size === 0 && page === 1 ? (
        latestArticles?.map((article, index) => {
          return <BlogCard key={index} {...article} />;
        })
      ) : isLoading ? (
        <TextLoader loadingCondition={isLoading} />
      ) : (
       blogs.map((article, index) => {
          return <BlogCard key={index} {...article} />;
        })
      )}

      <div className=" mt-8 col-span-full flex justify-center">
        {data?.totalPages == data?.currentPage && !isLoading
          ? "تمامی دوره ها نمایش داده شد."
          : (data?.blogs.length as number) > 0 && (
              <CoursePaginBtn
                page={page}
                setPage={setPage}
                isFetching={isLoading}
              />
            )}
      </div>
    </>
  );
}

export default BlogList;
