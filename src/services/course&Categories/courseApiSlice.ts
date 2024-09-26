import { CatBodytype, CreateCatMgs, RemoveCatBody, RemoveCatMgs } from "@/types/services/course&category.t";
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
    getAllCat: builder.query<CatBodytype[], void>({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["categories"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
    removeCat: builder.mutation<RemoveCatMgs,RemoveCatBody>({
        query:({_id})=>({
            url:`/category/${_id}`,
            method:"DELETE",
            credentials:"include",
            
        }),
        invalidatesTags:["categories"],
        transformErrorResponse(baseQueryReturnValue, meta, arg) {
            return baseQueryReturnValue.data;
          },
    })
  }),
});

export const { useAddCatMutation ,useGetAllCatQuery,useRemoveCatMutation} = courseApiSlice;
