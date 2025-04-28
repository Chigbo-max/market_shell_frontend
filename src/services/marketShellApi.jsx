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
      query: (slug) => `/product_detail/${slug}`,
    }),

    postAddItem: build.mutation({
      query: (data) => ({
        url: '/add_item/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['cartStats'] //inavlidate after adding item
    }),

    getProductInCart: build.query({
      query: ({ cart_code, product_id }) => `/product_in_cart?cart_code=${cart_code}&product_id=${product_id}`,
    }),

    getCartStat: build.query({
      query: ({ cart_code }) => `/cart_stat?cart_code=${cart_code}`,
      providesTags: ['cartStats'] //automatically update after adding item
    }),

   
    getCart: build.query({
      query: ({ cart_code }) => `/cart?cart_code=${cart_code}`,
      providesTags: ['cartStats']
    }),


    getQuantityUpdate: build.mutation({
      query: (({ item_id, quantity }) => ({
        url: '/quantity_update/',
        method: 'PATCH',
        body: { item_id, quantity },
      })),
      invalidatesTags: ['cartStats'],


      async onQueryStarted({ item_id, quantity }, { dispatch, queryFulfilled }) {
        try {
          const patchResult = dispatch(
            marketShellApi.util.updateQueryData('getCart', { cart_code: localStorage.getItem('cart_code') }, (draft) => {
              const item = draft.items.find(item => item.id === item_id);
              if (item) {
                item.quantity = quantity;
              }
              draft.sum_total = draft.items.reduce(
                (acc, item) => acc + (item.product.price * item.quantity),
                0
              );
            })
          );


          await queryFulfilled;
        } catch (error) {
          console.log("Failed to update quantity", error);
          patchResult.undo(); //rolls back if API failed
        };
      }
    }),

    deleteItem: build.mutation({
      query: ((item_id)=>({
        url: '/delete_item/',
        method: 'PATCH',
        body: {item_id},
      })),
      invalidatesTags: ['cartStats'],
    }),


  })
})


export const {useDeleteItemMutation, useGetQuantityUpdateMutation, useGetCartQuery, useGetCartStatQuery, useGetProductInCartQuery, useGetProductsQuery,
  useGetProductDetailQuery, usePostAddItemMutation } = marketShellApi