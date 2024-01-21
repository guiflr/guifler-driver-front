import { Button } from './Button'

export function Card ({ children, title, sizeFull, hasButton, onClick }) {
  return (
    <div
      class={`${sizeFull ? 'w-3/5' : 'w-96'} bg-gray-900 rounded p-6 space-y-4`}
    >
      <div class='flex justify-between items-center'>
        <h2 class='text-xl font-bold text-white'>{title}</h2>
        {hasButton && <Button text="Adicionar" class="px-8" onClick={() => onClick()}/>}
      </div>
      {children}
    </div>
  )
}
