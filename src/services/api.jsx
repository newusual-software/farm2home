import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
	reducerPath: "productApi",
    tagTypes: ["Product"],
    baseQuery: fetchBaseQuery({
      baseUrl: "https://e-commerce-api-51vp.onrender.com/",
    }),
    endpoints: (builder) => ({
    	// login customer
      loginUser: builder.mutation({
         query: (data) => ({
         url: "/login",
         method: "POST",
         body: data,
       }),
     }),
    })
});

export const { useLoginUserMutation } = userApi;