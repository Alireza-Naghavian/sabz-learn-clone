import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { DeptBodyType, TicketBodyType } from "@/types/services/tickets.t";

export const ticketApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createTicket:builder.mutation<ResultMsg,TicketBodyType>({
            query:({body,departmentID,title})=>({
                url:"/tickets",
                method:"POST",
                credentials:"include",
                body:{body,departmentID,title}
            }),
            invalidatesTags:["tickets"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        }),
        createDept:builder.mutation<ResultMsg,{title:string}>({
            query:({title})=>({
                url:"/tickets/dept",
                method:"POST",
                credentials:"include",
                body:{title}
            }),
            invalidatesTags:["tickets","depts"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        }),
        allDetps :builder.query<DeptBodyType[],void>({
            query:()=>({
                url:"/tickets/departments",
                method:"GET",
                credentials:"include",

            }),
            providesTags:["depts"],
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        })
    })
})

export const {useCreateDeptMutation,useAllDetpsQuery,useCreateTicketMutation} = ticketApiSlice