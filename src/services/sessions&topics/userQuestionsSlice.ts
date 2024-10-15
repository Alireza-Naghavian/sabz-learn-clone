import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { UserQBodyType, UserQDataType } from "@/types/services/sessions&Topics.t";

export const userQuestionApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createQuestion:builder.mutation<ResultMsg,UserQBodyType>({
            query:({body,creator,sessionId,shortName})=>({
                url:`/courses/session/question/${shortName}/${sessionId}`,
                method:"POST",
                credentials:"include",
                body:{body,creator}
            }),
            invalidatesTags:["userQuestion","userQuestions"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        }),
        getUserQuestion : builder.query<UserQDataType[],Partial<UserQBodyType>>({
            query:({sessionId,shortName})=>({
                url:`/courses/session/question/${shortName}/${sessionId}`,
                method:"GET",
                credentials:"include",

            }),
            providesTags:["userQuestion"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        })
    })
})
export const {useCreateQuestionMutation,useGetUserQuestionQuery} = userQuestionApi