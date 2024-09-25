import apiSlice from "../baseApi";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<any, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        credentials:"include"
      }),
      providesTags: ["user"],
    }),
  }),
});
export const { useGetMeQuery } = userApiSlice;
