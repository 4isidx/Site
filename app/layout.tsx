import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/src/components/ThemeProvider'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

// Подключаем шрифт Inter
const inter = Inter({
  subsets: ['latin', 'cyrillic'], 
  display: 'swap'
})

// Метаданные сайта для SEO
export const metadata: Metadata = {
  title: 'Иван Разработчиков | Full-Stack Разработчик',
  description: 'Портфолио Full-Stack разработчика, специализирующегося на создании современных веб-приложений с использованием React, Next.js, Node.js и других технологий',
  keywords: ['Full-Stack разработчик', 'React', 'Next.js', 'Node.js', 'TypeScript', 'портфолио'],
  authors: [{ name: 'Иван Разработчиков', url: 'https://github.com/username' }],
  creator: 'Иван Разработчиков',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://myportfolio.dev',
    siteName: 'Портфолио Ивана Разработчикова',
    title: 'Иван Разработчиков | Full-Stack Разработчик',
    description: 'Портфолио Full-Stack разработчика со специализацией на React, Next.js и современных веб-технологиях',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Иван Разработчиков - Full-Stack Developer'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Иван Разработчиков | Full-Stack Разработчик',
    description: 'Портфолио Full-Stack разработчика со специализацией на React, Next.js и современных веб-технологиях',
    creator: '@username',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 