export function Card ({ children }) {
  return (
    <div class='dark max-w-2xl mx-auto'>
      <div class='p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-70'>
        {children}
      </div>
    </div>
  )
}
