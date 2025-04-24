export default function LoadingProject() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Заголовок */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-6 animate-pulse"></div>
        
        {/* Технологии */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3, 4].map((index) => (
            <div 
              key={index}
              className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"
            ></div>
          ))}
        </div>
        
        {/* Кнопки */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>
      
      {/* Изображение */}
      <div className="h-80 md:h-96 w-full mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
      
      {/* Содержимое */}
      <div className="space-y-4 mb-12">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-4/5 animate-pulse"></div>
      </div>
      
      {/* Похожие проекты */}
      <div className="mt-12">
        <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md animate-pulse">
              <div className="h-40 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 