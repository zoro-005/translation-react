import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const FriendProfilePage = () => {
  const navigate = useNavigate()

  // Sample friend data - in real app this would come from props/context
  const friend = {
    name: 'Virat Kohli',
    avatar: '/images/dev.png',
    email: 'virat.kohli@example.com',
    phone: '+91 98765 43210',
    status: 'online',
    about: 'Love cricket and technology. Always learning something new!',
    joinedDate: 'January 2023',
    lastSeen: 'online'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
      <header className="bg-white dark:bg-dark-secondary shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/chat')}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mr-4"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Info</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-8 mb-6">
          <div className="text-center">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {friend.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{friend.email}</p>
            <div className="flex items-center justify-center mt-2">
              <div className={`w-2 h-2 rounded-full mr-2 ${
                friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {friend.status === 'online' ? 'Online' : `Last seen ${friend.lastSeen}`}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
              <i className="fas fa-comment mr-2"></i>
              Message
            </button>
            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              <i className="fas fa-phone mr-2"></i>
              Call
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <i className="fas fa-video mr-2"></i>
              Video
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* About */}
          <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
            <p className="text-gray-600 dark:text-gray-400">{friend.about}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-gray-400 w-5 mr-3"></i>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white">{friend.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-gray-400 w-5 mr-3"></i>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white">{friend.phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar text-gray-400 w-5 mr-3"></i>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                  <p className="text-gray-900 dark:text-white">{friend.joinedDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Options */}
          <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy Options</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-yellow-600 dark:text-yellow-400">
                <i className="fas fa-volume-mute mr-3"></i>
                Mute Notifications
              </button>
              <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-red-600 dark:text-red-400">
                <i className="fas fa-ban mr-3"></i>
                Block Contact
              </button>
              <button className="w-full text-left p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-red-600 dark:text-red-400">
                <i className="fas fa-flag mr-3"></i>
                Report Contact
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FriendProfilePage
