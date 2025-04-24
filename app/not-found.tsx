import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">Страница не найдена</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Извините, но запрашиваемая вами страница не существует или была перемещена.
      </p>
      <Link 
        href="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
      >
        Вернуться на главную
      </Link>
    </div>
  )
} 