'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Обо мне', href: '/about' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Блог', href: '/blog' },
    { label: 'Контакты', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип / имя */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-bold text-xl text-gray-900 dark:text-white"
            >
              Иван Разработчиков
            </Link>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'text-primary dark:text-primary-500 bg-gray-100 dark:bg-gray-800'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Кнопка мобильного меню */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              type="button"
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Открыть меню</span>
              {/* Иконка меню */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-base font-medium ${
                  pathname === item.href
                    ? 'text-primary bg-gray-100 dark:bg-gray-800 dark:text-primary-500'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
} 