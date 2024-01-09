import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://farm2home.cyclic.app/",
    //baseUrl: "http://127.0.0.1:3001/",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: (id) => `/cart/get/${id}`,
      providesTags: [{ type: "Cart" }],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/cart/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Cart" }],
    }),
    increment: builder.mutation({
      query: (id) => ({
        url: "/cart/inc",
        method: "PUT",
        body: id,
      }),
      invalidatesTags: [{ type: "Cart" }],
    }),
    // cart dec
    deccrement: builder.mutation({
      query: (id) => ({
        url: "/cart/dec",
        method: "PUT",
        body: id,
      }),
      invalidatesTags: [{ type: "Cart" }],
    }),
  }),
});

export const {
  useGetCartsQuery,
  useAddToCartMutation,
  useDeccrementMutation,
  useIncrementMutation,
} = cartApi;
