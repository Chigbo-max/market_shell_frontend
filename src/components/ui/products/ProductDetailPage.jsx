import React from 'react';
import { BASE_URL, usePostAddItemMutation, useGetProductInCartQuery} from '../../../services/marketShellApi';
import RelatedProducts from './RelatedProducts';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ProductDetail({ data }) {
  if (!data) return (<div className="flex justify-center items-center h-screen w-full px-4">
        <div
          role="alert"
          className="w-full max-w-md animate-pulse"
        >
          <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">
            No Product
            </div>
          <div className="border border-t-0 border-gray-400 rounded-b bg-gray-100 px-4 py-3 text-gray-700">
            <p>We're sorry, products are not available at this time</p>
          </div>
        </div>
      </div>);

  const { id, name, description, price, image, similar_products } = data;
  const [addItem, { isLoading: isAdding }] = usePostAddItemMutation()
  const [inCart, setInCart] = useState(false)

  const cart_code = localStorage.getItem('cart_code')
  const shouldFetch = cart_code && id;
  const { data: cartData } = useGetProductInCartQuery({ cart_code, product_id: id }, { skip: !shouldFetch })

  useEffect(() => {
    setInCart(false)
  }, [id])


  useEffect(() => {
    if (cartData?.product_exists_in_cart) {
      setInCart(true);
    }
    // cartData?.product_exists_in_cart ? setInCart(true) : setInCart(false); //ensures persisstence from backend when u refresh
  }, [cartData])

  const handleAddItem = async (product) => {
    const cart_code = localStorage.getItem('cart_code');
    try {
      const response = await addItem({
        cart_code: cart_code,
        product_id: product.id,
        quantity: 1
      }).unwrap();
      setInCart(true);
      toast.success('Item added successfully');
    } catch (error) {
      toast.error('Failed to add item. Please try again.');
    }

  }



  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
            <img
              src={`${BASE_URL}${image}`}
              alt={name}
              className="rounded-lg object-contain w-full h-96"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{name}</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6">
                ₦{Number(price || 0).toLocaleString('en-NG')}
              </h3>
              <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-white ${inCart
                  ? "bg-gray-600 hover:bg-gray-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
                }`}
                type="button"
                onClick={(e) => { e.preventDefault(); handleAddItem(data); }}
                disabled={isAdding || inCart}
              >
                {inCart ? "Product added to cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        <RelatedProducts data={similar_products} />
      </div>
    </div>
  );
}

export default ProductDetail;