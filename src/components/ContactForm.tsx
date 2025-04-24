'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя'
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Пожалуйста, введите email'
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email'
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Замените на ваши параметры EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Замените на свой ID сервиса из EmailJS
        'YOUR_TEMPLATE_ID', // Замените на свой ID шаблона из EmailJS
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        'YOUR_USER_ID' // Замените на свой User ID из EmailJS
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    }

    setIsSubmitting(false)

    // Сбрасываем статус обратно в idle через 5 секунд
    setTimeout(() => {
      setSubmitStatus('idle')
    }, 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    
    // Убираем ошибку при вводе
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const inputClasses = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
  const errorClasses = "text-red-500 text-sm mt-1"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Связаться со мной
      </h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
          Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
          Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь со мной другим способом.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className={inputClasses}
            placeholder="Ваше имя"
            disabled={isSubmitting}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            className={inputClasses}
            placeholder="ваш@email.com"
            disabled={isSubmitting}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            className={`${inputClasses} h-32 resize-none`}
            placeholder="Напишите ваше сообщение здесь..."
            disabled={isSubmitting}
          />
          {errors.message && <p className={errorClasses}>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 bg-primary text-white font-medium rounded-lg transition-colors ${
            isSubmitting
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-primary-dark'
          }`}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
        </button>
      </form>
    </motion.div>
  )
} 