import { GetmeType } from "@/types/services/authapi.t";
import apiSlice from "../baseApi";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<GetmeType, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials:"include"
      }),
      providesTags: ["user"],
    }),
  }),
});
export const { useGetMeQuery } = userApiSlice;
