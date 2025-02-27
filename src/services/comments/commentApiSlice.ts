import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import {
  AnswerCommentBodyType,
  CommentBodyType,
  CommentData,
  CommentStatusType,
  CourseCommentType,
} from "@/types/services/comment.t";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation<ResultMsg, CommentBodyType>({
      query: ({ body, courseShortName }) => ({
        url: "/comment",
        method: "POST",
        credentials: "include",
        body: { body, courseShortName },
      }),
      invalidatesTags: ["comment", "comments", "courseComments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllComments: builder.query<CommentData[], void>({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      providesTags: ["comments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getCourseComment: builder.query<CourseCommentType, RemoveQuery&{page:number,limit:number}>({
      query: ({ _id,page=1,limit=3 }) => ({
        url: `/comment/courseComment/${_id}`,
        headers:{
          'X-Page': page.toString(),  
          'X-Limit': limit.toString()  
        },
        method: "GET",
      }),
      providesTags: ["courseComments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    changeCommentStatus: builder.mutation<ResultMsg, CommentStatusType>({
      query: ({ _id, status }) => ({
        url: `/comment/accept/${_id}`,
        method: "PATCH",
        credentials: "include",
        body: { status },
      }),
      invalidatesTags: ["comment", "comments", "courseComments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    answerComment: builder.mutation<ResultMsg, AnswerCommentBodyType>({
      query: ({ _id, body, creator }) => ({
        url: `/comment/answer/${_id}`,
        method: "POST",
        credentials: "include",
        body: { creator, body },
      }),
      invalidatesTags: ["comment", "comments", "courseComments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removecomment: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/comment/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["comment", "comments", "courseComments"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useGetAllCommentsQuery,
  useChangeCommentStatusMutation,
  useAnswerCommentMutation,
  useRemovecommentMutation,
  useGetCourseCommentQuery
} = commentApiSlice;
