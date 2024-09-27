import {
  CatBodytype,
  CourseBodyType,
  CourseDataTable,
  CreateCatMgs,
  RemoveQuery,
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
    removeCat: builder.mutation<ResultMsg, RemoveQuery>({
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
        preReq,
        support,
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
          preReq,
          support,
        },
      }),
      invalidatesTags: ["courses", "course"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        console.log(baseQueryReturnValue);
        return baseQueryReturnValue.data;
      },
    }),
    getCourses: builder.query<CourseDataTable[], void>({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
      providesTags: ["courses"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
    removeCourses: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/courses/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["course", "courses"],
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useAddCatMutation,
  useGetAllCatQuery,
  useRemoveCatMutation,
  useCreateCourseMutation,
  useGetCoursesQuery,
  useRemoveCoursesMutation
} = courseApiSlice;
