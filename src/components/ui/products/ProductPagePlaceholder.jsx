import React from 'react'

function ProductPagePlaceholder() {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-6 py-10 animate-pulse max-w-6xl mx-auto">
      
      <div className="w-full md:w-1/2 h-80 bg-gray-300 rounded-lg" />

      <div className="w-full md:w-1/2 space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4" />
        
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />

        <div className="h-6 bg-gray-300 rounded w-1/3 mt-6" />

        <div className="h-10 bg-gray-300 rounded w-40 mt-4" />
      </div>
    </div>

  )
}

export default ProductPagePlaceholder
