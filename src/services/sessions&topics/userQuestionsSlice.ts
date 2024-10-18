import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import {
  AnswerQBodyType,
  MergeQBody,
  QuestionSampleType,
  UserQBodyType
} from "@/types/services/sessions&Topics.t";
import apiSlice from "../baseApi";

export const userQuestionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createQuestion: builder.mutation<ResultMsg, UserQBodyType>({
      query: ({ body, creator, sessionId, shortName }) => ({
        url: `/courses/session/question/${shortName}/${sessionId}`,
        method: "POST",
        credentials: "include",
        body: { body, creator },
      }),
      invalidatesTags: ["userQuestion", "userQuestions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getUserQuestion: builder.query<QuestionSampleType[], void>({
      query: () => ({
        url: `/courses/session/question`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["userQuestion"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    allQuestions: builder.query<MergeQBody[], void>({
      query: () => ({
        url: `/courses/session/questions`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["userQuestions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    asnwerQuestion: builder.mutation<ResultMsg, AnswerQBodyType>({
      query: ({ body, sessionId, questionId  }) => ({
        url: "/courses/session/question/answer",
        method: "POST",
        credentials: "include",
        body: { body, sessionId, questionId  },
      }),
      invalidatesTags: [ "userQuestions","userQuestion"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeUserQuestion :builder.mutation<ResultMsg,RemoveQuery&{userId:string}>({
      query:({_id,userId})=>({
        url:`courses/session/questions/${userId}/${_id}`,
        method:"DELETE",
        credentials:"include"
      }),
      invalidatesTags:["userQuestions","userQuestion"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    
  }),
});
export const {
  useCreateQuestionMutation,
  useGetUserQuestionQuery,
  useAllQuestionsQuery,
  useAsnwerQuestionMutation,
  useRemoveUserQuestionMutation
} = userQuestionApi;
