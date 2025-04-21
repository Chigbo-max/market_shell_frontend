import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'http://127.0.0.1:8000'

export const marketShellApi = createApi({
  reducerPath: 'marketShellApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),

    getProductDetail: build.query({
      query:(slug)=> `/product_detail/${slug}`,
  }),

  postAddItem: build.mutation({
    query: (data) => ({
      url: '/add_item/',
      method: 'POST',
      body: data,
    }),
  }),

  getProducts: build.query({
    query: () => '/product_in_cart',
  }),

})
})


export const { useGetProductsQuery,
   useGetProductDetailQuery, usePostAddItemMutation } = marketShellApi