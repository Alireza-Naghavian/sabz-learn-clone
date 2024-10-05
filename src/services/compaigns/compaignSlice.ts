import {
  CompaignBodyType,
  CompaignTableData,
} from "@/types/services/compaign.t";
import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const compaignSlice = apiSlice.injectEndpoints({
  endpoints: (buidler) => ({
    startCompaign: buidler.mutation<ResultMsg, CompaignBodyType>({
      query: ({ endDate, fixCover, mainCover, percent, title }) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("percent", percent.toString());
        formData.append("endDate", endDate.toString());
        const fixCoverFile = fixCover[0];
        const mainCoverFile = mainCover[0];
        formData.append("mainCover", mainCoverFile);
        formData.append("fixCover", fixCoverFile);
        return {
          url: "/offs/all",
          method: "POST",
          credentials: "include",
          body: formData,
        };
      },
      invalidatesTags: ["compaign"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    allCompaign: buidler.query<CompaignTableData[], void>({
      query: () => ({
        url: "/offs/all",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["compaign"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeCompaign: buidler.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/offs/all/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["compaign"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useStartCompaignMutation, useAllCompaignQuery,useRemoveCompaignMutation } = compaignSlice;
