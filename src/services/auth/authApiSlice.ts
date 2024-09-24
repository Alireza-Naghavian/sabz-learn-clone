import { CreateUserType, SignUpResultMsg } from "@/types/services/authapi.t";
import apiSlice from "../baseApi";
import { userApiSlice } from "./useApiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResultMsg, CreateUserType>({
      query: ({ email, password, username }) => ({
        url: "/auth/register",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        credentials:"include",
        body: { email, username, password },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useSignUpMutation } = authApiSlice;
