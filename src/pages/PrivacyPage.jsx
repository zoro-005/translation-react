import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const PrivacyPage = () => {
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy Policy</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Information We Collect
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              send messages, or contact us for support. This includes your name, email address, 
              and any messages you send through our service.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              How We Use Your Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              including to deliver and facilitate real-time translation of your messages.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Data Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. All messages 
              are encrypted end-to-end.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Data Retention
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We retain your information only for as long as necessary to provide our services 
              and fulfill the purposes outlined in this privacy policy.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any questions about this Privacy Policy, please contact us through 
              our feedback form or email us at privacy@translatalk.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPage
