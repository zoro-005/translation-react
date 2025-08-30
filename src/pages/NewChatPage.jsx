import React from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const NewChatPage = () => {
  const navigate = useNavigate()

  const contacts = [
    { id: '1', name: 'Virat Kohli', avatar: '/images/dev.png', status: 'online' },
    { id: '2', name: 'Arjun Kapoor', avatar: '/images/amit.jpg', status: 'offline' },
    { id: '3', name: 'Ankit Sharma', avatar: '/images/tyagi.jpg', status: 'away' },
    { id: '4', name: 'Design Team', avatar: '/images/ankit.jpg', status: 'online' }
  ]

  const handleStartChat = (contact) => {
    // In a real app, this would create a new chat or navigate to existing one
    navigate('/chat')
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
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">New Chat</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <i className="fas fa-users text-2xl text-primary-500 mb-2"></i>
              <p className="text-sm font-medium text-gray-900 dark:text-white">New Group</p>
            </button>
            <button className="p-4 bg-white dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <i className="fas fa-user-plus text-2xl text-green-500 mb-2"></i>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Add Contact</p>
            </button>
          </div>
        </div>

        {/* Contacts List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contacts</h2>
          <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-600">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleStartChat(contact)}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                      contact.status === 'online' ? 'bg-green-500' : 
                      contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{contact.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{contact.status}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                      <i className="fas fa-phone"></i>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-500 transition-colors">
                      <i className="fas fa-video"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default NewChatPage
