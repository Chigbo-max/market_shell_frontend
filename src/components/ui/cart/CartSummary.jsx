import React from 'react';
import { Link } from 'react-router-dom';

function CartSummary(props) {

  const { data, tax } = props;
  const sumTotal = data?.sum_total || 0;
  const subTotal = sumTotal;
  const taxCalc = subTotal * (tax/100);
  const total = subTotal + taxCalc;

  return (
    <div className="w-full md:max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
      <h5 className="text-lg font-semibold mb-4">Cart Summary</h5>
      <hr className="mb-4" />

      <div className="flex justify-between mb-3 text-sm">
        <span>Sub Total</span>
        <span>₦{subTotal.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</span>
      </div>

      <div className="flex justify-between mb-3 text-sm">
        <span>Tax</span>
        <span>{tax.toFixed(2)}%</span>
      </div>

      <div className="flex justify-between mb-6 text-base font-semibold">
        <span>Total</span>
        <span>₦{total.toLocaleString('en-NG', { minimumFractionDigits: 2 })}</span>
      </div>

      <Link to="/checkout">
        <button className="w-full bg-[#6050DC] text-white py-2 rounded hover:bg-[#6050dce4] transition duration-200">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  )
}

export default CartSummary;
