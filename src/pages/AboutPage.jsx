import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'

const AboutPage = () => {
  const navigate = useNavigate()
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-dark-secondary shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mr-4"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">About TranslaTalk</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">
              <i className="fas fa-comments bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              TranslaTalk
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Breaking language barriers with seamless translation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                TranslaTalk aims to connect people across the globe by eliminating language barriers. 
                Our advanced translation technology ensures that conversations flow naturally, regardless 
                of the languages spoken.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We believe that communication should be universal, and every person should be able to 
                express themselves freely and be understood by others.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Real-time message translation
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Support for 100+ languages
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Voice and video calls
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  File sharing and media support
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  End-to-end encryption
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-3"></i>
                  Cross-platform compatibility
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to start connecting?
            </h3>
            <button 
              onClick={() => navigate('/login')}
              className="btn-primary px-8 py-3"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage
