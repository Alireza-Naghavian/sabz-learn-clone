import { UserType } from "@/types/services/authapi.t";
import apiSlice from "../baseApi";
import { ResultMsg } from "@/types/services/course&category.t";
import { RoleType } from "@/types/consts.t";

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
    changeRole :builder.mutation<ResultMsg,RoleType&{_id:string}>({
      query:({_id,value})=>({
        url:"/users/role",
        method:"PATCH",
        credentials:"include",
        body:{id:_id,role:value}
      }),
      invalidatesTags:["user","users"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    })
  }),
});

export const { useGetUsersQuery,useChangeRoleMutation } = userApiSlice;
