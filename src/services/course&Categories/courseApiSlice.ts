import {
  CatBodytype,
  CourseDataTable,
  CourseQuery,
  CreateCatMgs,
  CreateCorseType,
  RemoveQuery,
  ResultMsg,
  SingleCourseData
} from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { EditFormValueType } from "@/components/layouts/admin/Courses/CourseForm/EditCourseForm";
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
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllCat: builder.query<CatBodytype[], void>({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
      providesTags: ["categories"],
      transformErrorResponse(baseQueryReturnValue) {
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
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    createCourse: builder.mutation<ResultMsg, CreateCorseType>({
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
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getCourses: builder.query<CourseDataTable[], void>({
      query: () => ({
        url: "/courses/getInit",
        method: "GET",
      }),
      providesTags: ["courses"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getCourse: builder.query<SingleCourseData, CourseQuery>({
      query: ({ shortName }) => ({
        url: `/courses/${shortName}`,
        method: "GET",
        credentials:"include"
      }),
      providesTags: (result, error, { shortName }) => result ?[{ type: "course", id: shortName }] :["course"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    updateCourse: builder.mutation<ResultMsg, EditFormValueType>({
      query: ({
        _id,
        name,
        description,
        shortName,
        categoryID,
        price,
        status,
        cover,
        discount,
        isComplete,
        duration,
        creator,
        isFree,
      }) => ({
        url: `/courses/${_id}`,
        method: "PATCH",
        credentials: "include",
        body: {
          name,
          description,
          shortName,
          categoryID,
          price,
          status,
          cover,
          creator,
          discount,
          isComplete,
          duration,
          isFree,
        },
      }),
      invalidatesTags: ["courses","course"],
      transformErrorResponse(baseQueryReturnValue) {
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
      transformErrorResponse(baseQueryReturnValue) {
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
  useRemoveCoursesMutation,
  useGetCourseQuery,
  useUpdateCourseMutation,

} = courseApiSlice;
