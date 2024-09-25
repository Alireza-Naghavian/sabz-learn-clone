import {
  CreateUserType,
  loginType,
  SignUpResultMsg,
} from "@/types/services/authapi.t";
import apiSlice from "../baseApi";
import { userApiSlice } from "./useApiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResultMsg, CreateUserType>({
      query: ({ email, password, username }) => ({
        url: "/auth/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: { email, username, password },
      }),
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data
      },
      invalidatesTags: ["user"],
    }),
    login: builder.mutation<SignUpResultMsg, loginType>({
      query: ({ identifier, password }) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body: { identifier, password },
      }),transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data
      },
      invalidatesTags: ["user"]
    }),
  }),
});
export const { useSignUpMutation,useLoginMutation } = authApiSlice;
