import React from 'react'
import { Spinner } from './Spinner'

export function Button ({ text, size, type, isLoading }) {
  return (
    <div>
      <button
        disabled={isLoading}
        class={`w-${size || 'full'}  ${
          isLoading && 'opacity-25'
        } py-4 px-8 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200 content-center inline-flex items-center justify-center`}
        type={type}
      >
        {isLoading && <Spinner />}
        {text}
      </button>
    </div>
  )
}
