import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useChat } from '../context/ChatContext'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const ChatSidebar = () => {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  const { chats, selectedChat, selectChat, searchTerm, setSearchTerm } = useChat()
  const { isDark } = useTheme()
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const filteredChats = chats.filter(chat => {
    if (activeFilter === 'unread') {
      return chat.unreadCount > 0
    }
    if (activeFilter === 'groups') {
      return chat.name.includes('Team') || chat.name.includes('Group')
    }
    return true
  })

  return (
    <div className="w-80 bg-white dark:bg-dark-secondary border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          {/* Profile Section */}
          <div className="relative">
            <div 
              className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
              onClick={handleProfileClick}
            >
              <img
                src={currentUser?.avatar || '/images/default-profile.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {currentUser?.firstName} {currentUser?.lastName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  @{currentUser?.email?.split('@')[0]}
                </p>
              </div>
              <i className="fas fa-chevron-down ml-2 text-gray-400"></i>
            </div>

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <img
                      src={currentUser?.avatar || '/images/default-profile.png'}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {currentUser?.firstName} {currentUser?.lastName}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {currentUser?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <button 
                    onClick={() => navigate('/profile')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <i className="fas fa-user mr-3"></i>
                    Profile
                  </button>
                  <button 
                    onClick={() => navigate('/settings')}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <i className="fas fa-cog mr-3"></i>
                    Settings
                  </button>
                  <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  <button 
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-red-600 dark:text-red-400"
                  >
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Menu Options */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={() => navigate('/new-chat')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="New Chat"
            >
              <i className="fas fa-edit text-gray-600 dark:text-gray-400"></i>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mt-3">
          {[
            { key: 'all', label: 'All', icon: 'fas fa-list' },
            { key: 'unread', label: 'Unread', icon: 'fas fa-circle' },
            { key: 'groups', label: 'Groups', icon: 'fas fa-users' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <i className={`${filter.icon} mr-1`}></i>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            {searchTerm ? 'No chats found' : 'No conversations yet'}
          </div>
        ) : (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => selectChat(chat)}
              className={`p-4 border-b border-gray-100 dark:border-gray-700 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedChat?.id === chat.id ? 'bg-primary-50 dark:bg-primary-900 border-primary-200 dark:border-primary-700' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {chat.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unreadCount > 0 && (
                      <span className="bg-primary-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ChatSidebar
