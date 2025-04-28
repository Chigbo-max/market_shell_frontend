import React, { useState } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { useGetCartQuery } from '../../../services/marketShellApi';
import {Link} from "react-router-dom";
import {ClipLoader} from "react-spinners"

function CartPage() {

  const cart_code = localStorage.getItem('cart_code');
  const shouldRefetch = cart_code;
  const{data, isLoading, refetch} = useGetCartQuery({cart_code}, {skip: !shouldRefetch});

  const tax = 0.04;

  if(isLoading){
    return(
      <div className="w-full flex justify-center items-center">
      <ClipLoader
      color='#6050dce4'
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    /></div>
    )
  }

  if (!data?.items?.length){
    return (
      <div className="flex justify-center items-center h-screen w-full px-4">
      <div
        role="alert"
        className="w-full max-w-md animate-pulse"
      >
        <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">
          Cart is Empty
          </div>
        <div className="border border-t-0 border-gray-400 rounded-b bg-gray-100 px-4 py-3 text-gray-700">
          <p>You haven't added any item yet</p>
          <Link to='/' className="text-[#6050DC] underline mt-2 inline-block">Add items now</Link>
        </div>
      </div>
    </div>
    )
  }


  return (
    <div className="container mx-auto px-10 py-10">
      <h5 className="text-2xl font-semibold mb-6 text-center">Shopping Cart</h5>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-4">
          {data?.items?.map((item)=>
          <CartItem item={item} key={item.id} refetch={refetch} />
             )}
        </div>

        <div className="lg:w-1/3 w-full">
          <CartSummary data={data} tax={tax}/>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
