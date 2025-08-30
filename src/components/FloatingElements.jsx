import React from 'react'

const FloatingElements = () => {
  const icons = [
    { icon: 'fas fa-message', delay: '0s' },
    { icon: 'fas fa-video', delay: '1s' },
    { icon: 'fas fa-phone', delay: '2s' },
    { icon: 'fas fa-language', delay: '3s' },
    { icon: 'fab fa-android', delay: '4s' },
    { icon: 'fab fa-windows', delay: '5s' }
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute text-2xl text-gray-400 dark:text-gray-600 opacity-30 animate-float"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: item.delay,
          }}
        >
          <i className={item.icon}></i>
        </div>
      ))}
    </div>
  )
}

export default FloatingElements
