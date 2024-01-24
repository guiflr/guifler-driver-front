import React from 'react'
import { FolderIcon } from './FolderIcon'
import { ClosedFolderIcon } from './ClosedFolderIcon'
import { DropdownText } from './DropdownText'
import { ToggleDots } from './ToggleDots'

export function Folder ({ text, onClick, isVisible = true }) {
  return (
    <div class='flex flex-row items-center'>
      <div
        onClick={onClick}
        class='flex flex-row items-center mb-1 cursor-pointer'
      >
        {isVisible ? <ClosedFolderIcon /> : <FolderIcon />}
        <p class="text-white">{text}</p>
      </div>
      <ToggleDots />
    </div>
  )
}   
