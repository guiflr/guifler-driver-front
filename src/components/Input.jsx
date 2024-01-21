import React, { useState } from 'react'

export function Input ({ value, placeholder, type, onChange, id, name, error, required}) {
  const handleChange = e => {
    const { value } = e.target
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div class="pb-4">
      <input
        class='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {required && error && <p class="text-red-500 text-xs italic">{`${placeholder} é obrigatório.`}</p>}
    </div>
  )
}
