import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import {
  AnswerBodyType,
  DeptBodyType,
  TicketBodyType,
  TicketTableData,
} from "@/types/services/tickets.t";
import apiSlice from "../baseApi";

export const ticketApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTicket: builder.mutation<ResultMsg, TicketBodyType>({
      query: ({ body, departmentID, title }) => ({
        url: "/tickets",
        method: "POST",
        credentials: "include",
        body: { body, departmentID, title },
      }),
      invalidatesTags: ["tickets", "userTickets"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    createDept: builder.mutation<ResultMsg, { title: string }>({
      query: ({ title }) => ({
        url: "/tickets/dept",
        method: "POST",
        credentials: "include",
        body: { title },
      }),
      invalidatesTags: ["tickets", "depts"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    allDetps: builder.query<DeptBodyType[], void>({
      query: () => ({
        url: "/tickets/departments",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["depts"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllTickets: builder.query<TicketTableData[], void>({
      query: () => ({
        url: "/tickets",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["tickets"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    userTickets: builder.query<TicketTableData[], void>({
      query: () => ({
        url: "/tickets/user",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["userTickets"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getTicket: builder.query<TicketTableData, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/tickets/${_id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["ticket"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    setAnswer: builder.mutation<ResultMsg, AnswerBodyType>({
      query: ({ body, sender, ticketID }) => ({
        url: `/tickets/answer/${ticketID}`,
        method: "POST",
        credentials: "include",
        body: { body, sender },
      }),
      invalidatesTags: ["ticket", "tickets", "userTickets"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    replyUser: builder.mutation<ResultMsg, AnswerBodyType>({
      query: ({ body, sender, ticketID }) => ({
        url: `/tickets/${ticketID}`,
        method: "POST",
        credentials: "include",
        body: { body, sender },
      }),
      invalidatesTags: ["ticket", "tickets", "userTickets"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useCreateDeptMutation,
  useAllDetpsQuery,
  useCreateTicketMutation,
  useGetAllTicketsQuery,
  useUserTicketsQuery,
  useGetTicketQuery,
  useSetAnswerMutation,
  useReplyUserMutation
} = ticketApiSlice;
