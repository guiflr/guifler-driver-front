import React from 'react'
import { EditButton } from './EditButton'
import { Card } from './Card'

const roles = {
  admin: 'Administrador',
  guest: 'Visitante',
  creator: 'Criador'
}

export function List ({ user, onClick }) {
  const { username, email, role } = user

  return (
    <Card>
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
                <EditButton onClick={onClick} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  )
}
