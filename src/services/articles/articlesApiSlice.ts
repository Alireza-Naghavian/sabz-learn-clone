import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { ArticlesBodyType } from "@/types/services/articles.t";

export const articleSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createArticles:builder.mutation<ResultMsg,ArticlesBodyType>({
            query:({body,cover,description,title,creator,categoryID,shortName})=>({
                url:"/articles",
                method:"POST",
                credentials:"include",
                body:{body,cover,description,title,creator,categoryID,shortName}
            }),
            invalidatesTags:["article","articles"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data;
              },
        })
    })
})
export const {useCreateArticlesMutation} = articleSlice