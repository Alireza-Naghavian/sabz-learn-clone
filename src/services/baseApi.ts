import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/v1",
    timeout: 60000,
    
  }),
  
  tagTypes: [
    "user",
    "offer",
    "offers",
    "users",
    "courses",
    "categories",
    "course",
    "blogs",
    "blog",
    "comments",
    "comment",
    "topics",
    "sessions",
    "session",
    "menu",
    "articles",
    "article"
  ],
  endpoints: () => ({}),
});

export default apiSlice;
