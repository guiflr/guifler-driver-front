import React from 'react'
import { Spinner } from './Spinner'

export function Button ({ text, size, type, isLoading, onClick, color = 'default' }) {

  const colors = {
    'success': 'bg-green-600',
    'default':' bg-blue-600'
  }

  const hoverColors = {
    'success': 'bg-green-700',
    'default':' bg-blue-700'
  }
  return (
    <div>
      <button
        disabled={isLoading}
        onClick={onClick}
        class={`w-${size || 'full'}  ${
          isLoading && 'opacity-25'
        } py-4 px-8 ${colors[color]} hover:${hoverColors[color]} rounded text-sm font-bold text-gray-50 transition duration-200 content-center inline-flex items-center justify-center`}
        type={type}
      >
        {isLoading && <Spinner />}
        {text}
      </button>
    </div>
  )
}
