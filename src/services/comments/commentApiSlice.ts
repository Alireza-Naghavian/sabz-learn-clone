import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { CommentBodyType, CommentData } from "@/types/services/comment.t";

export const commentApiSlice= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createComment:builder.mutation<ResultMsg,CommentBodyType>({
            query:({body,courseShortName})=>({
                url:"/comment",
                method:"POST",
                credentials:"include",
                body:{body,courseShortName}
            }),
            invalidatesTags:["comment","comments"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        }),
        getAllComments:builder.query<CommentData,void>({
            query:()=>({
                url:"/comments",
                method:"GET"
            }),
            providesTags:["comments"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        })
    })
})


export const {useCreateCommentMutation,useGetAllCommentsQuery} = commentApiSlice