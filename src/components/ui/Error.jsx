import React from 'react';

function Error() {
  return (
    <div className="flex justify-center items-center h-screen w-full px-4">
      <div
        role="alert"
        className="w-full max-w-md animate-pulse"
      >
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Danger
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Something not ideal might be happening.</p>
        </div>
      </div>
    </div>
  );
}

export default Error;
