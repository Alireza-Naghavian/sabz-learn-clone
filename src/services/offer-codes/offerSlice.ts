import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { OfferCodeBody } from "@/types/services/offercode.t";

export const OfferSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCode: builder.mutation<ResultMsg, OfferCodeBody>({
      query: ({ code, course, max, percent }) => ({
        url: "/offs",
        method: "POST",
        credentials: "include",
        body: { code, course, max: Number(max), percent: Number(percent) },
      }),
      invalidatesTags:["offer","offers"],
      transformErrorResponse(baseQueryReturnValue) {
          return baseQueryReturnValue.data
      },
    }),
  }),
});

export const {useCreateCodeMutation} = OfferSlice