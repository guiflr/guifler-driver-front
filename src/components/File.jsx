import React from 'react'
import { FileIcon } from './FileIcon'
import { ToggleDots } from './ToggleDots'

export function File ({ text, isVisible = true }) {
  return (
    <div class={`flex flex-row items-center ${isVisible ? 'block' : 'hidden'}`}>
      <FileIcon />
      <p class="text-white">{text}</p>
      <ToggleDots />
    </div>
  )
}
