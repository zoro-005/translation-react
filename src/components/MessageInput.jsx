import React, { useState, useRef } from 'react'
import { useChat } from '../context/ChatContext'

const MessageInput = ({ showEmojiPicker, setShowEmojiPicker }) => {
  const { sendMessage } = useChat()
  const [message, setMessage] = useState('')
  const [showAttachOptions, setShowAttachOptions] = useState(false)
  const textareaRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message)
      setMessage('')
      resetTextareaHeight()
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value)
    adjustTextareaHeight()
  }

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
    }
  }

  const resetTextareaHeight = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
    }
  }

  const handleAttachmentOption = (type) => {
    setShowAttachOptions(false)
    
    switch(type) {
      case 'camera':
        console.log('Open camera')
        break
      case 'gallery':
        console.log('Open gallery')
        break
      case 'document':
        console.log('Attach document')
        break
      case 'location':
        console.log('Share location')
        break
      case 'contact':
        console.log('Share contact')
        break
      default:
        console.log('Unknown attachment type')
    }
  }

  return (
    <div className="bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-700 p-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        {/* Attachment Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowAttachOptions(!showAttachOptions)}
            className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <i className="fas fa-paperclip text-lg"></i>
          </button>

          {/* Attachment Options */}
          {showAttachOptions && (
            <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
              <button 
                onClick={() => handleAttachmentOption('camera')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300 rounded-t-lg"
              >
                <i className="fas fa-camera mr-3 text-blue-500"></i>
                Camera
              </button>
              <button 
                onClick={() => handleAttachmentOption('gallery')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
              >
                <i className="fas fa-images mr-3 text-green-500"></i>
                Photo & Video
              </button>
              <button 
                onClick={() => handleAttachmentOption('document')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
              >
                <i className="fas fa-file mr-3 text-red-500"></i>
                Document
              </button>
              <button 
                onClick={() => handleAttachmentOption('location')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300"
              >
                <i className="fas fa-map-marker-alt mr-3 text-orange-500"></i>
                Location
              </button>
              <button 
                onClick={() => handleAttachmentOption('contact')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center text-gray-700 dark:text-gray-300 rounded-b-lg"
              >
                <i className="fas fa-user mr-3 text-purple-500"></i>
                Contact
              </button>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="w-full px-4 py-2 pr-12 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white resize-none transition-colors"
            rows="1"
            style={{ minHeight: '40px', maxHeight: '120px' }}
          />
          
          {/* Emoji Button */}
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <i className="fas fa-smile text-lg"></i>
          </button>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-2 rounded-full transition-all ${
            message.trim()
              ? 'bg-primary-500 text-white hover:bg-primary-600 transform hover:scale-105'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  )
}

export default MessageInput
