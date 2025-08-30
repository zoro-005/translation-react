import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChat } from '../context/ChatContext'
import MessageBubble from './MessageBubble'
import MessageInput from './MessageInput'
import EmojiPicker from './EmojiPicker'

const ChatWindow = () => {
  const navigate = useNavigate()
  const { selectedChat, messages, isTyping } = useChat()
  const messagesEndRef = useRef(null)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showMoreOptions, setShowMoreOptions] = useState(false)

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMoreOptions = (action) => {
    setShowMoreOptions(false)
    
    switch(action) {
      case 'view-contact':
        navigate('/friend-profile')
        break
      case 'search':
        // Toggle search in chat
        break
      case 'mute':
        // Mute notifications
        break
      case 'block':
        // Block contact
        break
      default:
        console.log('Unknown action:', action)
    }
  }

  if (!selectedChat) {
    return null
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-white dark:bg-dark-secondary border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h2 className="font-semibold text-gray-900 dark:text-white">
              {selectedChat.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {selectedChat.isOnline ? 'Online' : `Last seen ${selectedChat.lastSeen}`}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <i className="fas fa-video text-gray-600 dark:text-gray-400"></i>
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <i className="fas fa-phone text-gray-600 dark:text-gray-400"></i>
          </button>
          <div className="relative">
            <button 
              onClick={() => setShowMoreOptions(!showMoreOptions)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <i className="fas fa-ellipsis-v text-gray-600 dark:text-gray-400"></i>
            </button>

            {showMoreOptions && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <button 
                  onClick={() => handleMoreOptions('view-contact')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                >
                  <i className="fas fa-user mr-3"></i>
                  View Contact
                </button>
                <button 
                  onClick={() => handleMoreOptions('search')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                >
                  <i className="fas fa-search mr-3"></i>
                  Search
                </button>
                <button 
                  onClick={() => handleMoreOptions('mute')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
                >
                  <i className="fas fa-volume-mute mr-3"></i>
                  Mute
                </button>
                <button 
                  onClick={() => handleMoreOptions('block')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-red-600 dark:text-red-400"
                >
                  <i className="fas fa-ban mr-3"></i>
                  Block
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-dark-primary">
        {/* Date Separator */}
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full">
            Today
          </span>
        </div>

        {/* Messages */}
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {selectedChat.name} is typing...
              </span>
            </div>
          )}
        </div>
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <MessageInput 
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
      />

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <EmojiPicker onClose={() => setShowEmojiPicker(false)} />
      )}
    </div>
  )
}

export default ChatWindow
