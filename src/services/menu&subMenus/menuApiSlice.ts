import { RemoveQuery, ResultMsg } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";
import { MenuBodyType, MenuTableData } from "@/types/services/menu.t";

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
    getAllMenus: builder.query<MenuTableData[], void>({
      query: () => ({
        url: "/menus",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["menu"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
    removeMenus: builder.mutation<ResultMsg, RemoveQuery>({
      query: ({ _id }) => ({
        url: `/menus/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["menu"],
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const {
  useCreateMenuMutation,
  useGetAllMenusQuery,
  useRemoveMenusMutation,
} = menuSlice;
