import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from '../components/ThemeToggle'
import AnimatedBackground from '../components/AnimatedBackground'
import FloatingElements from '../components/FloatingElements'

const LandingPage = () => {
  const navigate = useNavigate()
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-primary dark:to-dark-secondary transition-all duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggle />
      </div>

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center animate-fade-in">
          {/* Logo Section */}
          <div className="mb-12">
            <div className="text-6xl md:text-7xl mb-4 animate-pulse-glow">
              <i className="fas fa-comments bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"></i>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent mb-4">
              TranslaTalk
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Breaking language barriers with seamless translation
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/login')}
              className="btn-primary group px-8 py-4 text-lg"
            >
              <span>Get Started</span>
              <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
            </button>
            <button
              onClick={() => navigate('/about')}
              className="btn-secondary px-8 py-4 text-lg text-gray-700 dark:text-gray-200"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />
    </div>
  )
}

export default LandingPage
