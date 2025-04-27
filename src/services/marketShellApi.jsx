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
    invalidatesTags:['cartStats'] //inavlidate after adding item
  }),

  getProductInCart: build.query({
    query: ({cart_code, product_id}) => `/product_in_cart?cart_code=${cart_code}&product_id=${product_id}`,
  }),

  getCartStat:build.query({
    query:({cart_code})=>`/cart_stat?cart_code=${cart_code}`,
    providesTags:['cartStats'] //automatically update after adding item
  }),

  getCart:build.query({
    query:({cart_code})=>`/cart?cart_code=${cart_code}`,
    providesTags:['cartStats']
  }),

  getQuantityUpdate:build.mutation({
    query:((data)=>({
      url: '/quantity_update/',
      method:'PATCH',
      body: data
    }))
  })

})
})


export const {useGetQuantityUpdateMutation, useGetCartQuery, useGetCartStatQuery, useGetProductInCartQuery, useGetProductsQuery,
   useGetProductDetailQuery, usePostAddItemMutation } = marketShellApi