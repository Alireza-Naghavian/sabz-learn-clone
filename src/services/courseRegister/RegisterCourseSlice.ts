import {
  ResultMsg
} from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const registerCourseSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerCourse: builder.mutation<ResultMsg,{ _id: string; price: number; }>({
      query: ({ _id, price }) => ({
        url: `/courses/${_id}/register`,
        method: "POST",
        credentials: "include",
        body: { price },
      }),
      invalidatesTags: ["course","course"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});
export const { useRegisterCourseMutation } = registerCourseSlice;
