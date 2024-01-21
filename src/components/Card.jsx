import { Button } from './Button'

export function Card ({ children, title, sizeFull }) {
  return (
    <div
      class={`${sizeFull ? 'w-3/5' : 'w-96'} bg-gray-900 rounded p-6 space-y-4`}
    >
      <div class='flex justify-between'>
        <h2 class='text-xl font-bold text-white'>{title}</h2>
        <Button text="Adicionar" class="px-8"/>
      </div>
      {children}
    </div>
  )
}
