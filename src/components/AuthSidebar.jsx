import React from 'react'
import { useTheme } from '../context/ThemeContext'

const AuthSidebar = ({ isLogin }) => {
  const { isDark } = useTheme()

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Login',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: 'fas fa-clock',
      title: 'Quick Access',
      description: 'Get started in seconds with our streamlined interface'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Collaboration',
      description: 'Connect and collaborate with your team seamlessly'
    },
    {
      icon: 'fas fa-language',
      title: 'Real-time Translation',
      description: 'Break language barriers with instant translation'
    }
  ]

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-500 to-primary-600 text-white p-12 flex-col justify-center">
      <div className="max-w-md">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <i className="fas fa-comments text-3xl mr-3"></i>
          <span className="text-2xl font-bold">TranslaTalk</span>
        </div>

        {/* Welcome Content */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {isLogin ? 'Welcome Back' : 'Join TranslaTalk'}
          </h1>
          <p className="text-lg opacity-90">
            {isLogin 
              ? 'Sign in to continue your conversations and stay connected with your team.'
              : 'Create your account and start connecting with people around the world.'
            }
          </p>
        </div>

        {/* Features */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 opacity-90 hover:opacity-100 transition-opacity"
            >
              <div className="flex-shrink-0">
                <i className={`${feature.icon} text-xl`}></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
          <p className="text-sm italic mb-2">
            "TranslaTalk has revolutionized how our global team communicates. 
            The real-time translation feature is a game-changer!"
          </p>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <i className="fas fa-user text-sm"></i>
            </div>
            <div>
              <p className="font-semibold text-sm">Sarah Chen</p>
              <p className="text-xs opacity-80">Global Team Lead</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthSidebar
