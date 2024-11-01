import apiSlice from "../baseApi";
export type ItemsType ={kind:string,displayLink:string,link:string,title:string}
type ResultDataType ={
  context:{title:string},
  items:ItemsType[]
}
type QueryType = {
  query: string;

};
export const relatedDataSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRelateBlogs: builder.mutation<ResultDataType, QueryType>({
      query: ({ query }) => ({
        url: `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          query
        )}&cx=${process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID}&key=${
          process.env.NEXT_PUBLIC_GOOGLE_API_KEY
        }`,
        method: "GET",
      }),
      transformErrorResponse(baseQueryReturnValue) {
        return baseQueryReturnValue.data;
      },
    }),
  }),
});

export const { useGetRelateBlogsMutation } = relatedDataSlice;
