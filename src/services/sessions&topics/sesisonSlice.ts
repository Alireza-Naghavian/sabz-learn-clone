import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import {
  SessionBodyType,
  SessionInfoType,
  SessionTableData,
  TopicBody,
} from "@/types/services/sessions&Topics.t";

export const sessionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopics: builder.mutation<ResultMsg, TopicBody>({
      query: ({ course, title }) => ({
        url: "/topics",
        method: "POST",
        credentials: "include",
        body: { title, course },
      }),
      invalidatesTags: ["topics", "session", "sessions", "course", "courses"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    createSession: builder.mutation<ResultMsg, SessionBodyType>({
      query: ({ course, isFree, time, title, topic, video, _id }) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("time", time);
        formData.append("isFree", String(isFree));
        formData.append("course", course);
        formData.append("topic", topic);
        const videoFile = video[0];
        formData.append("video", videoFile);

        return {
          url: `/courses/${_id}/sessions`,
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["session", "sessions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllSessions: builder.query<SessionTableData[], void>({
      query: () => ({
        url: "/courses/sessions",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["sessions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeSession: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/courses/sessions/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["session", "sessions", "userQuestion", "userQuestions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getSessionInfo: builder.query<SessionInfoType,{ shortName: string; sessionID: string }>({
      query: ({ sessionID, shortName }) => {
        return {
          url: `/courses/session/${shortName}/${sessionID}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["sessionInfo"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useCreateTopicsMutation,
  useCreateSessionMutation,
  useGetAllSessionsQuery,
  useRemoveSessionMutation,
  useGetSessionInfoQuery,
} = sessionSlice;
