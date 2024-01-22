import { Button } from './Button'
import { DropdownText } from './DropdownText'

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
        <DropdownText title={title} />
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
