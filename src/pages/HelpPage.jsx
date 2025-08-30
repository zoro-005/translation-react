import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const HelpPage = () => {
  const navigate = useNavigate()

  const faqs = [
    {
      question: "How do I start a new conversation?",
      answer: "Click the 'New Chat' button in the sidebar and select a contact from your list."
    },
    {
      question: "How does real-time translation work?",
      answer: "Messages are automatically translated based on your language preferences. You'll see a translation indicator when a message has been translated."
    },
    {
      question: "Can I make voice and video calls?",
      answer: "Yes! Click the phone or video icon in any chat window to start a call."
    },
    {
      question: "How do I change my language settings?",
      answer: "Go to Settings > Language to select your preferred languages for translation."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all messages are encrypted end-to-end to ensure your privacy and security."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
      <header className="bg-white dark:bg-dark-secondary shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate(-1)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mr-4"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Help Center</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How can we help you?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions below
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Still need help?
          </h3>
          <button 
            onClick={() => navigate('/feedback')}
            className="btn-primary px-6 py-3"
          >
            Contact Support
          </button>
        </div>
      </main>
    </div>
  )
}

export default HelpPage
