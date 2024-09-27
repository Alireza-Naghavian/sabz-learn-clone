import {
  CatBodytype,
  CourseBodyType,
  CreateCatMgs,
  RemoveCatBody,
  ResultMsg,
} from "@/types/services/course&category.t";
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
    removeCat: builder.mutation<ResultMsg, RemoveCatBody>({
      query: ({ _id }) => ({
        url: `/category/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["categories"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
    createCourse: builder.mutation<ResultMsg, CourseBodyType>({
      query: ({
        categoryID,
        cover,
        creator,
        description,
        duration,
        isFree,
        longDesc,
        name,
        price,
        shortName,
        status,
      }) => ({
        url: "/courses",
        method: "POST",
        credentials: "include",
        body: {
          categoryID,
          cover,
          creator,
          description,
          duration,
          isFree,
          longDesc,
          name,
          price,
          shortName,
          status,
        },
      }),
      invalidatesTags: ["courses"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useAddCatMutation, useGetAllCatQuery, useRemoveCatMutation,useCreateCourseMutation } =
  courseApiSlice;
