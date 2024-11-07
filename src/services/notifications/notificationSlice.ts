import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const notificationSilce = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
       pushSubscription:builder.mutation<ResultMsg,any>({
        query:(sub)=>({
            url:"/subscription",
            method:"POST",
            body:sub
        }),
        transformErrorResponse(baseQueryReturnValue) {
            return baseQueryReturnValue.data
        },
       }) 
    })
})

export const {usePushSubscriptionMutation} = notificationSilce