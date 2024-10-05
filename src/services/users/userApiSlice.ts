import { OptionType } from "@/types/consts.t";
import { UserType } from "@/types/services/authapi.t";
import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["users", "user"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    changeRole: builder.mutation<ResultMsg, OptionType & { _id: string }>({
      query: ({ _id, value }) => ({
        url: "/users/role",
        method: "PATCH",
        credentials: "include",
        body: { id: _id, role: value },
      }),
      invalidatesTags: ["user", "users"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    banUser: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/users/ban/${_id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["user", "users"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeUser: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/users/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["user", "users"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useChangeRoleMutation,
  useBanUserMutation,
  useRemoveUserMutation,
} = userApiSlice;
