'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Skill, groupedSkills } from '@/data/skills'

export default function Skills() {
  // Состояние для отслеживания активной категории
  const [activeCategory, setActiveCategory] = useState<string>('frontend')
  
  // Названия категорий для отображения
  const categoryNames: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    other: 'Другие навыки'
  }

  // Получаем навыки текущей категории
  const currentSkills = groupedSkills[activeCategory] || []

  // Анимация при появлении
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Мои навыки
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Ключевые технологии и инструменты, которыми я владею и активно использую в разработке.
          </p>
        </div>

        {/* Переключатель категорий */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(groupedSkills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {categoryNames[category]}
            </button>
          ))}
        </div>

        {/* Список навыков с прогресс-барами */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory} // Пересоздаём компонент при смене категории для запуска анимации
        >
          {currentSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Компонент для отображения одного скилла с прогресс-баром
function SkillBar({ skill }: { skill: Skill }) {
  return (
    <motion.div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm" variants={item}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
} 