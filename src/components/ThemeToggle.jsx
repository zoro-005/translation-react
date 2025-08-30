import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <div 
      className="relative cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="w-15 h-9 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 border-2 border-white border-opacity-20">
        <div 
          className={`w-7 h-7 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-transform duration-300 flex items-center justify-center text-white text-sm ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}
        >
          {isDark ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fas fa-sun"></i>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle
