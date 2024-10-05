import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { OfferCodeBody, OfferTableData } from "@/types/services/offercode.t";
export const OfferSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCode: builder.mutation<ResultMsg, OfferCodeBody>({
      query: ({ code, course, max, percent }) => ({
        url: "/offs",
        method: "POST",
        credentials: "include",
        body: { code, course, max: Number(max), percent: Number(percent) },
      }),
      invalidatesTags: ["offers"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllCodes: builder.query<OfferTableData[], void>({
      query: () => ({
        url: "/offs",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["offers"], 
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeCode: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/offs/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["offers"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useCreateCodeMutation,
  useGetAllCodesQuery,
  useRemoveCodeMutation,
} = OfferSlice;
