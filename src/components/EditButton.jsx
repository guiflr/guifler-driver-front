export function EditButton ({ onClick }) {
  return (
    <button
      class='flex p-2.5 bg-blue-600 rounded-xl transition-all duration-300 text-white'
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        stroke-width='2'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
        />
      </svg>
    </button>
  )
}
