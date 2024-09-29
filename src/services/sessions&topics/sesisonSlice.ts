import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { TopicBody } from "@/types/services/sessions&Topics.t";

export const sessionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTopics: builder.mutation<ResultMsg, TopicBody>({
      query: ({ course, title }) => ({
        url: "/topics",
        method: "POST",
        credentials: "include",
        body: { title, course },
      }),
      invalidatesTags:["topics"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {useCreateTopicsMutation} = sessionSlice
