import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { SessionBodyType, TopicBody } from "@/types/services/sessions&Topics.t";

export const sessionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopics: builder.mutation<ResultMsg, TopicBody>({
      query: ({ course, title }) => ({
        url: "/topics",
        method: "POST",
        credentials: "include",
        body: { title, course },
      }),
      invalidatesTags: ["topics"],
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
          body:  formData ,
        };
      },
      invalidatesTags: ["session", "sessions"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useCreateTopicsMutation, useCreateSessionMutation } =
  sessionSlice;
