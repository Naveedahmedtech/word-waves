import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["posts", "users"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: "posts" }),
        providesTags: ["posts"],
    }),
    getUsers: build.query({
      query: () => ({ url: 'users' }),
      providesTags: ["users"]
    })
    ,
    addUsers: build.mutation({
      query: (body) => ({
        url: 'users',
        method: "POST",
        body,
        header: {"Content-type": "application/json"}
      }),
      invalidatesTags: ["users"]
    })
  }),
});


export const { useGetPostsQuery, useGetUsersQuery , useAddUsersMutation } = postsApi; 
