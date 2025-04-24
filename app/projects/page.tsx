import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllProjects } from '@/src/data/projects'

export const metadata: Metadata = {
  title: 'Мои проекты',
  description: 'Изучите мои последние проекты и работы',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Мои проекты</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Коллекция моих работ в сфере веб-разработки. Каждый проект отражает мои навыки
          и опыт в различных технологиях.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="relative h-52 w-full">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-blue-600 inline-flex items-center text-sm font-medium group-hover:underline">
                  Подробнее
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 