import { useState } from 'react'

export function ToggleDots ({ options }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleDropDown () {
    setIsOpen(!isOpen)
  }

  return (
    <div class="dark">
      <button
        id='dropdownMenuIconButton'
        data-dropdown-toggle='dropdownDots'
        class='inline-flex items-center text-xm font-medium text-center text-gray-900'
        type='button'
        onClick={() => handleDropDown()}
      >
        <svg
          class='w-3 h-3 fill-white'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 4 15'
        >
          <path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
        </svg>
      </button>

      <div
        id='dropdownDots'
        class={`z-10  ${
          isOpen ? 'block' : 'hidden'
        } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          class='py-2 text-sm text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownMenuIconButton'
        >
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href='#'
              class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Earnings
            </a>
          </li>
        </ul>
        <div class='py-2'>
          <a
            href='#'
            class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          >
            Separated link
          </a>
        </div>
      </div>
    </div>
  )
}
