import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function DropdownText ({ title }) {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  function handleDropDown () {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        class='flex flex-row items-center text-xl font-bold text-white'
        type='button'
        onClick={() => handleDropDown()}
      >
        {title}
        <svg
          class='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      <div
        id='dropdown'
        class={`z-10 ${
          isOpen ? 'block' : 'hidden'
        } mt-32 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          class='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownDefaultButton'
        >
          <li>
            <a
              onClick={() => navigate('/usuarios')}
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Usuários
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate('/documentos')}
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Documentos
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
