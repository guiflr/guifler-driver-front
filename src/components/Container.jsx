import { Button } from './Button'

export function Container ({
  children,
  title,
  sizeFull,
  hasButton,
  onClick,
  buttonColor,
  buttonTitle
}) {
  return (
    <div
      class={`${sizeFull ? 'w-3/5' : 'w-96'} bg-gray-900 rounded p-6 space-y-4`}
    >
      <div class='flex justify-between items-center'>
        <h2 class='text-xl font-bold text-white'>{title}</h2>
        {hasButton && (
          <Button
            color={buttonColor}
            class='px-8'
            text={buttonTitle}
            onClick={() => onClick()}
          />
        )}
      </div>
      {children}
    </div>
  )
}
