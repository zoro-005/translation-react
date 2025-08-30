import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const TermsPage = () => {
  const navigate = useNavigate()

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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Terms of Service</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of Service
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Acceptance of Terms
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              By accessing and using TranslaTalk, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Use License
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Permission is granted to temporarily use TranslaTalk for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              User Conduct
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You agree not to use the service to transmit any content that is unlawful, harmful, 
              threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Service Availability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We strive to provide continuous service availability but cannot guarantee uninterrupted 
              access to TranslaTalk. We reserve the right to modify or discontinue the service at any time.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Limitation of Liability
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              In no event shall TranslaTalk or its suppliers be liable for any damages arising out of 
              the use or inability to use the service.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Changes to Terms
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We reserve the right to revise these terms at any time without notice. By using this 
              service, you are agreeing to be bound by the current version of these terms.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TermsPage
