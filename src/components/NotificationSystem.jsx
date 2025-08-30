import React from 'react'

const NotificationSystem = ({ notification }) => {
  if (!notification) return null

  const getNotificationStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white'
      case 'error':
        return 'bg-red-500 text-white'
      case 'warning':
        return 'bg-yellow-500 text-white'
      case 'info':
      default:
        return 'bg-blue-500 text-white'
    }
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return 'fas fa-check-circle'
      case 'error':
        return 'fas fa-exclamation-circle'
      case 'warning':
        return 'fas fa-exclamation-triangle'
      case 'info':
      default:
        return 'fas fa-info-circle'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-up">
      <div className={`${getNotificationStyles(notification.type)} px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm`}>
        <i className={`${getIcon(notification.type)} flex-shrink-0`}></i>
        <p className="text-sm font-medium">{notification.message}</p>
      </div>
    </div>
  )
}

export default NotificationSystem
