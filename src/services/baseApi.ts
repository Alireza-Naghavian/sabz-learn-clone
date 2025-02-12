import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/v1"
    : process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_API_URL;
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL as string,
    timeout: 60000,
  }),

  tagTypes: [
    "user",
    "userData",
    "offer",
    "offers",
    "users",
    "courses",
    "categories",
    "course",
    "blogs",
    "blog",
    "comments",
    "courseComments",
    "comment",
    "compaign",
    "topics",
    "sessions",
    "session",
    "sessionInfo",
    "menu",
    "articles",
    "article",
    "articlesData",
    "userQuestion",
    "userQuestions",
    "tickets",
    "userTickets",
    "ticket",
    "depts",
  ],
  endpoints: () => ({}),
});

export default apiSlice;
