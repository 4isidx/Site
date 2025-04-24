'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  // Можно добавить фильтрацию, если нужно
  const [filter, setFilter] = useState<string | null>(null)
  
  // Фильтруем проекты, если выбран фильтр
  const filteredProjects = filter
    ? projects.filter((project) => project.technologies.includes(filter))
    : projects

  // Список уникальных технологий для фильтров
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort()

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Мои проекты
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Примеры моих работ. Каждый проект демонстрирует мои навыки разработки и подход к решению задач.
          </p>
        </div>

        {/* Фильтры по технологиям */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Все проекты
          </button>
          {allTechnologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Список проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Если нет проектов */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              Проекты не найдены. Попробуйте изменить фильтр.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
} 