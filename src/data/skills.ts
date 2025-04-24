// Интерфейс для навыка
export interface Skill {
  name: string
  level: number // от 0 до 100
  icon?: string // SVG icon или URL к картинке
  category: 'frontend' | 'backend' | 'devops' | 'other'
}

// Основные навыки
export const skills: Skill[] = [
  // Frontend
  {
    name: 'JavaScript',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
  },
  {
    name: 'React',
    level: 92,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    level: 85,
    category: 'frontend',
  },
  {
    name: 'HTML/CSS',
    level: 90,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 88,
    category: 'frontend',
  },
  {
    name: 'Redux',
    level: 85, 
    category: 'frontend',
  },

  // Backend
  {
    name: 'Node.js',
    level: 88,
    category: 'backend',
  },
  {
    name: 'Express',
    level: 85,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'backend',
  },
  {
    name: 'SQL',
    level: 75,
    category: 'backend',
  },
  {
    name: 'GraphQL',
    level: 78,
    category: 'backend',
  },

  // DevOps
  {
    name: 'Git',
    level: 90,
    category: 'devops',
  },
  {
    name: 'Docker',
    level: 75,
    category: 'devops',
  },
  {
    name: 'CI/CD',
    level: 80,
    category: 'devops',
  },
  {
    name: 'AWS',
    level: 65,
    category: 'devops',
  },

  // Other
  {
    name: 'Agile/Scrum',
    level: 85,
    category: 'other',
  },
  {
    name: 'Testing/Jest',
    level: 80,
    category: 'other',
  },
  {
    name: 'Responsive Design',
    level: 90,
    category: 'other',
  },
  {
    name: 'Performance Optimization',
    level: 82,
    category: 'other',
  },
]

// Группированные навыки по категориям
export const groupedSkills = skills.reduce<Record<string, Skill[]>>(
  (groups, skill) => {
    const category = skill.category
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(skill)
    return groups
  },
  {}
) 