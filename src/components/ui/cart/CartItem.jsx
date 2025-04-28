import React, { useState } from 'react'
import { BASE_URL } from '../../../services/marketShellApi';
import { useGetQuantityUpdateMutation } from '../../../services/marketShellApi';
import { useDeleteItemMutation } from '../../../services/marketShellApi';
import { toast } from 'react-toastify';



function CartItem({ item,refetch }) {
  console.log(item)

  const [quantityUpdate, { isLoading }] = useGetQuantityUpdateMutation();
  const [quantity, setQuantity] = useState(item.quantity)
  const[deleteItem] = useDeleteItemMutation();
  const[showModal, setShowModal] = useState(false);

  const handleUpdate = async () => {    
    try {
      await quantityUpdate({ 
        item_id : item.id,
        quantity: quantity }).unwrap();

        refetch();

    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async ()=> {
    try{
      await deleteItem(item.id).unwrap();
      setShowModal(false);
      toast.success("Cart item removed successfully")
    }
    catch(error){
      toast.error("Failed to delete item")
    }
  }

  return (
    <div className="flex w-full items-center gap-4bg-[#f8f9fa] p-6 m-6" >
      <img src={`${BASE_URL}${item.product.image}`} alt="" className="w-16 h-16 object-cover rounded mx-2.5" />
      <div className="flex-1" >
        <h5 className="font-semibold">{item.product.name}</h5>
        <p className="text-sm text-gray-600">₦{item.total.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</p>
      </div>
      <div className="flex gap-2.5">
        <div>
          <input
            type="number"
            value={quantity}
            onChange={(event)=>setQuantity(event.target.value)}
            min="1"
            className="w-14 px-2 py-1 border-0 shadow rounded text-center"
          />
        </div>

        <button onClick={handleUpdate} disabled={isLoading}className="rounded w-25 p-1 text-sm text-white bg-[#6050DC]  hover:bg-[#6050dce4] transition duration-200">{isLoading? "updating...": "Update Item"}</button>
        <button onClick={()=>setShowModal(true)} className="rounded w-20 p-1 text-sm text-white bg-red-600 hover:bg-red-800">Remove</button>
        
        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-80">
              <h3 className="text-lg font-bold mb-4"> Confirm Item Removal</h3>
              <p className="mb-6">Are you sure you want to remove this item from your cart?</p>
              <div className="flex justify-end gap-4">
                <button onClick={()=> setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                  > Cancel</button>
                  <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition duration-200"
                  >
                    Yes, Remove

                  </button>
              </div>
            </div>
            </div>
        )

        }

      </div>
    </div>
  )


}

export default CartItem
