import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setCurrentUser(user)
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('currentUser')
      }
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    try {
      setCurrentUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('currentUser', JSON.stringify(userData))
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Login failed' }
    }
  }

  const register = (userData) => {
    try {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || []
      
      // Check if user already exists
      const userExists = existingUsers.find(user => user.email === userData.email)
      if (userExists) {
        return { success: false, error: 'User already exists' }
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        avatar: '/images/default-profile.png',
        createdAt: new Date().toISOString()
      }

      // Store user
      existingUsers.push(newUser)
      localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))

      // Auto login
      const loginResult = login({
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        avatar: newUser.avatar
      })

      return loginResult
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: 'Registration failed' }
    }
  }

  const logout = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('currentUser')
    localStorage.removeItem('chatMessages')
  }

  const value = {
    currentUser,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
