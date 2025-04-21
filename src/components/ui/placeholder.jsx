import React from 'react'

function placeholder() {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-[450px] flex flex-col">
            <div className="h-48 bg-gray-300 rounded-t-lg"></div>
            <div className="p-4 space-y-2 flex-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="p-4">
              <div className="h-10 bg-gray-300 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      );
}

export default placeholder
