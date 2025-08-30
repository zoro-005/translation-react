import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useChat } from '../context/ChatContext'
import ChatSidebar from '../components/ChatSidebar'
import ChatWindow from '../components/ChatWindow'

const ChatPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth()
  const { selectedChat } = useChat()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-primary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="h-screen flex bg-white dark:bg-dark-primary transition-colors duration-300">
      {/* Chat Sidebar */}
      <ChatSidebar />
      
      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <ChatWindow />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-dark-secondary">
            <div className="text-center">
              <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">
                <i className="fas fa-comments"></i>
              </div>
              <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Welcome to TranslaTalk
              </h2>
              <p className="text-gray-500 dark:text-gray-500">
                Select a chat to start messaging
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatPage
