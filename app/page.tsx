import Hero from '@/src/components/Hero'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import { featuredProjects } from '@/src/data/projects'

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Обо мне
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Я Full-Stack разработчик с более чем 5-летним опытом создания современных веб-приложений.
              Специализируюсь на React, TypeScript, Node.js и смежных технологиях.
              Всегда стремлюсь писать чистый, поддерживаемый код и придерживаюсь лучших практик разработки.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Образование</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Магистр компьютерных наук<br />
                Московский Государственный Технический Университет, 2018
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Опыт работы</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ведущий Frontend разработчик в TechCorp<br />
                Full-Stack разработчик в WebSolutions<br />
                JavaScript разработчик в StartupHub
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Личные качества</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Быстрая обучаемость<br />
                Решение сложных задач<br />
                Работа в команде<br />
                Внимание к деталям
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Skills />
      
      <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Избранные проекты
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Несколько проектов, демонстрирующих мои навыки и подход к разработке.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={`/projects/${project.id}`} className="text-primary dark:text-primary-500 font-medium hover:underline">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projects" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Все проекты
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 