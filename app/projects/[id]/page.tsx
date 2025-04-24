import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectById, getRelatedProjects } from '@/src/data/projects'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface ProjectPageProps {
  params: {
    id: string
  }
}

// Генерация метаданных для страницы проекта
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)
  
  if (!project) {
    return {
      title: 'Проект не найден'
    }
  }

  return {
    title: `${project.title} | Мои проекты`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(params.id, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <BsGithub className="text-lg" />
              GitHub
            </a>
          )}
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <FiExternalLink className="text-lg" />
              Демо
            </a>
          )}
        </div>
      </div>
      
      <div className="relative h-80 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src={project.imageUrl} 
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
        <MDXRemote source={project.content} />
      </div>
      
      {relatedProjects.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Похожие проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject) => (
              <Link 
                href={`/projects/${relatedProject.id}`} 
                key={relatedProject.id}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                  <div className="relative h-40 w-full">
                    <Image 
                      src={relatedProject.imageUrl} 
                      alt={relatedProject.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {relatedProject.technologies.slice(0, 2).map((tech) => (
                        <span 
                          key={tech} 
                          className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {relatedProject.technologies.length > 2 && (
                        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded text-xs">
                          +{relatedProject.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-blue-600 hover:underline font-medium"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="mr-2 h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Вернуться к списку проектов
        </Link>
      </div>
    </div>
  )
} 