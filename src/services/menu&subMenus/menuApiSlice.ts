import { ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { MenuBodyType } from "@/types/services/menu.t";

export const menuSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createMenu: builder.mutation<ResultMsg, MenuBodyType>({
      query: ({ href, parent, title }) => ({
        url: "/menus",
        method: "POST",
        credentials: "include",
        body: { href, title, parent },
      }),
      invalidatesTags: ["menu"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    getAllMenus:builder.query<MenuBodyType[],void>({
      query:()=>({
        url:"/menus",
        method:"GET",
        credentials:"include"
      }),
      providesTags:["menu"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    })
  }),
});

export const {useCreateMenuMutation,useGetAllMenusQuery} = menuSlice