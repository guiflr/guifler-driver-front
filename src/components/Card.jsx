export function Card({children, title}){
    return (
        <div class="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
            <h2 class="text-xl font-bold text-white">{title}</h2>
            {children}
        </div>
    )
}