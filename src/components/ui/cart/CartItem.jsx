import React from 'react'
import { BASE_URL } from '../../../services/marketShellApi';
import {useGetQuantityUpdateMutation} from '../../../services/marketShellApi';


function CartItem({data}) {

  const[quantityUpdate, {isLoading}] = useGetQuantityUpdateMutation();

  return (
    <div >
      {data?.items?.map((item) => {
        return (
          <div className="flex w-full items-center gap-4bg-[#f8f9fa] p-6 m-6" key={item.id}>
            <img src={`${BASE_URL}${item.product.image}`} alt="" className="w-16 h-16 object-cover rounded mx-2.5"/>
            <div className="flex-1" >
                <h5 className="font-semibold">{item.product.name}</h5>
                <p className="text-sm text-gray-600">₦{item.total.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</p>
            </div>
            <div className="flex gap-2.5">
            <div>
              <input
               type="number"
               min="1" defaultValue="1"
               className="w-14 px-2 py-1 border-0 shadow rounded text-center"
                />
            </div>
            <button className="rounded w-20 p-1 text-sm text-white bg-red-800">Remove</button>
      
            </div>
            </div>
        )
      })}
    </div>
  )
}

export default CartItem
