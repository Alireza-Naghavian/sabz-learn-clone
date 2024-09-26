import { CatBodytype, CreateCatMgs } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCat: builder.mutation<CreateCatMgs, CatBodytype>({
      query: ({ link, title }) => ({
        url: "/category",
        method: "POST",
        credentials: "include",
        body: { link, title },
      }),
      invalidatesTags: ["categories"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useAddCatMutation } = courseApiSlice;
