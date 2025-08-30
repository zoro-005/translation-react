import React from 'react'

const MessageBubble = ({ message }) => {
  const isReceived = message.type === 'received'

  return (
    <div className={`flex ${isReceived ? 'justify-start' : 'justify-end'} animate-slide-up`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl break-words ${
        isReceived 
          ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md' 
          : 'bg-primary-500 text-white rounded-br-md'
      }`}>
        {/* Message Text */}
        <p className="text-sm">{message.text}</p>
        
        {/* Translation Indicator */}
        {message.translated && (
          <div className="flex items-center mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
            <i className="fas fa-language text-xs mr-1 opacity-70"></i>
            <span className="text-xs opacity-70">Translated from Spanish</span>
          </div>
        )}
        
        {/* Message Meta */}
        <div className="flex items-center justify-end mt-2 space-x-1">
          <span className="text-xs opacity-70">
            {message.time}
          </span>
          
          {/* Message Status for sent messages */}
          {!isReceived && message.status && (
            <i className={`fas fa-check-double text-xs ${
              message.status === 'read' ? 'text-blue-300' : 'text-white opacity-70'
            }`}></i>
          )}
        </div>
        
        {/* Sender name for group messages */}
        {message.sender && (
          <div className="text-xs opacity-70 mb-1">
            {message.sender}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBubble
