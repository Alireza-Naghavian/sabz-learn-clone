import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/v1",
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
    "userQuestion",
    "userQuestions",
    "tickets",
    "userTickets",
    "ticket",
    "depts"
  ],
  endpoints: () => ({}),
});

export default apiSlice;
