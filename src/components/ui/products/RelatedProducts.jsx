import React from 'react';
import { BASE_URL } from '../../../services/marketShellApi';
import { Link } from 'react-router-dom';

function RelatedProducts({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => {
          const { id, name, description, price, image , slug} = product;
          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
            <Link to={`/detail/${slug}`} className="block text-black hover:text-gray-800">
                
              <div className="h-48 overflow-hidden">
                <img
                  src={`${BASE_URL}${image}`}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-gray-600">
                    ₦{new Intl.NumberFormat('en-NG').format(price)}
                  </span>
                  {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProducts;