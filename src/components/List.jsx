import React from 'react'
import { EditButton } from './EditButton'

const roles = {
  admin: 'Administrador',
  guest: 'Visitante',
  creator: 'Criador'
}

export function List (user) {
  const { username, email, role } = user
  
  return (
    <div class='dark max-w-2xl mx-auto'>
      <div class='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div class='flow-root'>
          <ul role='list' class='divide-y divide-gray-200 dark:divide-gray-700'>
            <li class='py-3 sm:py-4'>
              <div class='flex items-center space-x-4'>
                <div class='flex-1 min-w-0'>
                  <p class='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    {username}
                  </p>
                  <p class='text-sm text-gray-500 truncate dark:text-gray-400'>
                    {email}
                  </p>
                </div>
                <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {roles[role]}
                </div>
                <div class='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  <EditButton />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
