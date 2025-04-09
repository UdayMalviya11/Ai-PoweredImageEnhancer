import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin shadow-lg mb-3"></div>
      <p className="text-gray-600 text-lg animate-pulse">Cooking...</p>
    </div>
  )
}

export default Loading

