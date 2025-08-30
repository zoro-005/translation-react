import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave 1 */}
      <div 
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full opacity-10 animate-wave"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          animationDelay: '0s'
        }}
      ></div>
      
      {/* Wave 2 */}
      <div 
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full opacity-10 animate-wave"
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          animationDelay: '-7s'
        }}
      ></div>
      
      {/* Wave 3 */}
      <div 
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full opacity-10 animate-wave"
        style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          animationDelay: '-14s'
        }}
      ></div>
    </div>
  )
}

export default AnimatedBackground
