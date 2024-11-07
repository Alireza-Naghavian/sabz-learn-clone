import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import {
  ArticlesBodyType,
  ArticleTableData,
  FilterBlogReqType,
} from "@/types/services/articles.t";

export const articleSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createArticles: builder.mutation<ResultMsg, ArticlesBodyType>({
      query: ({
        body,
        cover,
        description,
        title,
        creator,
        categoryID,
        shortName,
        isActiveNotif
      }) => ({
        url: "/articles",
        method: "POST",
        credentials: "include",
        body: {
          body,
          cover,
          description,
          title,
          creator,
          categoryID,
          shortName,
          isActiveNotif
        },
      }),
      invalidatesTags: ["article", "articles","articlesData"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllBlogs: builder.query<ArticleTableData[], void>({
      query: () => ({
        url: "/articles",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["articles"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeArticle: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/articles/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["article", "articles","articlesData"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getBlogsData :builder.query<FilterBlogReqType,{page:number,limit:number}>({
      query:({page,limit})=>({
        url:"/articles",
        method:"GET",
        credentials:"include",
        headers:{
          'X-Page':page.toString(),
          'X-Limit':limit.toString(),
        }
      }),
      providesTags:["articlesData"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    })
  }),
});
export const {
  useCreateArticlesMutation,
  useGetAllBlogsQuery,
  useRemoveArticleMutation,
  useGetBlogsDataQuery
} = articleSlice;
