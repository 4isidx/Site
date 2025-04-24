// Интерфейс для проекта
export interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  content: string
  date: string
}

// Данные о проектах
const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Персональный сайт-портфолио",
    description: "Современный сайт-портфолио, разработанный с использованием Next.js и Tailwind CSS для демонстрации моих проектов и навыков.",
    imageUrl: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    content: `
# Персональный сайт-портфолио

Этот проект представляет собой мой персональный сайт-портфолио, где я могу продемонстрировать свои навыки и проекты потенциальным клиентам и работодателям.

## Особенности

- Современный и отзывчивый дизайн
- Темная и светлая темы
- Оптимизация для SEO
- Страницы для проектов и блога
- Контактная форма

## Технологии

Сайт разработан с использованием современного стека технологий:

- **Next.js** - для серверного рендеринга и оптимизации
- **TypeScript** - для типобезопасности
- **Tailwind CSS** - для стилизации
- **React** - как основа фронтенда
    `,
    date: "2023-05-15"
  },
  {
    id: "e-commerce-platform",
    title: "Платформа электронной коммерции",
    description: "Полнофункциональный интернет-магазин с каталогом товаров, корзиной покупок, системой оплаты и панелью администратора.",
    imageUrl: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    demoUrl: "https://shop-example.com",
    githubUrl: "https://github.com/username/ecommerce",
    content: `
# Платформа электронной коммерции

Полнофункциональное решение для электронной коммерции, реализованное с использованием стека MERN.

## Особенности

- Каталог товаров с фильтрацией и поиском
- Система учетных записей пользователей
- Корзина покупок и функции списка желаний
- Интеграция с платежной системой Stripe
- Панель администратора для управления товарами и заказами
- Система отзывов и рейтингов

## Технический стек

- **Frontend**: React, Redux для управления состоянием, Styled Components
- **Backend**: Node.js с Express
- **База данных**: MongoDB с Mongoose ORM
- **Аутентификация**: JWT
- **Платежи**: Интеграция Stripe API
    `,
    date: "2023-02-10"
  },
  {
    id: "task-management-app",
    title: "Приложение для управления задачами",
    description: "Приложение для управления задачами и проектами с функциями Kanban-доски, отслеживания времени и совместной работы.",
    imageUrl: "/images/projects/task-app.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    demoUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/username/task-app",
    content: `
# Приложение для управления задачами

Это приложение помогает пользователям организовать свои задачи и эффективно управлять проектами.

## Функциональность

- Канбан-доска с перетаскиванием карточек
- Отслеживание времени для задач
- Уведомления о сроках выполнения
- Совместная работа в реальном времени
- Интеграция с календарем
- Мобильное приложение (PWA)

## Технологии

- **Vue.js** - для пользовательского интерфейса
- **Firebase** - для базы данных и аутентификации
- **Vuex** - для управления состоянием
- **Tailwind CSS** - для стилизации
- **Cloud Functions** - для серверной логики
    `,
    date: "2022-11-20"
  },
  {
    id: "fitness-tracker",
    title: "Фитнес-трекер",
    description: "Мобильное приложение для отслеживания тренировок, питания и общего прогресса в достижении фитнес-целей.",
    imageUrl: "/images/projects/fitness.jpg",
    technologies: ["React Native", "GraphQL", "Apollo", "Node.js", "MongoDB"],
    demoUrl: "https://fitness-app-demo.com",
    githubUrl: "https://github.com/username/fitness-tracker",
    content: `
# Фитнес-трекер

Мобильное приложение, помогающее пользователям следить за своими тренировками и питанием.

## Особенности

- Отслеживание тренировок с визуализацией прогресса
- Планировщик питания и калькулятор калорий
- Интеграция с фитнес-трекерами и смарт-часами
- Персонализированные планы тренировок
- Социальные функции и соревнования

## Технический стек

- **React Native** - для кросс-платформенной разработки
- **GraphQL с Apollo** - для эффективного обмена данными
- **Node.js** - для серверной части
- **MongoDB** - для хранения данных пользователей
- **D3.js** - для визуализации данных
    `,
    date: "2022-08-05"
  },
  {
    id: "ai-chatbot",
    title: "ИИ-чатбот для поддержки клиентов",
    description: "Умный чатбот, использующий обработку естественного языка для автоматизации поддержки клиентов и увеличения эффективности обслуживания.",
    imageUrl: "/images/projects/chatbot.jpg",
    technologies: ["Python", "TensorFlow", "NLP", "Flask", "React", "Docker"],
    demoUrl: "https://chatbot-demo.com",
    githubUrl: "https://github.com/username/ai-chatbot",
    content: `
# ИИ-чатбот для поддержки клиентов

Интеллектуальный чатбот, разработанный для автоматизации задач поддержки клиентов и повышения качества обслуживания.

## Функциональность

- Понимание естественного языка и обработка запросов
- Обучение на основе предыдущих взаимодействий
- Интеграция с CRM и базами знаний
- Маршрутизация сложных запросов к операторам
- Аналитика и отчетность по взаимодействиям

## Технологии

- **Python** - основной язык разработки
- **TensorFlow и NLTK** - для обработки естественного языка
- **Flask** - для API
- **React** - для фронтенд интерфейса
- **Docker** - для развертывания
- **MongoDB** - для хранения данных
    `,
    date: "2022-04-18"
  }
]

// Получение всех проектов
export function getAllProjects(): Project[] {
  return projects;
}

// Получение проекта по ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// Получение похожих проектов
export function getRelatedProjects(id: string, limit: number = 3): Project[] {
  const currentProject = getProjectById(id);
  if (!currentProject) return [];
  
  // Find projects that share technologies with the current project
  return projects
    .filter(project => project.id !== id)
    .sort((a, b) => {
      // Count common technologies
      const commonTechsA = a.technologies.filter(tech => 
        currentProject.technologies.includes(tech)
      ).length;
      
      const commonTechsB = b.technologies.filter(tech => 
        currentProject.technologies.includes(tech)
      ).length;
      
      // Sort by number of common technologies (descending)
      if (commonTechsB !== commonTechsA) {
        return commonTechsB - commonTechsA;
      }
      
      // If same number of common technologies, sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
} 